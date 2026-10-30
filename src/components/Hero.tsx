import { brand } from '../brand'
import { ArrowRight, ArrowUpRight } from './Icons'

export default function Hero() {
  const hero = brand.hero

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">{hero.eyebrow}</p>
          <h1>
            {hero.title}
            <em>{hero.titleAccent}</em>
          </h1>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <a className="button button--ink" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowUpRight size={14} />
            </a>
            <a className="text-link" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
              <ArrowRight size={14} />
            </a>
          </div>

          <ul className="hero-notes">
            {hero.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <figure className="hero-media">
          <div className="hero-frame">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              fetchPriority="high"
              decoding="async"
            />
            <div className="hero-badge">
              <span className="hero-badge-label">{hero.imageBadge}</span>
              <span className="hero-badge-sub">{hero.imageBadgeSub}</span>
            </div>
          </div>
          <figcaption className="hero-caption">
            <span>{hero.imageCaption}</span>
            <span>{brand.meaning}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
