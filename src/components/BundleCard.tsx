import { useState } from 'react'
import {
  brand,
  formatPrice,
  type Bundle,
  type Product,
} from '../brand'
import { WhatsAppIcon } from './Icons'

const catalog: Product[] = [...brand.products, ...brand.accessories]

type Props = {
  bundle: Bundle
}

export default function BundleCard({ bundle }: Props) {
  const items = bundle.itemIds
    .map((id) => catalog.find((item) => item.id === id))
    .filter((item): item is Product => item !== undefined)

  const apparel = items.find((item) => item.sizes.length > 1)
  const [size, setSize] = useState(() =>
    apparel?.sizes.includes('M') ? 'M' : apparel?.sizes[0] ?? '',
  )

  const total = items.reduce((sum, item) => sum + item.price, 0)
  const itemSummary = items
    .map((item) => {
      if (apparel && item.id === apparel.id && size) {
        return `${item.name} ukuran ${size}`
      }
      return item.name
    })
    .join(', ')
  const message = `Halo ${brand.name}, saya ingin memesan paket ${bundle.name}: ${itemSummary}. Total ${formatPrice(total)}. Mohon konfirmasi ketersediaan dan ongkir.`
  const orderUrl = `https://wa.me/${brand.contact.whatsapp}?text=${encodeURIComponent(message)}`
  const featured = Boolean(bundle.featured)

  return (
    <article
      className={`flex flex-col border p-[clamp(0.75rem,1vw,1rem)] ${
        featured
          ? 'border-transparent bg-secondary text-ink max-[960px]:col-span-2 max-[640px]:col-span-1 max-md:col-auto'
          : 'border-line bg-white'
      }`}
    >
      <div className="grid grid-cols-3 gap-[3px] overflow-hidden bg-line">
        {items.slice(0, 3).map((item) => (
          <img
            className="aspect-square h-full w-full object-cover"
            key={item.id}
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            decoding="async"
            style={
              item.imagePosition
                ? { objectPosition: item.imagePosition }
                : undefined
            }
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-[0.9rem] px-[0.2rem] pt-[1.15rem] pb-[0.2rem]">
        <div
          className={`flex justify-between gap-3 text-[0.54rem] leading-[1.4] font-semibold tracking-[0.14em] uppercase ${
            featured ? 'text-ink/60' : 'text-muted'
          }`}
        >
          <span>{bundle.badge}</span>
          <span>{items.length} pieces</span>
        </div>
        <h4 className="font-display text-[clamp(1.7rem,2.1vw,2.1rem)] leading-[1.05] font-medium tracking-[-0.02em]">
          {bundle.name}
        </h4>
        <p
          className={`text-[0.82rem] leading-[1.65] ${
            featured ? 'text-ink/70' : 'text-muted'
          }`}
        >
          {bundle.description}
        </p>

        <div>
          <p className="text-[0.57rem] leading-[1.4] font-semibold tracking-[0.17em] uppercase">
            {brand.accessoriesSection.bundleItemsLabel}
          </p>
          <ul
            className={`mt-2 flex flex-wrap gap-x-2.5 gap-y-1 text-[0.7rem] leading-[1.45] ${
              featured ? 'text-ink/70' : 'text-muted'
            }`}
          >
            {items.map((item) => (
              <li
                className="flex items-center gap-2.5 after:font-semibold after:text-accent after:content-['+'] last:after:hidden"
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {apparel && (
          <label
            className={`flex items-center justify-between gap-3 border-t pt-[0.85rem] text-[0.54rem] leading-[1.4] font-semibold tracking-[0.12em] uppercase ${
              featured ? 'border-ink/20' : 'border-line'
            }`}
          >
            <span className="flex flex-col gap-0.5">
              {brand.accessoriesSection.bundleSizeLabel}
              <strong
                className={`text-[0.7rem] font-medium tracking-[0.02em] normal-case ${
                  featured ? 'text-ink/65' : 'text-muted'
                }`}
              >
                {apparel.name}
              </strong>
            </span>
            <select
              className="shrink-0 border border-line bg-white px-2.5 py-2 text-[0.7rem] tracking-[0.04em] text-ink"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            >
              {apparel.sizes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        )}

        <div
          className={`mt-auto flex items-baseline justify-between gap-4 border-t pt-[0.9rem] text-[0.56rem] leading-[1.4] font-semibold tracking-[0.14em] uppercase ${
            featured ? 'border-ink/20' : 'border-line'
          }`}
        >
          <span>{brand.accessoriesSection.bundleTotalLabel}</span>
          <strong className="font-display text-[1.4rem] font-medium tracking-[0.01em] normal-case">
            {formatPrice(total)}
          </strong>
        </div>

        <a
          className="btn btn-brand mt-0.5 min-h-12 w-full"
          href={orderUrl}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon size={15} />
          {brand.accessoriesSection.bundleCtaLabel}
        </a>
      </div>
    </article>
  )
}
