// -------------------------------------------------------------------
// CONTACT DETAILS — these are placeholders. Swap in the real values
// below before launch. `whatsappNumber` must be digits only, including
// country code, with no '+', spaces or leading zero.
// -------------------------------------------------------------------
export const CONTACT = {
  businessName: 'AV Cleaning Services',
  phoneDisplay: '07947 619 500',
  phoneHref: 'tel:+447947619500',
  email: 'av-cleaning-services@outlook.com',
  whatsappNumber: '447947619500',
  whatsappMessage:
    "Hi AV Cleaning Services! I'd like to get a free quote, please.",
} as const

export const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`

export const MAILTO_LINK = `mailto:${CONTACT.email}`
