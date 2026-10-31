import { brand } from '../brand'
import Carousel from './Carousel'
import { ArrowUpRight, InstagramIcon } from './Icons'
import Reveal from './Reveal'

export default function InstagramStrip() {
  const instagram = brand.instagram

  return (
    <section className="section-space scroll-mt-24 bg-white" id="instagram">
      <div className="container-page">
        <Reveal className="mb-[clamp(2rem,4vw,3rem)] flex items-end justify-between gap-12 max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-6">
          <div>
            <p className="eyebrow">{instagram.eyebrow}</p>
            <h2 className="section-title">
              {instagram.title}{' '}
              <em className="italic text-accent">{instagram.titleAccent}</em>
            </h2>
          </div>
          <div className="flex max-w-[24rem] flex-col items-start gap-[1.2rem] pb-1.5 max-[960px]:max-w-[34rem] max-[960px]:pb-0">
            <p className="text-[0.9rem] leading-[1.75] text-muted">
              {instagram.intro}
            </p>
            <a
              className="btn btn-outline min-h-[2.7rem]"
              href={instagram.cta.href}
              target={instagram.cta.external ? '_blank' : undefined}
              rel={instagram.cta.external ? 'noreferrer' : undefined}
            >
              {instagram.cta.label}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>

        <Reveal>
          <Carousel
            className="grid grid-cols-4 gap-[clamp(0.6rem,1.2vw,1rem)] max-[960px]:grid-cols-2"
            variant="instagram"
            label="Galeri Instagram Ji&Co"
            prevLabel="Foto sebelumnya"
            nextLabel="Foto berikutnya"
            hint="Geser untuk melihat"
          >
            {instagram.images.map((image) => (
              <a
                className="group relative block aspect-square overflow-hidden bg-main"
                key={image.image}
                href={instagram.cta.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Lihat di Instagram ${brand.contact.instagram}`}
              >
                <img
                  className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.04]"
                  src={image.image}
                  alt={image.imageAlt}
                  loading="lazy"
                />
                <span className="absolute inset-0 grid place-items-center bg-accent/40 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <InstagramIcon size={22} />
                </span>
              </a>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  )
}
