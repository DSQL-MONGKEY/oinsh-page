import { useEffect, useRef, useState } from 'react'
import { brand } from '../brand'
import { CloseIcon, InstagramIcon, MenuIcon } from './Icons'
import Wordmark from './Wordmark'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const trigger = triggerRef.current
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }

      if (event.key !== 'Tab' || !menuRef.current) return

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      trigger?.focus()
    }
  }, [open])

  return (
    <>
      <div className="announcement">
        <p className="announcement-full">{brand.announcement}</p>
        <p className="announcement-short">{brand.announcementShort}</p>
      </div>

      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a
            className="header-logo"
            href="#home"
            aria-label={`${brand.name} — kembali ke atas`}
          >
            <Wordmark />
          </a>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            {brand.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              className="header-instagram"
              href={brand.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram ${brand.name}`}
            >
              <InstagramIcon size={16} />
            </a>
            <a className="button button--ink header-shop" href={brand.header.ctaHref}>
              {brand.header.ctaLabel}
            </a>
            <button
              ref={triggerRef}
              className="menu-toggle"
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          ref={menuRef}
          className="mobile-menu"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
        >
          <div className="container mobile-menu-top">
            <Wordmark />
            <button
              ref={closeRef}
              className="menu-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
            >
              <CloseIcon size={22} />
            </button>
          </div>

          <nav className="container mobile-nav" aria-label="Navigasi mobile">
            {brand.nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <span className="mobile-nav-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="container mobile-menu-foot">
            <a
              className="button button--ink"
              href={brand.header.ctaHref}
              onClick={() => setOpen(false)}
            >
              {brand.header.ctaLabel}
            </a>
            <div className="mobile-socials">
              <a href={brand.contact.instagramUrl} target="_blank" rel="noreferrer">
                {brand.contact.instagram}
              </a>
              <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
