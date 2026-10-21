import { FaClock, FaLeaf, FaShieldAlt, FaThumbsUp } from 'react-icons/fa'
import { Reveal } from './Reveal'

const POINTS = [
  {
    icon: FaShieldAlt,
    title: 'Fully insured',
    text: 'Complete peace of mind on every job, big or small.',
  },
  {
    icon: FaLeaf,
    title: 'Eco-friendly options',
    text: 'Effective cleaning products that are kinder to the planet.',
  },
  {
    icon: FaClock,
    title: 'Flexible scheduling',
    text: 'One-off, weekly or bespoke plans that fit your routine.',
  },
  {
    icon: FaThumbsUp,
    title: 'Satisfaction guaranteed',
    text: 'We\u2019re not happy until your space is sparkling.',
  },
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-100">
            <img
              src="/logos/av-cleaning-services-logo-white-bg.svg"
              alt="AV Cleaning Services"
              className="mx-auto w-full max-w-xs"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                Why choose us
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
                A cleaning service built on trust
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                At AV Cleaning Services we believe a clean space changes
                everything — how a workplace feels, how a home welcomes you, how
                a business looks to its customers. We bring care, consistency
                and attention to detail to every visit.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {POINTS.map((point, index) => (
              <Reveal key={point.title} delay={0.08 * index}>
                <div className="text-center lg:text-left">
                  <point.icon className="mx-auto h-6 w-6 text-brand lg:mx-0" />
                  <h3 className="mt-3 font-display text-base font-semibold text-navy">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
