import { Fragment } from 'react'
import { brand } from '../brand'

export default function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-ink/[0.08] bg-green py-[1.15rem] max-sm:py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div
            className="flex items-center gap-[clamp(1.7rem,3.5vw,3.2rem)] pr-[clamp(1.7rem,3.5vw,3.2rem)] whitespace-nowrap"
            key={copy}
          >
            {brand.marquee.map((item, index) => (
              <Fragment key={`${copy}-${item}`}>
                <span
                  className={
                    index % 2 === 0
                      ? 'font-display text-[clamp(1.25rem,1.8vw,1.6rem)] leading-none italic'
                      : 'text-[0.58rem] leading-none font-semibold tracking-[0.2em] uppercase'
                  }
                >
                  {item}
                </span>
                <span className="size-[5px] shrink-0 rotate-45 bg-ink" />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
