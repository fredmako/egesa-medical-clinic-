import { Phone, MessageCircle } from 'lucide-react'
import { site } from '../data/siteData'

/**
 * Mobile sticky bottom bar — Call Now + WhatsApp, one tap away.
 * Book Appointment lives only in the hero (single primary CTA).
 * Hidden on >=768px. Sits above the FloatingAssistant (which is offset up).
 */
const waNumber = site.phone.replace(/[^0-9]/g, '').replace(/^0/, '254')

export default function StickyFooterCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-3 py-2.5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="flex items-center gap-4">
        <a
          href={`tel:${site.phone.replace(/ /g, '')}`}
          className="btn min-h-[48px] flex-1 justify-center border border-primary text-primary hover:bg-red-50 dark:hover:bg-slate-800"
          aria-label={`Call Egesa Medical Clinic now on ${site.phone}`}
        >
          <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <a
          href={`https://wa.me/${waNumber}`}
          target="_blank"
          rel="noreferrer"
          className="btn min-h-[48px] flex-1 justify-center bg-emerald-600 text-white hover:bg-emerald-700"
          aria-label="Chat with Egesa Medical Clinic on WhatsApp"
        >
          <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
