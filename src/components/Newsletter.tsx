import { useState, type FormEvent } from 'react'
import { brand } from '../brand'
import { CheckIcon } from './Icons'
import Reveal from './Reveal'

type Status = 'idle' | 'error' | 'success'

export default function Newsletter() {
  const newsletter = brand.newsletter
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

    if (!isValid) {
      setStatus('error')
      return
    }

    setStatus('success')
  }

  return (
    <section className="section-space relative scroll-mt-24 overflow-hidden bg-rose" id="newsletter">
      <span
        className="pointer-events-none absolute -right-24 -bottom-80 font-display text-[clamp(18rem,34vw,32rem)] leading-none italic text-white/[0.09] max-sm:hidden"
        aria-hidden="true"
      >
        &amp;
      </span>

      <div className="container-page relative z-10 grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-end gap-[clamp(2.5rem,6vw,6rem)] max-[960px]:grid-cols-1 max-[960px]:items-start max-[960px]:gap-9">
        <Reveal>
          <p className="flex items-center gap-3 text-[0.63rem] leading-[1.4] font-bold tracking-[0.22em] text-ink uppercase before:h-px before:w-7 before:shrink-0 before:bg-current">
            {newsletter.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.9rem,5.6vw,5.2rem)] leading-[0.92] font-normal tracking-[-0.04em] text-balance">
            {newsletter.title}{' '}
            <em className="italic text-accent">{newsletter.titleAccent}</em>
          </h2>
          <p className="mt-[1.4rem] max-w-[30rem] text-[0.94rem] leading-[1.8] text-ink/70">
            {newsletter.description}
          </p>
        </Reveal>

        <Reveal
          className="max-[960px]:w-full max-[960px]:max-w-[36rem]"
          delay={120}
        >
          {status === 'success' ? (
            <div
              className="flex flex-col items-start gap-[0.7rem] border-t border-ink/35 pt-[1.2rem]"
              role="status"
            >
              <span className="mb-1 grid size-[2.8rem] place-items-center rounded-full bg-ink text-white">
                <CheckIcon size={20} />
              </span>
              <h3 className="font-display text-[clamp(1.8rem,2.8vw,2.4rem)] leading-[1.1] font-normal tracking-[-0.02em]">
                {newsletter.successTitle}
              </h3>
              <p className="max-w-[26rem] text-[0.88rem] leading-[1.7] text-ink/70">
                {newsletter.successText}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label className="sr-only" htmlFor="newsletter-email">
                Alamat email
              </label>
              <div className="flex items-center gap-4 border-b border-ink/55 max-sm:flex-col max-sm:items-stretch max-sm:gap-3 max-sm:border-b-0">
                <input
                  className="min-w-0 flex-1 bg-transparent py-[1.1rem] text-[0.92rem] text-ink placeholder:text-ink/50 max-sm:border-b max-sm:border-ink/55"
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    if (status === 'error') setStatus('idle')
                  }}
                  placeholder={newsletter.placeholder}
                  aria-invalid={status === 'error'}
                  aria-describedby={
                    status === 'error' ? 'newsletter-error' : undefined
                  }
                  autoComplete="email"
                  required
                />
                <button
                  className="btn btn-ink mb-[0.55rem] min-h-12 shrink-0 max-sm:mb-0 max-sm:self-start"
                  type="submit"
                >
                  {newsletter.buttonLabel}
                </button>
              </div>
              {status === 'error' && (
                <p
                  className="mt-3 text-[0.72rem] leading-[1.5] text-[#7a1b1b]"
                  id="newsletter-error"
                  role="alert"
                >
                  {newsletter.error}
                </p>
              )}
              <p className="mt-[0.9rem] text-[0.66rem] leading-[1.6] text-muted">
                {newsletter.note}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
