import { brand } from '../brand'
import Carousel from './Carousel'
import Reveal from './Reveal'

export default function Story() {
  const story = brand.story

  return (
    <section className="section-space scroll-mt-24 bg-secondary" id="story">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] grid-rows-[auto_auto] items-start gap-x-[clamp(2.5rem,6vw,7rem)] max-[960px]:flex max-[960px]:flex-col max-[960px]:gap-0">
        <Reveal className="col-start-1 row-span-2 self-center max-[960px]:order-2 max-[960px]:mt-6 max-[960px]:w-full max-[960px]:max-w-[40rem]">
          <Carousel
            className="grid grid-cols-[1.15fr_0.85fr] items-start gap-[clamp(0.75rem,1.5vw,1.25rem)]"
            variant="story"
            label="Galeri Our Story"
            prevLabel="Foto sebelumnya"
            nextLabel="Foto berikutnya"
            hint="Geser untuk melihat"
          >
            <figure className="m-0">
              <img
                className="aspect-[3/4] w-full object-cover"
                src={story.image}
                alt={story.imageAlt}
                loading="lazy"
              />
              <figcaption className="pt-[0.8rem] text-[0.54rem] leading-[1.5] tracking-[0.13em] text-muted uppercase">
                {story.imageCaption}
              </figcaption>
            </figure>
            <figure className="mt-[clamp(2rem,6vw,5rem)] m-0 max-md:mt-0">
              <img
                className="aspect-[3/4] w-full object-cover"
                src={story.insetImage}
                alt={story.insetImageAlt}
                loading="lazy"
              />
            </figure>
          </Carousel>
        </Reveal>

        <Reveal className="col-start-2 row-start-1 max-[960px]:order-1 max-[960px]:w-full">
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 className="section-title max-w-[15ch] max-[960px]:max-w-[18ch]">
            {story.title} <em className="italic text-accent">{story.titleAccent}</em>
          </h2>
        </Reveal>

        <Reveal
          className="col-start-2 row-start-2 max-[960px]:order-3 max-[960px]:mt-7 max-[960px]:w-full"
          delay={100}
        >
          <div className="mt-6 flex max-w-[31rem] flex-col gap-4 text-[0.93rem] leading-[1.85] text-muted">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-8 max-w-[31rem] border-l-2 border-burgundy pl-[1.4rem] font-display text-[clamp(1.45rem,2.2vw,1.95rem)] leading-[1.35] tracking-[-0.01em] italic max-sm:pl-[1.1rem]">
            “{story.quote}”
          </blockquote>
          <div className="mt-[1.8rem] flex flex-col gap-0.5">
            <strong className="font-display text-[1.65rem] font-medium tracking-[-0.02em] italic">
              {story.signature}
            </strong>
            <span className="text-[0.56rem] font-semibold tracking-[0.16em] text-muted uppercase">
              {story.role}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
