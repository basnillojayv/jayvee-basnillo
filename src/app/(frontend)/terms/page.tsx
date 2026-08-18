import type { Metadata } from 'next'
import { site } from '@/site.config'
import Link from 'next/link'
import { LegalPage } from '../components/LegalPage'

/**
 * Terms for the SITE, not for client engagements.
 *
 * The distinction matters and is stated on the page: a portfolio's terms cover
 * using and copying the site. What a project costs, who owns the deliverables
 * and what happens if it stops belongs in a signed proposal, and quietly
 * implying otherwise here would be worse than saying nothing.
 *
 * NOT LEGAL ADVICE — see the note on the privacy page.
 */
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Terms',
  description: `The terms for using ${site.url.replace(/^https?:\/\//, '')}.`,
}

export default function TermsPage() {
  return (
    <LegalPage kicker="Terms" title="The terms for using this site." updated="18 August 2026">
      <p>
        These cover this website. They are not the terms of a project — scope, fees, ownership of
        deliverables and everything else about commissioned work live in the proposal and contract
        signed for that project, and those take precedence over anything here.
      </p>

      <h2>What this site is</h2>
      <p>
        A portfolio for {site.name}. Everything on it is provided for information. Nothing on it is
        an offer, a quote, or a promise of a particular result — a price or a timeline is only real
        once it is written into a proposal.
      </p>

      <h2>The work shown here</h2>
      <p>
        The site&rsquo;s design, code, text and images are owned by {site.name} or by the clients
        the work was made for. Client names, logos and brand systems appear with their permission
        and remain their property. You may link to any page. You may not copy, republish or pass off
        the work as your own, and you may not reuse a client&rsquo;s logo or brand assets from this
        site for any purpose.
      </p>

      <h2>Case studies</h2>
      <p>
        Case studies describe work as it was delivered at the time. Live sites change after
        handover, so what is running at a client&rsquo;s address today may differ from what is shown
        here.
      </p>

      <h2>Enquiries</h2>
      <p>
        Sending an enquiry starts a conversation and nothing more. It does not book work, hold a
        slot, or create a contract. Please do not send confidential material through the form — wait
        until there is an agreement in place.
      </p>

      <h2>Availability</h2>
      <p>
        The site is offered as it is. It may be offline for maintenance or because something broke,
        and no guarantee is made that it is always reachable or error-free.
      </p>

      <h2>Links out</h2>
      <p>
        Links to client sites and other resources are provided for reference. What is on them is not
        controlled here and is not endorsed by their inclusion.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent the law allows, {site.name} is not liable for any loss arising from use of
        this site or reliance on what it says. Nothing here limits liability for anything that
        cannot lawfully be limited.
      </p>

      <h2>Questions</h2>
      <p>
        Anything unclear, ask on the <Link href="/contact">contact page</Link>.
      </p>
    </LegalPage>
  )
}
