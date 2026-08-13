import { Link } from 'react-router-dom'
import { Menu, X, Phone, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { site } from '../data/siteData'
import { useTheme } from '../contexts/ThemeContext'

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
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Egesa Medical Clinic logo" className="h-10 w-10 rounded-xl object-cover" />
            <div>
              <p className="text-sm font-bold leading-tight text-slate-900 dark:text-white">
                Egesa Medical Clinic
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-300">Our Healthcare We Trust</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${site.phone.replace(/ /g,'')}`} className="flex items-center gap-2 text-sm font-medium text-emerald-800 dark:text-emerald-300">
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <button
              onClick={toggle}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span className="hidden sm:inline">{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>
            <Link
              to="/appointment"
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Book Now
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${site.phone.replace(/ /g,'')}`} className="mt-2 flex items-center gap-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 px-3 py-2 text-sm font-medium text-emerald-800 dark:text-emerald-300">
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
