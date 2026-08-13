import { ShieldCheck, CheckCircle2 } from 'lucide-react'
import { patientRights } from '../data/siteData'

export default function Rights() {
  return (
    <div>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-emerald-400" />
            <h1 className="text-4xl font-bold md:text-5xl">Patient Rights</h1>
          </div>
          <p className="mt-3 max-w-3xl text-slate-300">
            Every patient at Egesa Medical Clinic is entitled to respectful, safe, and ethical care.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {patientRights.map((right) => (
              <div key={right.title} className="card p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{right.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{right.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
