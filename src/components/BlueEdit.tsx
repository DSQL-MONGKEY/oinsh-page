import { brand } from '../brand'
import { ArrowRight, ArrowUpRight } from './Icons'
import Reveal from './Reveal'

export default function BlueEdit() {
  const edit = brand.blueEdit

  return (
    <section className="section blue-edit" id="blue-edit">
      <div className="container blue-edit-grid">
        <Reveal className="blue-edit-copy">
          <p className="eyebrow">{edit.eyebrow}</p>
          <h2 className="blue-edit-title">
            {edit.title} <em>{edit.titleAccent}</em>
          </h2>
          <p className="blue-edit-description">{edit.description}</p>

          <ul className="blue-edit-notes">
            {edit.points.map((point, index) => (
              <li key={point}>
                <span>{point}</span>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>

          <div className="blue-edit-actions">
            <a className="button button--ink" href={edit.primaryCta.href}>
              {edit.primaryCta.label}
              <ArrowUpRight size={14} />
            </a>
            <a className="text-link" href={edit.secondaryCta.href}>
              {edit.secondaryCta.label}
              <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>

        <Reveal className="blue-edit-media" delay={120}>
          <figure>
            <div className="blue-edit-frame">
              <img src={edit.image} alt={edit.imageAlt} loading="lazy" />
            </div>
            <figcaption>
              <span>{edit.captionLeft}</span>
              <span>{edit.captionRight}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
