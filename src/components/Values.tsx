import { brand } from '../brand'
import Reveal from './Reveal'

export default function Values() {
  const values = brand.values

  return (
    <section className="section-space scroll-mt-24 bg-white" id="values">
      <div className="container-page">
        <Reveal className="mb-[clamp(2.5rem,5vw,4rem)] grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-end gap-12 max-[960px]:grid-cols-1 max-[960px]:gap-6">
          <div>
            <p className="eyebrow">{values.eyebrow}</p>
            <h2 className="section-title">
              {values.title}{' '}
              <em className="italic text-accent">{values.titleAccent}</em>
            </h2>
          </div>
          <p className="max-w-[26rem] justify-self-end text-[0.92rem] leading-[1.8] text-muted max-[960px]:max-w-[34rem] max-[960px]:justify-self-start">
            {values.intro}
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-3 border-t border-line max-[760px]:grid-cols-1">
          {values.items.map((item, index) => (
            <article
              className="border-r border-line pt-[clamp(1.8rem,3vw,2.5rem)] pr-[clamp(1.25rem,2.5vw,2.6rem)] [&:not(:first-child)]:pl-[clamp(1.25rem,2.5vw,2.6rem)] last:border-r-0 max-[760px]:border-r-0 max-[760px]:border-b max-[760px]:py-7 max-[760px]:px-0 max-[760px]:last:border-b-0"
              key={item.title}
            >
              <span className="font-display text-[1.5rem] italic text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 max-w-[14ch] font-display text-[clamp(1.65rem,2.2vw,2.15rem)] leading-[1.1] font-normal tracking-[-0.02em] max-[760px]:mt-4">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[29ch] text-[0.86rem] leading-[1.75] text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
