import type { FormEvent } from 'react'
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { CONTACT, MAILTO_LINK, WHATSAPP_LINK } from '../config/contact'
import { Reveal } from './Reveal'

const CONTACT_METHODS = [
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    text: 'The fastest way to reach us — send a message any time and we\u2019ll reply as soon as we can.',
    href: WHATSAPP_LINK,
    action: 'Message us',
    external: true,
    iconClass: 'bg-whatsapp/10 text-whatsapp',
    buttonClass: 'bg-whatsapp text-white hover:bg-whatsapp-dark',
  },
  {
    icon: FaPhoneAlt,
    title: 'Call us',
    text: 'Prefer to talk it through? Give us a ring and we\u2019ll be happy to help.',
    href: CONTACT.phoneHref,
    action: CONTACT.phoneDisplay,
    external: false,
    iconClass: 'bg-navy/10 text-navy',
    buttonClass: 'bg-navy text-white hover:bg-navy-light',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    text: 'Send over the details and we\u2019ll get back to you with a free, no-obligation quote.',
    href: MAILTO_LINK,
    action: 'Send an email',
    external: false,
    iconClass: 'bg-brand/10 text-brand',
    buttonClass: 'bg-brand text-white hover:bg-brand-dark',
  },
] as const

export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const contact = String(data.get('contact') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = `Website enquiry from ${name}`
    const body = `Name: ${name}\nContact: ${contact}\n\n${message}`
    window.location.href = `${MAILTO_LINK}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Get in touch
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
            Request your free quote
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Message us on WhatsApp for the quickest response, or reach us by
            phone or email — whichever suits you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CONTACT_METHODS.map((method, index) => (
            <Reveal key={method.title} delay={0.08 * index} className="h-full">
              <div className="flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${method.iconClass}`}
                >
                  <method.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {method.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {method.text}
                </p>
                <a
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${method.buttonClass}`}
                >
                  {method.action}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-6xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
          >
            <h3 className="font-display text-lg font-semibold text-navy">
              Send us an enquiry
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email or phone
                </label>
                <input
                  id="contact"
                  name="contact"
                  required
                  placeholder="How can we reach you?"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Tell us what you need
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="e.g. Weekly window cleaning for a 3-bed house"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark sm:w-auto"
            >
              Send enquiry
            </button>
            <p className="mt-3 text-xs text-slate-500">
              This opens your email app with the details pre-filled.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
