import {
  FaBuilding,
  FaCheck,
  FaHome,
  FaWhatsapp,
  FaWindowMaximize,
} from 'react-icons/fa'
import { whatsappLinkFor } from '../config/contact'
import { Reveal } from './Reveal'

const SERVICES = [
  {
    icon: FaWindowMaximize,
    title: 'Window Cleaning',
    description:
      'Crystal-clear, streak-free windows inside and out — frames, sills and sashes included.',
    features: [
      'Pure-water pole system',
      'One-off or regular rounds',
      'Conservatories & skylights',
    ],
    message:
      "Hi AV Cleaning Services! I'm interested in window cleaning. Could I get a free quote?",
  },
  {
    icon: FaBuilding,
    title: 'Commercial',
    description:
      'Reliable contract cleaning that keeps your workplace spotless, hygienic and welcoming.',
    features: [
      'Daily, weekly or bespoke schedules',
      'Washrooms, kitchens & communal areas',
      'Fully insured & vetted team',
    ],
    message:
      "Hi AV Cleaning Services! I'm interested in office & commercial cleaning. Could I get a free quote?",
  },
  {
    icon: FaHome,
    title: 'Home Cleaning',
    description:
      'From regular weekly cleans to deep cleans and end of tenancy — your home, sparkling.',
    features: [
      'Regular & one-off cleans',
      'Deep cleans & end of tenancy',
      'Eco-friendly products available',
    ],
    message:
      "Hi AV Cleaning Services! I'm interested in home cleaning. Could I get a free quote?",
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            What we do
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
            Our services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From gleaming windows to spotless offices and homes — we&apos;ve got
            it covered.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={0.1 * index} className="h-full">
              <article className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <FaCheck className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLinkFor(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 pt-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Get a quote
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
