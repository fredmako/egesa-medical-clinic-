import { Link } from 'react-router-dom'
import { Heart, ArrowRight, ShieldCheck } from 'lucide-react'
import { fpEducation } from '../data/siteData'

const sections = [
  { label: 'Injectable Contraceptives', desc: 'Hormonal injections every 2–3 months.' },
  { label: 'Condoms', desc: 'Barrier protection against pregnancy and STIs.' },
  { label: 'IUCD', desc: 'Long-acting reversible device placed in the uterus.' },
  { label: 'Implants', desc: 'Flexible rods under the skin releasing progestogen.' },
  { label: 'POP Pills', desc: 'Daily progestogen-only pill, safe while breastfeeding.' },
  { label: 'Emergency Pills', desc: 'Backup contraception within 72–120 hours.' },
  { label: 'Fertility Awareness Methods', desc: 'Tracking fertile days through cycle observation.' },
  { label: 'Lactational Amenorrhea Method', desc: 'Breastfeeding-based temporary contraception.' },
] as const

export default function FamilyPlanning() {
  return (
    <div>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl font-bold md:text-5xl">Family Planning Education</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Understand your options. Choose the method that fits your life and health goals.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sections.map((item) => (
              <div key={item.label} className="card p-5">
                <Heart className="h-6 w-6 text-emerald-700" />
                <h3 className="mt-3 text-sm font-semibold text-slate-900">{item.label}</h3>
                <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Methods at a Glance</h2>
            <p className="mt-3 text-slate-600">
              Detailed descriptions, benefits, side effects, effectiveness, and eligibility for each method.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5">
            {fpEducation.map((method) => (
              <div key={method.name} className="card p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{method.name}</h3>
                    <p className="mt-2 text-sm text-slate-700">{method.description}</p>
                  </div>
                  <ShieldCheck className="h-5 w-5 text-emerald-700" />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">Benefits</p>
                    <p className="mt-1 text-sm text-slate-700">{method.benefits}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">Side Effects</p>
                    <p className="mt-1 text-sm text-slate-700">{method.sideEffects}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">Effectiveness</p>
                    <p className="mt-1 text-sm text-slate-700">{method.effectiveness}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">Eligibility</p>
                    <p className="mt-1 text-sm text-slate-700">{method.eligibility}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/appointment" className="btn btn-primary">
              Book Family Planning Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
