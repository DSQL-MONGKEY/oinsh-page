import { brand, formatPrice, type Product } from '../brand'
import { PlusIcon } from './Icons'

type Props = {
  product: Product
  onOpen: (product: Product, trigger: HTMLButtonElement) => void
  variant?: 'portrait' | 'square'
}

export default function ProductCard({
  product,
  onOpen,
  variant = 'portrait',
}: Props) {
  return (
    <article
      className={`product-card${variant === 'square' ? ' product-card--square' : ''}`}
    >
      <button
        className="product-media"
        type="button"
        onClick={(event) => onOpen(product, event.currentTarget)}
        aria-haspopup="dialog"
        aria-label={`Lihat detail ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          decoding="async"
          style={
            product.imagePosition
              ? { objectPosition: product.imagePosition }
              : undefined
          }
        />
        {product.badge && (
          <span
            className={`product-badge${product.badgeTone === 'sky' ? ' is-sky' : ''}`}
          >
            {product.badge}
          </span>
        )}
        <span className="product-quick">
          <PlusIcon size={14} />
          <span>{brand.quickView.quickLabel}</span>
        </span>
      </button>

      <div className="product-info">
        <div>
          <p className="product-category">
            {product.category} · {product.color}
          </p>
          <h3 className="product-name">{product.name}</h3>
        </div>
        <p className="product-price">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
