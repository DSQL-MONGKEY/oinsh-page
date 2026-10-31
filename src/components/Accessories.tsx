import { useRef, useState } from 'react'
import { brand, type Product } from '../brand'
import { ArrowLeft, ArrowRight, ArrowUpRight } from './Icons'
import BundleCard from './BundleCard'
import Carousel from './Carousel'
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
    <section className="section-space scroll-mt-24 bg-main" id="accessories">
      <div className="container-page">
        <Reveal className="mb-[clamp(2.5rem,5vw,4.5rem)] flex items-end justify-between gap-12 max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-6">
          <div>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 className="section-title">
              {section.title}{' '}
              <em className="italic text-accent">{section.titleAccent}</em>
            </h2>
          </div>
          <div className="max-w-[23rem] pb-1.5 max-[960px]:max-w-[34rem] max-[960px]:pb-0">
            <p className="text-[0.9rem] leading-[1.75] text-muted">
              {section.intro}
            </p>
            <span className="mt-[1.15rem] inline-block border-t border-line pt-2.5 text-[0.57rem] font-semibold tracking-[0.16em] uppercase">
              {section.meta}
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-line pb-4">
            <p className="flex items-center gap-2.5 text-[0.57rem] leading-[1.5] font-medium tracking-[0.16em] text-muted uppercase before:h-px before:w-6 before:flex-none before:bg-accent">
              {section.railHint}
            </p>
            <div className="flex gap-2">
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
            className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto py-5 pb-2"
            ref={railRef}
            onScroll={updateEdges}
            tabIndex={0}
            aria-label="Daftar aksesori"
          >
            {brand.accessories.map((accessory) => (
              <div
                className="w-[calc((100%-4.5rem)/4)] shrink-0 snap-start max-[1200px]:w-[calc((100%-3rem)/3)] max-[960px]:w-[calc((100%-1.5rem)/2)] max-md:w-[82%]"
                key={accessory.id}
              >
                <ProductCard
                  product={accessory}
                  onOpen={openAccessory}
                  variant="square"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <div
          className="mt-[clamp(3.5rem,7vw,6rem)] border-t border-line pt-[clamp(2.5rem,5vw,4rem)]"
          id="mix-and-match"
        >
          <Reveal className="mb-[clamp(2rem,4vw,3rem)] flex items-end justify-between gap-12 max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-6">
            <div>
              <p className="eyebrow">{section.bundleEyebrow}</p>
              <h3 className="mt-5 max-w-[15ch] font-display text-[clamp(2.3rem,4vw,3.7rem)] leading-[0.97] font-normal tracking-[-0.03em]">
                {section.bundleTitle}{' '}
                <em className="italic text-accent">
                  {section.bundleTitleAccent}
                </em>
              </h3>
            </div>
            <div className="flex max-w-[24rem] flex-col items-start gap-[1.1rem] max-[960px]:max-w-[34rem]">
              <p className="text-[0.9rem] leading-[1.75] text-muted">
                {section.bundleIntro}
              </p>
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

          <Reveal>
            <Carousel
              className="grid grid-cols-3 gap-[clamp(1rem,1.8vw,1.5rem)] max-[960px]:grid-cols-2 max-[640px]:grid-cols-1"
              variant="bundle"
              label="Paket mix & match"
              prevLabel="Paket sebelumnya"
              nextLabel="Paket berikutnya"
              hint="Geser untuk melihat paket"
            >
              {brand.bundles.map((bundle) => (
                <BundleCard key={bundle.id} bundle={bundle} />
              ))}
            </Carousel>
          </Reveal>

          <p className="mt-[1.15rem] max-w-[48rem] text-[0.66rem] leading-[1.6] text-muted">
            {section.bundleNote}
          </p>
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
