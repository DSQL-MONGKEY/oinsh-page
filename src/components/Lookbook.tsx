import { brand } from '../brand'
import Carousel from './Carousel'
import { ArrowUpRight } from './Icons'
import Reveal from './Reveal'

export default function Lookbook() {
  const lookbook = brand.lookbook

  return (
    <section className="section-space scroll-mt-24 bg-blush" id="lookbook">
      <div className="container-page">
        <Reveal className="mb-[clamp(2.5rem,5vw,4rem)] flex items-end justify-between gap-12 max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-6">
          <div>
            <p className="eyebrow">{lookbook.eyebrow}</p>
            <h2 className="section-title">
              {lookbook.title}{' '}
              <em className="italic text-accent">{lookbook.titleAccent}</em>
            </h2>
          </div>
          <div className="flex max-w-[23rem] flex-col items-start gap-[1.15rem] pb-1.5 max-[960px]:max-w-[34rem] max-[960px]:pb-0">
            <p className="text-[0.9rem] leading-[1.75] text-ink/65">
              {lookbook.intro}
            </p>
            <a
              className="text-link"
              href={lookbook.cta.href}
              target={lookbook.cta.external ? '_blank' : undefined}
              rel={lookbook.cta.external ? 'noreferrer' : undefined}
            >
              {lookbook.cta.label}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>

        <Carousel
          className="grid grid-cols-4 gap-[clamp(1rem,2.2vw,1.8rem)] max-[960px]:grid-cols-2 max-md:gap-4"
          variant="lookbook"
          label="Lookbook Ji&Co"
          prevLabel="Foto sebelumnya"
          nextLabel="Foto berikutnya"
          hint="Geser untuk melihat lookbook"
        >
          {lookbook.items.map((look, index) => (
            <Reveal
              key={look.title}
              className={`group min-w-0 ${
                index % 2 === 1
                  ? 'mt-[clamp(2rem,5vw,4.5rem)] max-md:mt-0'
                  : ''
              }`}
              delay={index * 60}
            >
              <figure className="m-0">
                <div className="aspect-[3/4] overflow-hidden bg-main">
                  <img
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.04]"
                    src={look.image}
                    alt={look.imageAlt}
                    loading="lazy"
                  />
                </div>
                <figcaption className="flex flex-col gap-0.5 pt-[0.85rem]">
                  <span className="font-display text-[1.25rem] leading-[1.15] font-medium tracking-[-0.015em]">
                    {look.title}
                  </span>
                  <span className="text-[0.62rem] leading-[1.5] tracking-[0.04em] text-muted max-[420px]:hidden">
                    {look.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
