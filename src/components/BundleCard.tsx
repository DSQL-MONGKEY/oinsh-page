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
    apparel?.sizes.includes('M')
      ? 'M'
      : apparel?.sizes[0] ?? '',
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

  return (
    <article
      className={`bundle-card${bundle.featured ? ' is-featured' : ''}`}
    >
      <div className="bundle-media">
        {items.slice(0, 3).map((item) => (
          <img
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

      <div className="bundle-body">
        <div className="bundle-meta">
          <span>{bundle.badge}</span>
          <span>{items.length} pieces</span>
        </div>
        <h4 className="bundle-name">{bundle.name}</h4>
        <p className="bundle-description">{bundle.description}</p>

        <div className="bundle-items-block">
          <p className="detail-label">
            {brand.accessoriesSection.bundleItemsLabel}
          </p>
          <ul className="bundle-items">
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>

        {apparel && (
          <label className="bundle-size">
            <span>
              {brand.accessoriesSection.bundleSizeLabel}
              <strong>{apparel.name}</strong>
            </span>
            <select value={size} onChange={(event) => setSize(event.target.value)}>
              {apparel.sizes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        )}

        <div className="bundle-total">
          <span>{brand.accessoriesSection.bundleTotalLabel}</span>
          <strong>{formatPrice(total)}</strong>
        </div>

        <a
          className="button button--ink bundle-cta"
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
