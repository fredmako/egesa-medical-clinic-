import { Calendar, Clock, Stethoscope } from 'lucide-react'
import { specialSchedule } from '../data/siteData'

const dayColors: Record<string, string> = {
  Sunday: 'bg-rose-50 text-rose-900 border-rose-200',
  Monday: 'bg-sky-50 text-sky-900 border-sky-200',
  Tuesday: 'bg-amber-50 text-amber-900 border-amber-200',
  Wednesday: 'bg-emerald-50 text-emerald-900 border-emerald-200',
  Thursday: 'bg-violet-50 text-violet-900 border-violet-200',
  Friday: 'bg-orange-50 text-orange-900 border-orange-200',
  'Daily (8AM–1PM)': 'bg-slate-100 text-slate-900 border-slate-200',
}

export default function Clinics() {
  return (
    <div>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl font-bold md:text-5xl">General Medical Screening Clinics</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Weekly specialized clinics for focused care and expert attention.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-5">
            {specialSchedule.map((entry) => (
              <div
                key={entry.day}
                className={`card border p-6 ${dayColors[entry.day] || 'border-slate-200'}`}
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5" />
                    <h3 className="text-lg font-bold">{entry.day}</h3>
                  </div>
                  {entry.day !== 'Daily (8AM–1PM)' && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold">
                      <Clock className="h-4 w-4" />
                      8AM – 5PM
                    </span>
                  )}
                </div>
                <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                  {entry.clinics.map((clinic) => (
                    <li key={clinic} className="flex items-center gap-2 text-sm font-medium">
                      <Stethoscope className="h-4 w-4" />
                      {clinic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
