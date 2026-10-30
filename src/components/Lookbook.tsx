import { brand } from '../brand'
import { ArrowUpRight } from './Icons'
import Reveal from './Reveal'

export default function Lookbook() {
  const lookbook = brand.lookbook

  return (
    <section className="section lookbook" id="lookbook">
      <div className="container">
        <Reveal className="lookbook-head">
          <div>
            <p className="eyebrow">{lookbook.eyebrow}</p>
            <h2 className="section-title">
              {lookbook.title} <em>{lookbook.titleAccent}</em>
            </h2>
          </div>
          <div className="lookbook-aside">
            <p>{lookbook.intro}</p>
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

        <div className="lookbook-grid">
          {lookbook.items.map((look, index) => (
            <Reveal
              key={look.title}
              className={`lookbook-item${index % 2 === 1 ? ' is-offset' : ''}`}
              delay={index * 60}
            >
              <figure>
                <div className="lookbook-media">
                  <img src={look.image} alt={look.imageAlt} loading="lazy" />
                </div>
                <figcaption>
                  <span className="lookbook-title">{look.title}</span>
                  <span className="lookbook-caption">{look.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
