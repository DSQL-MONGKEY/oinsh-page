import { useEffect, useRef, useState } from 'react'
import { brand, formatPrice, type Product } from '../brand'
import { CloseIcon, WhatsAppIcon } from './Icons'

type Props = {
  product: Product | null
  onClose: () => void
}

export default function QuickView({ product, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [size, setSize] = useState(product?.sizes[0] ?? '')

  useEffect(() => {
    if (!product) return

    const dialog = dialogRef.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [product])

  if (!product) return null

  const isOneSize =
    product.sizes.length === 1 &&
    product.sizes[0].toLowerCase() === 'one size'
  const activeSize = size || product.sizes[0] || ''
  const sizeDetail = !isOneSize && activeSize ? ` ukuran ${activeSize}` : ''
  const message = `Halo ${brand.name}, saya ingin memesan ${product.name} (${product.color})${sizeDetail}.`
  const orderUrl = `https://wa.me/${brand.contact.whatsapp}?text=${encodeURIComponent(message)}`

  return (
    <dialog
      ref={dialogRef}
      className="m-auto max-h-[calc(100vh-2rem)] w-[min(64rem,calc(100vw-2rem))] max-w-none border-0 bg-transparent p-0 text-ink backdrop:bg-burgundy/60 backdrop:backdrop-blur-[7px] max-md:max-h-[calc(100vh-1.5rem)] max-md:w-[calc(100vw-1.5rem)]"
      aria-labelledby="quick-view-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dialogRef.current?.close()
        }
      }}
    >
      <div className="relative grid max-h-[calc(100vh-2rem)] grid-cols-2 overflow-hidden bg-white max-md:block max-md:max-h-[calc(100vh-1.5rem)] max-md:overflow-y-auto">
        <button
          className="absolute top-4 right-4 z-[2] grid size-10 place-items-center rounded-full border border-line bg-white transition-colors hover:bg-burgundy hover:text-main"
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label={brand.quickView.closeLabel}
        >
          <CloseIcon size={18} />
        </button>

        <div className="min-h-full bg-main max-md:h-[36vh] max-md:min-h-60">
          <img
            className="h-full w-full object-cover"
            src={product.image}
            alt={product.imageAlt}
            style={
              product.imagePosition
                ? { objectPosition: product.imagePosition }
                : undefined
            }
          />
        </div>

        <div className="flex max-h-[calc(100vh-2rem)] flex-col gap-[0.9rem] overflow-y-auto p-[clamp(2rem,4vw,3.5rem)] max-md:max-h-none max-md:overflow-visible max-md:p-6">
          <p className="text-[0.56rem] leading-[1.5] font-medium tracking-[0.14em] text-muted uppercase">
            {product.category} · {product.color}
          </p>
          <h2
            className="font-display text-[clamp(2.4rem,4vw,3.5rem)] leading-[0.98] font-normal tracking-[-0.035em]"
            id="quick-view-title"
          >
            {product.name}
          </h2>
          <p className="text-[0.85rem]">{formatPrice(product.price)}</p>
          <p className="text-[0.88rem] leading-[1.75] text-muted">
            {product.description}
          </p>

          {!isOneSize && (
            <fieldset className="mt-1.5">
              <legend className="text-[0.57rem] leading-[1.4] font-semibold tracking-[0.17em] uppercase">
                {brand.quickView.sizeLabel}
              </legend>
              <div className="mt-3 flex flex-wrap gap-[0.45rem]">
                {product.sizes.map((option) => (
                  <label className="relative inline-flex" key={option}>
                    <input
                      className="peer pointer-events-none absolute opacity-0"
                      type="radio"
                      name="product-size"
                      value={option}
                      checked={activeSize === option}
                      onChange={() => setSize(option)}
                    />
                    <span className="grid min-h-[2.45rem] min-w-[2.8rem] cursor-pointer place-items-center border border-line px-[0.7rem] text-[0.66rem] transition-colors peer-checked:border-ink peer-checked:bg-burgundy peer-checked:text-main peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent hover:border-ink">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          <div>
            <p className="text-[0.57rem] leading-[1.4] font-semibold tracking-[0.17em] uppercase">
              {brand.quickView.detailsLabel}
            </p>
            <ul className="mt-2 flex flex-col gap-1.5 text-[0.8rem] leading-[1.6] text-muted">
              {product.details.map((detail) => (
                <li
                  className="before:mr-1 before:content-['—']"
                  key={detail}
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <a
            className="btn btn-brand mt-2.5 min-h-12 w-full"
            href={orderUrl}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={16} />
            {brand.quickView.orderLabel}
          </a>
          <p className="text-[0.7rem] leading-[1.6] text-muted">
            {brand.quickView.note}
          </p>
        </div>
      </div>
    </dialog>
  )
}
