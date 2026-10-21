import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT, WHATSAPP_LINK } from '../config/contact'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="flex min-w-0 flex-1 items-center md:flex-none"
        >
          <img
            src="/logos/av-cleaning-services-logo-landscape.svg"
            alt="AV Cleaning Services logo"
            className="h-9 w-auto max-w-full object-contain sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark md:hidden"
          aria-label={`Chat with ${CONTACT.businessName} on WhatsApp`}
        >
          <FaWhatsapp className="h-4 w-4 shrink-0" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  )
}
