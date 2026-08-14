import { Link } from 'react-router-dom'
import { Menu, X, Phone, Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { site } from '../data/siteData'
import { useTheme } from '../contexts/ThemeContext'

const groups = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'Laboratory', to: '/laboratory' },
      { label: 'Screening Clinics', to: '/clinics' },
      { label: 'Family Planning', to: '/family-planning' },
    ],
  },
  {
    label: 'Patient Resources',
    children: [{ label: 'Patient Rights', to: '/rights' }],
  },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  // Close drawer on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        {/* Row 1: logo + name (left) | hamburger (right) */}
        <div className="flex items-center justify-between py-2.5">
          <Link to="/" className="flex min-w-0 items-center gap-2" aria-label="Egesa Medical Clinic home">
            <img src="/logo.jpg" alt="Egesa Medical Clinic logo" className="h-9 w-9 shrink-0 rounded-xl object-cover" />
            <div className="min-w-0">
              <p className="truncate text-sm font-bold leading-tight text-slate-900 dark:text-white">Egesa Medical Clinic</p>
              <p className="truncate text-xs text-slate-500 dark:text-slate-300">Our Healthcare We Trust</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            {/* Desktop theme toggle (does not compete on mobile) */}
            <button
              onClick={toggle}
              className="hidden min-h-[44px] items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 md:inline-flex"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-drawer"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Row 2 (mobile only): Call Now | Book Appointment — single primary CTA hierarchy */}
        <div className="flex gap-2 pb-2.5 md:hidden">
          <a
            href={`tel:${site.phone.replace(/ /g, '')}`}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <Link
            to="/appointment"
            className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Desktop horizontal nav */}
      <nav className="hidden border-t border-slate-100 py-1.5 md:block dark:border-slate-800" aria-label="Primary">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-1 px-4">
          {['Home', 'About', 'Services', 'Patient Resources', 'Contact'].map((label) => (
            <Link
              key={label}
              to={label === 'Home' ? '/' : `/${label.toLowerCase().replace(/ /g, '-')}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="ml-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Book Appointment
          </Link>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-y-0 right-0 z-50 flex w-4/5 max-w-xs flex-col bg-white shadow-xl dark:bg-slate-950 md:hidden"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
              <span className="text-sm font-bold text-slate-900 dark:text-white">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Mobile">
              <ul className="space-y-1">
                {groups.map((g) => (
                  <li key={g.label}>
                    {g.children ? (
                      <div className="py-1">
                        <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{g.label}</p>
                        <ul className="space-y-1">
                          {g.children.map((c) => (
                            <li key={c.to}>
                              <Link
                                to={c.to}
                                onClick={() => setOpen(false)}
                                className="block min-h-[44px] rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        to={g.to}
                        onClick={() => setOpen(false)}
                        className="flex min-h-[44px] items-center rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
                      >
                        {g.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Drawer footer: theme toggle + actions (no longer competing with header CTAs) */}
            <div className="space-y-2 border-t border-slate-200 p-3 dark:border-slate-800">
              <button
                onClick={toggle}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {theme === 'light' ? 'Dark mode' : 'Light mode'}
              </button>
              <a
                href={`tel:${site.phone.replace(/ /g, '')}`}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
