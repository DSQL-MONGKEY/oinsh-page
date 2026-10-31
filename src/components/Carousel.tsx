import type { ReactNode } from 'react'
import { useCarousel } from '../hooks/useCarousel'
import { ArrowLeft, ArrowRight } from './Icons'

type Props = {
  children: ReactNode
  className: string
  variant: 'product' | 'story' | 'lookbook' | 'testimonial' | 'instagram' | 'bundle'
  label: string
  prevLabel: string
  nextLabel: string
  hint?: string
}

const basisByVariant: Record<Props['variant'], string> = {
  product: 'max-md:[&>*]:basis-[82%]',
  story: 'max-md:[&>*]:basis-[88%]',
  lookbook: 'max-md:[&>*]:basis-[82%]',
  testimonial: 'max-md:[&>*]:basis-[88%]',
  instagram: 'max-md:[&>*]:basis-[62%]',
  bundle: 'max-md:[&>*]:basis-[90%]',
}

export default function Carousel({
  children,
  className,
  variant,
  label,
  prevLabel,
  nextLabel,
  hint = 'Geser untuk melihat',
}: Props) {
  const { ref, edges, update, scroll } = useCarousel<HTMLDivElement>()

  return (
    <div>
      <div className="mt-4 hidden items-center justify-between gap-4 max-md:flex">
        <span className="text-[0.56rem] font-semibold tracking-[0.14em] text-muted uppercase">
          {hint}
        </span>
        <div className="flex gap-2">
          <button
            className="rail-control"
            type="button"
            onClick={() => scroll(-1)}
            disabled={!edges.prev}
            aria-label={prevLabel}
          >
            <ArrowLeft size={15} />
          </button>
          <button
            className="rail-control"
            type="button"
            onClick={() => scroll(1)}
            disabled={!edges.next}
            aria-label={nextLabel}
          >
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className={`${className} max-md:flex max-md:gap-4 max-md:overflow-x-auto max-md:overflow-y-hidden max-md:overscroll-x-contain max-md:pb-4 max-md:snap-x max-md:snap-mandatory max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden max-md:[&>*]:min-w-0 max-md:[&>*]:shrink-0 max-md:[&>*]:snap-start ${basisByVariant[variant]}`}
        onScroll={update}
        tabIndex={0}
        aria-label={label}
      >
        {children}
      </div>
    </div>
  )
}
