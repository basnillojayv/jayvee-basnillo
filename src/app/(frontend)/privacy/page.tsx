import type { Metadata } from 'next'
import { site } from '@/site.config'
import Link from 'next/link'
import { LegalPage } from '../components/LegalPage'

/**
 * Written against what this site actually does, not a template.
 *
 * Every claim below is checkable in the code: the fields are the ones in
 * `src/collections/Submissions.ts`, the analytics description is Vercel
 * Analytics (cookieless, which is why there is no consent banner), and the
 * hosting/database sentence is Vercel plus Neon. If any of those change, this
 * page is wrong and has to change with them.
 *
 * NOT LEGAL ADVICE. It is accurate to the implementation; whether it is
 * sufficient for a given jurisdiction is a question for a lawyer.
 */
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Privacy',
  description: `How ${site.name} handles the information you send through this site.`,
}

export default function PrivacyPage() {
  return (
    <LegalPage kicker="Privacy" title="What happens to your information." updated="18 August 2026">
      <p>
        This site is a portfolio for {site.name}. It collects as little as it can, and this page
        describes all of it.
      </p>

      <h2>What the enquiry form collects</h2>
      <p>
        If you fill in the contact form, the details you type are stored so the enquiry can be read
        and answered: your name, your email address, and optionally your business or organisation,
        what you need, a description of the project, whether you already have a website and what it
        is built on, your goals, timeline and budget range, any materials you have, a reference site
        and any other notes.
      </p>
      <p>
        These are used for one thing — replying to you and discussing the work. They are not sold,
        rented, or shared with anyone for marketing, and you will not be added to a mailing list.
      </p>

      <h2>Analytics</h2>
      <p>
        The site uses Vercel Analytics to count page views and see which pages are read. It is
        cookieless and does not build a profile of you or follow you to other sites. That is
        deliberate, and it is why this site shows no cookie banner: there are no tracking cookies to
        ask you about.
      </p>

      <h2>Cookies</h2>
      <p>
        No advertising or tracking cookies are set. A cookie is used only if you sign in to the
        site&rsquo;s own editing tools, which is for the site owner rather than visitors.
      </p>

      <h2>Where it is kept</h2>
      <p>
        The site is hosted on Vercel and enquiries are stored in a Neon Postgres database, both on
        servers in the United States. Uploaded images are stored on Vercel Blob. Those providers
        process the data on this site&rsquo;s behalf and do not use it for their own purposes.
      </p>

      <h2>How long it is kept</h2>
      <p>
        Enquiries are kept while there is a live conversation and for as long as the working
        relationship or its records require. Ask and they will be deleted, unless something has to
        be retained for tax or contractual reasons.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask what has been stored about you, ask for it to be corrected, or ask for it to be
        deleted. Email the address on the <Link href="/contact">contact page</Link> and it will be handled
        directly — there is no form to fill in for this.
      </p>

      <h2>Links out</h2>
      <p>
        Project pages link to live client sites, and the design systems shown here are documents
        published by their own brands. Once you follow a link you are on someone else&rsquo;s site
        under their privacy policy, not this one.
      </p>

      <h2>Changes</h2>
      <p>
        If this page changes, the date at the top changes with it. There is no archive of previous
        versions.
      </p>
    </LegalPage>
  )
}
