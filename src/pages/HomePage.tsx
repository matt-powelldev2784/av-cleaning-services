import { IntroSplash } from '../components/IntroSplash'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { About } from '../components/About'
import { ContactSection } from '../components/ContactSection'

export function HomePage() {
  return (
    <>
      <IntroSplash />
      <Hero />
      <Services />
      <About />
      <ContactSection />
    </>
  )
}
