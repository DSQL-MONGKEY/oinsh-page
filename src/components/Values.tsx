import { brand } from '../brand'
import Reveal from './Reveal'

export default function Values() {
  const values = brand.values

  return (
    <section className="section values">
      <div className="container">
        <Reveal className="values-head">
          <div>
            <p className="eyebrow">{values.eyebrow}</p>
            <h2 className="section-title">
              {values.title} <em>{values.titleAccent}</em>
            </h2>
          </div>
          <p className="values-intro">{values.intro}</p>
        </Reveal>

        <Reveal className="values-grid">
          {values.items.map((item, index) => (
            <article className="value" key={item.title}>
              <span className="value-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
