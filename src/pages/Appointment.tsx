import { useState, type FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { CalendarCheck, UserRound, MessageSquare, ArrowRight, Loader2 } from 'lucide-react'

const SERVICES = [
  'Mother & Child Health',
  'Family Planning',
  'Medical Clinic',
  'Surgical Clinic',
  'Dental Clinic',
  'Eye Clinic',
  'Ear Clinic',
  'Laboratory',
  'Other',
]

type FormState = {
  name: string
  phone: string
  service: string
  date: string
  time: string
  notes: string
}

export default function Appointment() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: SERVICES[0],
    date: '',
    time: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update = (partial: Partial<FormState>) =>
    setForm((prev) => ({ ...prev, ...partial }))

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({ ok: false, error: 'Invalid server response.' }))
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Failed to submit booking request.')
      }

      setSubmitted(true)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to submit booking request.'
      setError(message)
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <Helmet>
        <title>Book an Appointment | Egesa Medical Clinic</title>
        <meta name="description" content="Book an appointment at Egesa Medical Clinic in Kisii. Online booking, walk-ins and WhatsApp reminders available." />
        <link rel="canonical" href="https://egesamedicalclinic.com/appointment" />
        <meta property="og:title" content="Book an Appointment | Egesa Medical Clinic" />
        <meta property="og:url" content="https://egesamedicalclinic.com/appointment" />
      </Helmet>
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
                <div className="card mt-6 border-sky-200 bg-emerald-50 p-6">
                  <h3 className="text-lg font-semibold text-emerald-900">Booking Request Sent</h3>
                  <p className="mt-2 text-sm text-primary-dark">
                    Thank you. We will confirm via phone or WhatsApp shortly.
                  </p>
                </div>
              ) : (
                <form className="card mt-6 p-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Full Name</label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-primary"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => update({ name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Phone Number</label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-primary"
                        placeholder="07XX XXX XXX"
                        value={form.phone}
                        onChange={(e) => update({ phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Service / Department</label>
                      <select
                        className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-primary"
                        value={form.service}
                        onChange={(e) => update({ service: e.target.value })}
                      >
                        {SERVICES.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Preferred Date</label>
                      <input
                        type="date"
                        className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-primary"
                        value={form.date}
                        onChange={(e) => update({ date: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Preferred Time</label>
                      <input
                        type="time"
                        className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-primary"
                        value={form.time}
                        onChange={(e) => update({ time: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Notes (optional)</label>
                      <textarea
                        rows={3}
                        className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-primary"
                        value={form.notes}
                        onChange={(e) => update({ notes: e.target.value })}
                      />
                    </div>
                    {error ? (
                      <p className="text-sm text-red-600">{error}</p>
                    ) : null}
                    <button type="submit" className="btn btn-primary" disabled={sending}>
                      {sending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Booking Request <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
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
                    <item.icon className="mt-0.5 h-5 w-5 text-primary" />
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
