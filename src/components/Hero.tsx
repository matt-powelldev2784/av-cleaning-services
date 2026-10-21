import { motion, useReducedMotion, type Variants } from 'motion/react'
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { CONTACT, WHATSAPP_LINK } from '../config/contact'
import { introDelaySeconds } from '../lib/intro'

const TRUST_POINTS = [
  'Fully insured',
  'Free, no-obligation quotes',
  'Domestic & commercial',
] as const

export function Hero() {
  const reduceMotion = useReducedMotion()
  const base = reduceMotion ? 0 : introDelaySeconds(reduceMotion)

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: base } },
  }
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light"
    >
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 text-center sm:px-8 sm:pb-24 sm:pt-14 lg:grid-cols-2 lg:text-left"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          <motion.p
            variants={item}
            className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand"
          >
            Professional cleaning services
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            A cleaner space starts <span className="text-brand">here.</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-lg text-slate-300 lg:mx-0"
          >
            AV Cleaning Services delivers streak-free window cleaning,
            dependable office & commercial cleaning, and home cleans that
            sparkle — all tailored to you.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white shadow-lg shadow-whatsapp/30 transition hover:bg-whatsapp-dark"
            >
              <FaWhatsapp className="h-5 w-5" />
              Get a free quote
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <FaPhoneAlt className="h-4 w-4" />
              {CONTACT.phoneDisplay}
            </a>
          </motion.div>
          <motion.ul
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300 lg:justify-start"
          >
            {TRUST_POINTS.map((point) => (
              <li key={point} className="inline-flex items-center gap-2">
                <FaCheckCircle className="h-4 w-4 text-brand" />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-sm lg:max-w-md lg:justify-self-end"
        >
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
            <img
              src="/logos/av-cleaning-services-logo-on-navy.svg"
              alt="AV Cleaning Services"
              className="w-full rounded-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
