import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { CONTACT, MAILTO_LINK, WHATSAPP_LINK } from '../config/contact'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy pb-8 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <img
            src="/logos/av-cleaning-services-logo-landscape.svg"
            alt="AV Cleaning Services logo"
            className="h-10 w-auto md:h-12"
          />
        </div>

        <div className="md:text-right">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white md:flex-row-reverse"
              >
                <FaWhatsapp className="text-whatsapp" />
                WhatsApp us
              </a>
            </li>
            <li>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-white md:flex-row-reverse"
              >
                <FaPhoneAlt className="text-brand" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={MAILTO_LINK}
                className="inline-flex items-center gap-2 transition-colors hover:text-white md:flex-row-reverse"
              >
                <FaEnvelope className="text-brand" />
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))] text-xs text-slate-400 sm:px-6">
          © {year} AV Cleaning Services. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
