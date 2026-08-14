import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Sun, Moon, ChevronDown } from 'lucide-react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { site } from '../data/siteData'
import { useTheme } from '../contexts/ThemeContext'

type Item = { label: string; to: string }
type Group = { label: string; to?: string; children?: Item[] }

// Desktop top-nav groups (with dropdowns)
const groups: Group[] = [
  { label: 'About Us', to: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'General Consultation', to: '/services' },
      { label: 'Laboratory Services', to: '/laboratory' },
      { label: 'Pharmacy', to: '/services' },
      { label: 'Mother & Child Health', to: '/services' },
      { label: 'Family Planning', to: '/family-planning' },
    ],
  },
  {
    label: 'Patient Information',
    children: [
      { label: 'Patient Rights & Education', to: '/rights' },
      { label: 'Service Policy', to: '/service-policy' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
    ],
  },
  { label: 'Appointments', to: '/appointment' },
  { label: 'Contact Us', to: '/contact' },
]

// Flat mobile drawer list (per spec)
const drawerLinks: Item[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Family Planning', to: '/family-planning' },
  { label: 'Laboratory', to: '/laboratory' },
  { label: 'Pharmacy', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Book Appointment', to: '/appointment' },
]

const waNumber = site.phone.replace(/[^0-9]/g, '').replace(/^0/, '254')
const telHref = `tel:${site.phone.replace(/ /g, '')}`

export default function Navbar({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (to: string) => (to === '/' ? pathname === '/' : pathname.startsWith(to))

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto max-w-7xl px-4">
          {/* Row 1: logo + name (left) | theme toggle + hamburger (right) */}
          <div className="flex items-center justify-between py-2.5">
            <Link to="/" className="flex min-w-0 items-center gap-2" aria-label="Egesa Medical Clinic home">
              <img src="/logo.jpg" alt="Egesa Medical Clinic logo" className="h-9 w-9 shrink-0 rounded-lg object-cover" />
              <div className="min-w-0">
                <p className="truncate text-lg font-semibold leading-tight text-slate-900 dark:text-white sm:text-xl">
                  Egesa Medical Clinic
                </p>
                <p className="truncate text-xs text-slate-500 dark:text-slate-300 sm:text-sm">{site.tagline}</p>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              {/* Theme toggle — always visible (header row) */}
              <button
                onClick={toggle}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mobile-drawer"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop horizontal nav with dropdowns */}
        <nav className="hidden border-t border-slate-200 bg-white py-1.5 dark:border-slate-800 dark:bg-slate-950 md:block" aria-label="Primary">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-1 px-4">
            {groups.map((g) =>
              g.children ? (
                <div key={g.label} className="group relative">
                  <button
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {g.label}
                    <ChevronDown className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-50 w-60 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 dark:border-slate-800 dark:bg-slate-900">
                    {g.children.map((c) => (
                      <Link
                        key={c.to + c.label}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 ${
                          isActive(c.to) ? 'text-primary' : 'text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={g.label}
                  to={g.to as string}
                  className={`rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 ${
                    g.to && isActive(g.to) ? 'text-primary dark:text-primary' : 'text-slate-700 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {g.label}
                </Link>
              )
            )}
          </div>
        </nav>
      </header>

      {/* Mobile drawer — portaled to body to escape any ancestor overflow clipping */}
      {createPortal(
        <div
          className={`fixed inset-0 z-[100] md:hidden ${open ? '' : 'pointer-events-none'}`}
          aria-hidden={!open}
        >
          {/* Overlay (z-90) */}
          <div
            className={`absolute inset-0 z-[90] bg-black/50 transition-opacity duration-300 ${
              open ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setOpen(false)}
          />
          {/* Panel (z-100): 85% width, full height, solid bg */}
          <aside
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className={`absolute inset-y-0 right-0 z-[100] flex w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out dark:bg-[#111827] ${
              open ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
              <Link to="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-2">
                <img src="/logo.jpg" alt="Egesa Medical Clinic logo" className="h-9 w-9 rounded-lg object-cover" />
                <span className="truncate text-base font-bold text-slate-900 dark:text-white">Egesa Medical Clinic</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav list (full, scrollable) */}
            <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
              <ul className="space-y-1">
                {drawerLinks.map((l) => (
                  <li key={l.to + l.label}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`block min-h-[48px] rounded-lg px-3 py-3 text-[17px] font-medium hover:bg-slate-100 dark:hover:bg-slate-800 ${
                        isActive(l.to) ? 'text-primary dark:text-primary' : 'text-slate-800 dark:text-slate-100'
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA section (full width) */}
            <div className="space-y-2 border-t border-slate-200 p-3 dark:border-slate-800">
              <Link
                to="/appointment"
                onClick={() => setOpen(false)}
                className="btn btn-primary min-h-[48px] w-full justify-center"
              >
                Book Appointment
              </Link>
              <div className="flex gap-2">
                <a href={telHref} className="btn min-h-[48px] flex-1 justify-center border border-primary text-primary hover:bg-red-50 dark:hover:bg-slate-800">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn min-h-[48px] flex-1 justify-center bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </>
  )
}
