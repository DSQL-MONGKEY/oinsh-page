import { useRef, useState } from 'react'
import { brand, type Product } from '../brand'
import ProductCard from './ProductCard'
import QuickView from './QuickView'
import Reveal from './Reveal'

export default function Products() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)

  const openProduct = (product: Product, trigger: HTMLButtonElement) => {
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
            <ProductCard
              key={product.id}
              product={product}
              onOpen={openProduct}
            />
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
