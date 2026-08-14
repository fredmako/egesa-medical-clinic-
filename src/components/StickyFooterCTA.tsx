import { Link } from 'react-router-dom'
import { CalendarCheck, Phone } from 'lucide-react'
import { site } from '../data/siteData'

/**
 * Mobile sticky footer CTA — keeps Book Appointment + Call Now one tap away
 * without cluttering the header. Hidden on >=768px where they live in the nav.
 */
export default function StickyFooterCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2.5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="flex items-center gap-2">
        <a
          href={`tel:${site.phone.replace(/ /g, '')}`}
          className="btn min-h-[44px] flex-1 justify-center border border-primary text-primary hover:bg-red-50 dark:hover:bg-slate-800"
          aria-label={`Call Egesa Medical Clinic now on ${site.phone}`}
        >
          <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <Link
          to="/appointment"
          className="btn btn-primary min-h-[44px] flex-1 justify-center"
          aria-label="Book an appointment at Egesa Medical Clinic"
        >
          <CalendarCheck className="mr-2 h-4 w-4" aria-hidden="true" />
          Book Appointment
        </Link>
      </div>
    </div>
  )
}
