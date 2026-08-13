import { Link } from 'react-router-dom'
import { Menu, X, Phone, Stethoscope } from 'lucide-react'
import { useState } from 'react'
import { site } from '../data/siteData'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/laboratory', label: 'Laboratory' },
  { to: '/clinics', label: 'Screening Clinics' },
  { to: '/rights', label: 'Patient Rights' },
  { to: '/family-planning', label: 'Family Planning' },
  { to: '/contact', label: 'Contact' },
  { to: '/appointment', label: 'Book Now' },
] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-white">
              <Stethoscope className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight text-slate-900">
                Egesa Medical Clinic
              </p>
              <p className="text-xs text-slate-500">Our Healthcare We Trust</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${site.phone.replace(/ /g,'')}`} className="flex items-center gap-2 text-sm font-medium text-emerald-800">
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <Link
              to="/appointment"
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Book Now
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${site.phone.replace(/ /g,'')}`} className="mt-2 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800">
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
