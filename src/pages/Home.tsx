import { Link } from 'react-router-dom'
import {
  Stethoscope,
  CalendarCheck,
  FlaskConical,
  HeartPulse,
  Users,
  ShieldCheck,
  Activity,
  ArrowRight,
  Phone,
} from 'lucide-react'
import { site } from '../data/siteData'

const stats = [
  { label: 'Years of Service', value: '12+' },
  { label: 'Patients Monthly', value: '2,400+' },
  { label: 'Services Offered', value: '40+' },
  { label: 'Clinics Weekly', value: '18' },
]

const services = [
  { icon: HeartPulse, title: 'Mother & Child Health', desc: 'Comprehensive maternal, newborn, and child wellness services.', to: '/services' },
  { icon: Users, title: 'Family Planning', desc: 'Modern contraception counseling, methods, and follow-up care.', to: '/services' },
  { icon: FlaskConical, title: 'Laboratory', desc: 'Fast diagnostic testing with affordable turnaround times.', to: '/laboratory' },
  { icon: Activity, title: 'General Medical Screening Clinics', desc: 'Dedicated clinics for chronic disease, dental, eye, and more.', to: '/clinics' },
  { icon: ShieldCheck, title: 'Patient Rights', desc: 'Your rights, responsibilities, and access to care explained.', to: '/rights' },
  { icon: CalendarCheck, title: 'Book Appointment', desc: 'Schedule your visit online or walk in for same-day care.', to: '/appointment' },
]

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_45%)]" />
        <div className="relative container py-16 md:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Egesa Medical Clinic
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Quality Healthcare For Every Family
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                {site.mission}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/appointment" className="btn btn-primary">
                  <CalendarCheck className="mr-2 h-4 w-4" />
                  Book Appointment
                </Link>
                <Link to="/contact" className="btn rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20">
                  Contact Us
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  0707 223 209
                </span>
                <span className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-emerald-400" />
                  Kisii, Kenya
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="card overflow-hidden">
                <img
                  src="/hero.png"
                  alt="Egesa Medical Clinic facility"
                  className="h-72 w-full object-cover md:h-80"
                />
                <div className="grid grid-cols-2 gap-4 p-5">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-slate-50 p-4">
                      <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mt-3 text-slate-600">
              Comprehensive healthcare services designed around your family's needs.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="card group flex h-full flex-col p-6 hover:border-emerald-200"
              >
                <item.icon className="h-8 w-8 text-emerald-700" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-700">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">About Egesa Medical Clinic</h2>
              <p className="mt-4 text-slate-700">{site.mission}</p>
              <p className="mt-3 text-slate-700">{site.vision}</p>
              <Link to="/about" className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-700">
                More about us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Why Choose Us</h3>
              <ul className="mt-4 grid grid-cols-1 gap-3">
                {['Quality Care', 'Affordable Fees', 'Accessible Location', 'Qualified Staff', 'Modern Equipment'].map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-sm">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold md:text-4xl">Appointments & Booking</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            We offer convenient booking options including online appointments, walk-ins, and reminders via SMS or WhatsApp.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
            {['Online Booking', 'Walk-in Booking', 'SMS Reminders', 'WhatsApp Reminders'].map((feature) => (
              <div key={feature} className="card p-5 text-center">
                <p className="text-sm font-semibold text-slate-900">{feature}</p>
              </div>
            ))}
          </div>
          <Link to="/appointment" className="btn btn-primary mt-8">
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
