// -------------------------------------------------------------------
// CONTACT DETAILS — these are placeholders. Swap in the real values
// below before launch. `whatsappNumber` must be digits only, including
// country code, with no '+', spaces or leading zero.
// -------------------------------------------------------------------
export const CONTACT = {
  businessName: 'AV Cleaning Services',
  phoneDisplay: '+44 7700 900000',
  phoneHref: 'tel:+447700900000',
  email: 'hello@avcleaningservices.example',
  whatsappNumber: '447700900000',
  whatsappMessage:
    "Hi AV Cleaning Services! I'd like to get a free quote, please.",
} as const

export const WHATSAPP_LINK = whatsappLinkFor(CONTACT.whatsappMessage)

export const MAILTO_LINK = `mailto:${CONTACT.email}`

export function whatsappLinkFor(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
}
