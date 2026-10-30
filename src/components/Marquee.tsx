import { Fragment } from 'react'
import { brand } from '../brand'

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {brand.marquee.map((item, index) => (
              <Fragment key={`${copy}-${item}`}>
                <span
                  className={
                    index % 2 === 0 ? 'marquee-serif' : 'marquee-sans'
                  }
                >
                  {item}
                </span>
                <span className="marquee-dot" />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
