import { brand } from '../brand'
import Carousel from './Carousel'
import { StarIcon } from './Icons'
import Reveal from './Reveal'

export default function Testimonials() {
  const testimonials = brand.testimonials

  return (
    <section className="section-space scroll-mt-24 bg-main" id="testimonials">
      <div className="container-page">
        <Reveal className="mx-auto mb-[clamp(2.5rem,5vw,4rem)] max-w-[43rem] text-center">
          <p className="flex items-center justify-center gap-3 text-[0.63rem] leading-[1.4] font-bold tracking-[0.22em] text-accent uppercase">
            {testimonials.eyebrow}
          </p>
          <h2 className="section-title">
            {testimonials.title}{' '}
            <em className="italic text-accent">{testimonials.titleAccent}</em>
          </h2>
          <p className="mx-auto mt-[1.2rem] max-w-[32rem] text-[0.9rem] leading-[1.75] text-muted">
            {testimonials.intro}
          </p>
        </Reveal>

        <Carousel
          className="grid grid-cols-3 border-y border-line max-[960px]:grid-cols-1 max-md:border-0"
          variant="testimonial"
          label="Testimoni pelanggan"
          prevLabel="Testimoni sebelumnya"
          nextLabel="Testimoni berikutnya"
          hint="Geser untuk membaca"
        >
          {testimonials.items.map((testimonial) => (
            <article
              className="flex flex-col gap-[1.35rem] border-r border-line p-[clamp(1.8rem,3.5vw,3rem)] last:border-r-0 max-[960px]:border-r-0 max-[960px]:border-b max-[960px]:last:border-b-0 max-md:border max-md:border-line"
              key={testimonial.name}
            >
              <div
                className="flex gap-[0.22rem] text-accent"
                role="img"
                aria-label="Lima dari lima bintang"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon key={index} size={11} />
                ))}
              </div>
              <blockquote className="font-display text-[clamp(1.35rem,2vw,1.7rem)] leading-[1.4] font-normal tracking-[-0.01em]">
                “{testimonial.quote}”
              </blockquote>
              <cite className="mt-auto flex items-center gap-[0.7rem] text-[0.57rem] font-semibold tracking-[0.14em] text-muted uppercase not-italic before:h-px before:w-[1.4rem] before:bg-accent">
                {testimonial.name} — {testimonial.city}
              </cite>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
