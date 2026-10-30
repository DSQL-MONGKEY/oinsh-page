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
    <section className="section newsletter">
      <div className="container newsletter-grid">
        <Reveal className="newsletter-copy-block">
          <p className="eyebrow">{newsletter.eyebrow}</p>
          <h2 className="newsletter-title">
            {newsletter.title} <em>{newsletter.titleAccent}</em>
          </h2>
          <p className="newsletter-description">{newsletter.description}</p>
        </Reveal>

        <Reveal className="newsletter-form-block" delay={120}>
          {status === 'success' ? (
            <div className="newsletter-success" role="status">
              <span className="newsletter-success-icon">
                <CheckIcon size={20} />
              </span>
              <h3>{newsletter.successTitle}</h3>
              <p>{newsletter.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label className="sr-only" htmlFor="newsletter-email">
                Alamat email
              </label>
              <div className="newsletter-field">
                <input
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
                <button className="button button--ink" type="submit">
                  {newsletter.buttonLabel}
                </button>
              </div>
              {status === 'error' && (
                <p className="newsletter-error" id="newsletter-error" role="alert">
                  {newsletter.error}
                </p>
              )}
              <p className="newsletter-note">{newsletter.note}</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
