import { brand } from '../brand'
import { StarIcon } from './Icons'
import Reveal from './Reveal'

export default function Testimonials() {
  const testimonials = brand.testimonials

  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal className="testimonial-head">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 className="section-title">
            {testimonials.title} <em>{testimonials.titleAccent}</em>
          </h2>
          <p className="testimonial-intro">{testimonials.intro}</p>
        </Reveal>

        <Reveal className="testimonial-grid">
          {testimonials.items.map((testimonial) => (
            <article className="testimonial" key={testimonial.name}>
              <div
                className="stars"
                role="img"
                aria-label="Lima dari lima bintang"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon key={index} size={11} />
                ))}
              </div>
              <blockquote>“{testimonial.quote}”</blockquote>
              <cite>
                {testimonial.name} — {testimonial.city}
              </cite>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
