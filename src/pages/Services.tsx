import {
  HeartPulse,
  Activity,
  Heart,
  ArrowRight,
} from 'lucide-react'
import { motherChildServices, familyPlanningServices } from '../data/siteData'

const departments = [
  { title: 'Mother & Child Health', desc: 'Comprehensive maternal, newborn, and child health services.', icon: HeartPulse, to: '#mch', color: 'text-emerald-700', bg: 'bg-emerald-50' },
  { title: 'Family Planning', desc: 'Modern contraception counseling and methods.', icon: Heart, to: '#fp', color: 'text-emerald-700', bg: 'bg-emerald-50' },
  { title: 'General Services', desc: 'Health screenings, consultations, and specialized clinics.', icon: Activity, to: '#general', color: 'text-emerald-700', bg: 'bg-emerald-50' },
] as const

export default function Services() {
  return (
    <div>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl font-bold md:text-5xl">Services</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Explore our healthcare services designed to support every stage of life.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {departments.map((item) => (
              <a
                key={item.title}
                href={item.to}
                className="card flex flex-col p-6 hover:border-emerald-200"
              >
                <div className={`${item.bg} flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-700">
                  View services <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="mch" className="section bg-slate-50 scroll-mt-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Mother & Child Health Services</h2>
            <p className="mt-3 text-slate-600">Essential services for mothers, newborns, and children.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {motherChildServices.map((service) => (
              <div key={service.name} className="card p-5">
                <h3 className="text-sm font-semibold text-slate-900">{service.name}</h3>
                {service.note && <p className="mt-1 text-xs text-slate-500">{service.note}</p>}
                <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
                  <span>⏱ {service.time}</span>
                  <span className={service.free ? 'text-emerald-700 font-semibold' : 'font-semibold'}>{service.fee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fp" className="section scroll-mt-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Family Planning Services</h2>
            <p className="mt-3 text-slate-600">Modern contraception options with professional counseling.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {familyPlanningServices.map((service) => (
              <div key={service.name} className="card p-5">
                <h3 className="text-sm font-semibold text-slate-900">{service.name}</h3>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
                  <span>⏱ {service.time}</span>
                  <span className="font-semibold">{service.fee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
