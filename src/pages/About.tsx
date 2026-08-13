import { HeartPulse, Eye, ShieldCheck, Users, Award, Handshake } from 'lucide-react'
import { site, coreValues } from '../data/siteData'

const highlights = [
  { icon: HeartPulse, title: 'Patient-Centered Care', desc: 'We place patients at the center of every service and decision.' },
  { icon: Award, title: 'Quality Standards', desc: 'Adhering to national and international healthcare standards.' },
  { icon: ShieldCheck, title: 'Privacy & Confidentiality', desc: 'Your health data is protected and handled with care.' },
  { icon: Users, title: 'Community Focus', desc: 'Programs designed to serve the community with dignity and respect.' },
  { icon: Eye, title: 'Preventive Care', desc: 'Emphasis on prevention, early detection, and health education.' },
  { icon: Handshake, title: 'Affordable Services', desc: 'Quality care accessible to all income groups.' },
]

export default function About() {
  return (
    <div>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Egesa Medical Clinic is committed to quality, accessible, and sustainable healthcare for our community.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="mt-3 text-slate-700">{site.mission}</p>
              <h2 className="mt-8 text-2xl font-bold">Our Vision</h2>
              <p className="mt-3 text-slate-700">{site.vision}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Core Values</h2>
              <ul className="mt-4 grid grid-cols-1 gap-3">
                {[...coreValues].map((value) => (
                  <li key={value} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 font-bold">✓</span>
                    <span className="font-semibold text-slate-900">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Why Choose Egesa Medical Clinic</h2>
            <p className="mt-3 text-slate-600">We combine clinical excellence with compassionate care for every patient.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="card p-6">
                <item.icon className="h-8 w-8 text-emerald-700" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
