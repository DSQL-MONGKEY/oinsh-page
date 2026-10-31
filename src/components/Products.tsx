import { useRef, useState } from 'react'
import { brand, type Product } from '../brand'
import Carousel from './Carousel'
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
    <section className="section-space scroll-mt-24 bg-white" id="new-in">
      <div className="container-page">
        <Reveal className="mb-[clamp(2.5rem,5vw,4.5rem)] flex items-end justify-between gap-12 max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-6">
          <div>
            <p className="eyebrow">{brand.productsSection.eyebrow}</p>
            <h2 className="section-title">
              {brand.productsSection.title}{' '}
              <em className="italic text-accent">
                {brand.productsSection.titleAccent}
              </em>
            </h2>
          </div>
          <div className="max-w-[23rem] pb-1.5 max-[960px]:max-w-[34rem] max-[960px]:pb-0">
            <p className="text-[0.9rem] leading-[1.75] text-muted">
              {brand.productsSection.intro}
            </p>
            <span className="mt-[1.15rem] inline-block border-t border-line pt-2.5 text-[0.57rem] font-semibold tracking-[0.16em] uppercase">
              {brand.productsSection.meta}
            </span>
          </div>
        </Reveal>

        <Reveal>
          <Carousel
            className="grid grid-cols-4 gap-[clamp(1rem,2.4vw,2rem)] max-[960px]:grid-cols-2"
            variant="product"
            label="Katalog New In"
            prevLabel="Produk sebelumnya"
            nextLabel="Produk berikutnya"
            hint="Geser untuk melihat koleksi"
          >
            {brand.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpen={openProduct}
              />
            ))}
          </Carousel>
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
