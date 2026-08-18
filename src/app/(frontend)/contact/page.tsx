import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ContactForm } from '../components/ContactForm'
import { RevealObserver } from '../components/Reveal'
import { AccentStop } from '../components/AccentStop'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Get in touch',
  description:
    'Tell me about the website you need built, redesigned, or brought up to standard.',
}

/**
 * THE ENQUIRY, ON ITS OWN PAGE.
 *
 * It used to be a section at the foot of the services page. At three fields
 * that was right; at eighteen across five groups it is a task, and a task
 * buried under 6,000px of argument is one most people never reach. It also
 * gives the menu somewhere honest to point.
 *
 * The intro column is sticky on wide screens so the reason for filling it in
 * stays visible while scrolling the form — the questions are long enough that
 * the heading would otherwise be gone by the second group.
 */
export default async function ContactPage() {
  const payload = await getPayload({ config })
  const home = await payload.findGlobal({ slug: 'homepage', depth: 1 })

  return (
    <>
      <RevealObserver />
      <Header contactHref="/contact" email={home.email} linkedin={home.contactLinkedin} />

      <main id="main">
        <section className="section enquiry-page" id="contact">
          <div className="wrap enquiry-page__grid">
            <div className="enquiry-page__intro">
              <p className="kicker reveal">
                <span className="kicker__rule" aria-hidden="true" />
                Start a project
              </p>
              <h1 className="enquiry-page__title reveal">
                <AccentStop text="Let’s talk about your project." />
              </h1>
              <p className="enquiry-page__lede reveal">
                Have a website that needs to be built, redesigned, or finally brought up to
                standard? Tell me a little about what you’re working on and I’ll get back to you
                with the best next step.
              </p>
              {home.email && (
                <p className="enquiry-page__direct reveal">
                  Prefer email?{' '}
                  <a href={`mailto:${home.email}`}>{home.email}</a>
                </p>
              )}
            </div>

            <div className="enquiry-page__form">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer data={home} />
    </>
  )
}
