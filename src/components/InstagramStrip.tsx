import { brand } from '../brand'
import { ArrowUpRight, InstagramIcon } from './Icons'
import Reveal from './Reveal'

export default function InstagramStrip() {
  const instagram = brand.instagram

  return (
    <section className="section instagram">
      <div className="container">
        <Reveal className="instagram-head">
          <div>
            <p className="eyebrow">{instagram.eyebrow}</p>
            <h2 className="section-title">
              {instagram.title} <em>{instagram.titleAccent}</em>
            </h2>
          </div>
          <div className="instagram-aside">
            <p>{instagram.intro}</p>
            <a
              className="button button--outline"
              href={instagram.cta.href}
              target={instagram.cta.external ? '_blank' : undefined}
              rel={instagram.cta.external ? 'noreferrer' : undefined}
            >
              {instagram.cta.label}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>

        <Reveal className="instagram-grid">
          {instagram.images.map((image) => (
            <a
              className="instagram-item"
              key={image.image}
              href={instagram.cta.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Lihat di Instagram ${brand.contact.instagram}`}
            >
              <img src={image.image} alt={image.imageAlt} loading="lazy" />
              <span className="instagram-overlay">
                <InstagramIcon size={22} />
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
