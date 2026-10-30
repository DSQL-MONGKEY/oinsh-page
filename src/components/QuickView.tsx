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

  const activeSize = size || product.sizes[0] || ''
  const message = `Halo ${brand.name}, saya ingin memesan ${product.name} (${product.color})${activeSize ? ` ukuran ${activeSize}` : ''}.`
  const orderUrl = `https://wa.me/${brand.contact.whatsapp}?text=${encodeURIComponent(message)}`

  return (
    <dialog
      ref={dialogRef}
      className="quick-view"
      aria-labelledby="quick-view-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dialogRef.current?.close()
        }
      }}
    >
      <div className="quick-view-panel">
        <button
          className="quick-view-close"
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label={brand.quickView.closeLabel}
        >
          <CloseIcon size={18} />
        </button>

        <div className="quick-view-media">
          <img src={product.image} alt={product.imageAlt} />
        </div>

        <div className="quick-view-body">
          <p className="product-category">
            {product.category} · {product.color}
          </p>
          <h2 className="quick-view-title" id="quick-view-title">
            {product.name}
          </h2>
          <p className="quick-view-price">{formatPrice(product.price)}</p>
          <p className="quick-view-description">{product.description}</p>

          <fieldset className="size-picker">
            <legend>{brand.quickView.sizeLabel}</legend>
            <div className="size-options">
              {product.sizes.map((option) => (
                <label
                  key={option}
                  className={`size-option${activeSize === option ? ' is-active' : ''}`}
                >
                  <input
                    type="radio"
                    name="product-size"
                    value={option}
                    checked={activeSize === option}
                    onChange={() => setSize(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="quick-view-details">
            <p className="detail-label">{brand.quickView.detailsLabel}</p>
            <ul>
              {product.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>

          <a
            className="button button--ink quick-view-order"
            href={orderUrl}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={16} />
            {brand.quickView.orderLabel}
          </a>
          <p className="quick-view-note">{brand.quickView.note}</p>
        </div>
      </div>
    </dialog>
  )
}
