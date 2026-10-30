import { useRef, useState } from 'react'
import { brand, formatPrice, type Product } from '../brand'
import { PlusIcon } from './Icons'
import QuickView from './QuickView'
import Reveal from './Reveal'

export default function Products() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)

  const openProduct = (
    product: Product,
    trigger: HTMLButtonElement,
  ) => {
    lastTrigger.current = trigger
    setActiveProduct(product)
  }

  const closeProduct = () => {
    setActiveProduct(null)
    lastTrigger.current?.focus()
  }

  return (
    <section className="section products" id="new-in">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">{brand.productsSection.eyebrow}</p>
            <h2 className="section-title">
              {brand.productsSection.title}{' '}
              <em>{brand.productsSection.titleAccent}</em>
            </h2>
          </div>
          <div className="section-head-aside">
            <p>{brand.productsSection.intro}</p>
            <span className="section-meta">{brand.productsSection.meta}</span>
          </div>
        </Reveal>

        <Reveal className="product-grid">
          {brand.products.map((product) => (
            <article className="product-card" key={product.id}>
              <button
                className="product-media"
                type="button"
                onClick={(event) =>
                  openProduct(product, event.currentTarget)
                }
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
          ))}
        </Reveal>
      </div>

      <QuickView
        key={activeProduct?.id ?? 'closed'}
        product={activeProduct}
        onClose={closeProduct}
      />
    </section>
  )
}
