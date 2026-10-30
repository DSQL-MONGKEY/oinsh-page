import { brand, type FooterColumn } from '../brand'
import {
  ArrowUp,
  InstagramIcon,
  MailIcon,
  WhatsAppIcon,
} from './Icons'
import Wordmark from './Wordmark'

export default function Footer() {
  const footer = brand.footer
  const contactColumn: FooterColumn = {
    title: footer.contactTitle,
    links: [
      {
        label: 'WhatsApp',
        href: `https://wa.me/${brand.contact.whatsapp}`,
        external: true,
      },
      { label: 'Email', href: `mailto:${brand.contact.email}` },
      {
        label: 'Instagram',
        href: brand.contact.instagramUrl,
        external: true,
      },
    ],
  }
  const columns = [
    ...footer.columns.slice(0, 1),
    contactColumn,
    ...footer.columns.slice(1),
  ]

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Wordmark />
            <p className="footer-blurb">{footer.blurb}</p>
            <div className="footer-socials">
              <a
                href={brand.contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Instagram ${brand.name}`}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`https://wa.me/${brand.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp ${brand.name}`}
              >
                <WhatsAppIcon size={16} />
              </a>
              <a
                href={`mailto:${brand.contact.email}`}
                aria-label={`Email ${brand.name}`}
              >
                <MailIcon size={16} />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h2>{column.title}</h2>
              {column.links ? (
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="footer-lines">
                  {column.lines?.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>{footer.rights}</p>
          <p>
            {footer.creditPrefix}{' '}
            <a
              href={footer.creditHref}
              target="_blank"
              rel="noreferrer"
            >
              {footer.creditLabel}
            </a>
          </p>
          <a className="back-to-top" href="#home">
            {footer.backToTop}
            <ArrowUp size={12} />
          </a>
        </div>
      </div>

      <div className="footer-wordmark-wrap" aria-hidden="true">
        <Wordmark className="footer-wordmark" />
      </div>
    </footer>
  )
}
