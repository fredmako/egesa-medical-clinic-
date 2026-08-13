import { useState } from 'react'
import { CalendarCheck, UserRound, MessageSquare, ArrowRight } from 'lucide-react'

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl font-bold md:text-5xl">Book an Appointment</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Schedule your visit online, by phone, or walk in for same-day service.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Online Booking</h2>
              <p className="mt-2 text-slate-600">Fill in the form and we will confirm your appointment.</p>

              {submitted ? (
                <div className="card mt-6 border-emerald-200 bg-emerald-50 p-6">
                  <h3 className="text-lg font-semibold text-emerald-900">Booking Request Sent</h3>
                  <p className="mt-2 text-sm text-emerald-800">
                    Thank you. We will confirm via phone or WhatsApp shortly.
                  </p>
                </div>
              ) : (
                <form
                  className="card mt-6 p-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Full Name</label>
                      <input className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Phone Number</label>
                      <input className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700" placeholder="07XX XXX XXX" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Service / Department</label>
                      <select className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700">
                        <option>Mother & Child Health</option>
                        <option>Family Planning</option>
                        <option>Medical Clinic</option>
                        <option>Surgical Clinic</option>
                        <option>Dental Clinic</option>
                        <option>Eye Clinic</option>
                        <option>Ear Clinic</option>
                        <option>Laboratory</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Preferred Date</label>
                      <input type="date" className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Preferred Time</label>
                      <input type="time" className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Notes (optional)</label>
                      <textarea rows={3} className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit Booking Request <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold">Walk-in Booking</h2>
              <p className="mt-2 text-slate-600">Visit us directly for same-day consultations and services.</p>
              <div className="mt-6 grid grid-cols-1 gap-4">
                {[
                  { icon: CalendarCheck, title: 'Same-Day Visits', desc: 'Available during clinic hours.' },
                  { icon: UserRound, title: 'Doctor Selection', desc: 'Request a specific clinician if preferred.' },
                  { icon: MessageSquare, title: 'SMS / WhatsApp Reminders', desc: 'We send reminders for follow-up visits.' },
                ].map((item) => (
                  <div key={item.title} className="card flex items-start gap-4 p-5">
                    <item.icon className="mt-0.5 h-5 w-5 text-emerald-700" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
