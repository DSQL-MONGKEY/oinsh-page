import { brand, formatPrice, type Product } from '../brand'
import { PlusIcon } from './Icons'

type Props = {
  product: Product
  onOpen: (product: Product, trigger: HTMLButtonElement) => void
  variant?: 'portrait' | 'square'
}

export default function ProductCard({
  product,
  onOpen,
  variant = 'portrait',
}: Props) {
  return (
    <article className="group flex min-w-0 flex-col">
      <button
        className={`relative block w-full overflow-hidden border-0 bg-main p-0 text-left ${
          variant === 'square' ? 'aspect-square' : 'aspect-[3/4]'
        }`}
        type="button"
        onClick={(event) => onOpen(product, event.currentTarget)}
        aria-haspopup="dialog"
        aria-label={`Lihat detail ${product.name}`}
      >
        <img
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.045]"
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          decoding="async"
          style={
            product.imagePosition
              ? { objectPosition: product.imagePosition }
              : undefined
          }
        />
        {product.badge && (
          <span
            className={`absolute top-3.5 left-3.5 px-2.5 py-1.5 text-[0.53rem] leading-none font-semibold tracking-[0.14em] uppercase max-sm:top-[0.65rem] max-sm:left-[0.65rem] max-sm:px-2 max-sm:py-1.5 max-sm:text-[0.48rem] ${
              product.badgeTone === 'accent'
                ? 'bg-burgundy text-main'
                : 'bg-white text-ink'
            }`}
          >
            {product.badge}
          </span>
        )}
        <span className="absolute inset-x-3.5 bottom-3.5 flex min-h-[2.65rem] translate-y-2 items-center justify-center gap-2 bg-white/95 text-[0.58rem] font-semibold tracking-[0.15em] uppercase opacity-0 backdrop-blur-sm transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 max-md:translate-y-0 max-md:opacity-100 max-sm:inset-x-[0.65rem] max-sm:bottom-[0.65rem] max-sm:min-h-[2.35rem] max-sm:text-[0.52rem]">
          <PlusIcon size={14} />
          <span>{brand.quickView.quickLabel}</span>
        </span>
      </button>

      <div className="flex items-start justify-between gap-4 pt-4 max-sm:flex-col max-sm:gap-1 max-sm:pt-3">
        <div>
          <p className="text-[0.56rem] leading-[1.5] font-medium tracking-[0.14em] text-muted uppercase max-[420px]:text-[0.5rem]">
            {product.category} · {product.color}
          </p>
          <h3 className="mt-1.5 font-display text-[clamp(1.25rem,1.6vw,1.55rem)] leading-[1.15] font-medium tracking-[-0.02em] max-sm:text-[1.15rem] max-[420px]:text-[1.05rem]">
            {product.name}
          </h3>
        </div>
        <p className="shrink-0 pt-[1.15rem] text-[0.72rem] tracking-[0.01em] whitespace-nowrap max-sm:pt-0 max-[420px]:text-[0.65rem]">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}
