import { useRef, useState } from 'react'
import { brand, type Product } from '../brand'
import { ArrowLeft, ArrowRight, ArrowUpRight } from './Icons'
import BundleCard from './BundleCard'
import ProductCard from './ProductCard'
import QuickView from './QuickView'
import Reveal from './Reveal'

export default function Accessories() {
  const [activeAccessory, setActiveAccessory] = useState<Product | null>(null)
  const [edges, setEdges] = useState({ prev: false, next: true })
  const railRef = useRef<HTMLDivElement>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)

  const openAccessory = (product: Product, trigger: HTMLButtonElement) => {
    lastTrigger.current = trigger
    setActiveAccessory(product)
  }

  const closeAccessory = () => {
    setActiveAccessory(null)
    lastTrigger.current?.focus()
  }

  const updateEdges = () => {
    const rail = railRef.current
    if (!rail) return

    setEdges({
      prev: rail.scrollLeft > 4,
      next: rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 4,
    })
  }

  const scrollRail = (direction: 1 | -1) => {
    const rail = railRef.current
    if (!rail) return

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  const section = brand.accessoriesSection
  const customUrl = `https://wa.me/${brand.contact.whatsapp}?text=${encodeURIComponent(section.customWhatsappMessage)}`

  return (
    <section className="section accessories" id="accessories">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 className="section-title">
              {section.title} <em>{section.titleAccent}</em>
            </h2>
          </div>
          <div className="section-head-aside">
            <p>{section.intro}</p>
            <span className="section-meta">{section.meta}</span>
          </div>
        </Reveal>

        <Reveal className="accessory-rail-shell">
          <div className="accessory-rail-bar">
            <p>{section.railHint}</p>
            <div className="rail-controls">
              <button
                className="rail-control"
                type="button"
                onClick={() => scrollRail(-1)}
                disabled={!edges.prev}
                aria-label={section.prevLabel}
              >
                <ArrowLeft size={15} />
              </button>
              <button
                className="rail-control"
                type="button"
                onClick={() => scrollRail(1)}
                disabled={!edges.next}
                aria-label={section.nextLabel}
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div
            className="accessory-rail"
            ref={railRef}
            onScroll={updateEdges}
            tabIndex={0}
            aria-label="Daftar aksesori"
          >
            {brand.accessories.map((accessory) => (
              <div className="accessory-slide" key={accessory.id}>
                <ProductCard
                  product={accessory}
                  onOpen={openAccessory}
                  variant="square"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="bundle-section" id="mix-and-match">
          <Reveal className="bundle-head">
            <div>
              <p className="eyebrow">{section.bundleEyebrow}</p>
              <h3 className="bundle-title">
                {section.bundleTitle}{' '}
                <em>{section.bundleTitleAccent}</em>
              </h3>
            </div>
            <div className="bundle-aside">
              <p>{section.bundleIntro}</p>
              <a
                className="text-link"
                href={customUrl}
                target="_blank"
                rel="noreferrer"
              >
                {section.customCtaLabel}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>

          <Reveal className="bundle-grid">
            {brand.bundles.map((bundle) => (
              <BundleCard key={bundle.id} bundle={bundle} />
            ))}
          </Reveal>

          <p className="bundle-note">{section.bundleNote}</p>
        </div>
      </div>

      <QuickView
        key={activeAccessory?.id ?? 'closed'}
        product={activeAccessory}
        onClose={closeAccessory}
      />
    </section>
  )
}
