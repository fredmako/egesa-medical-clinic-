import { Helmet } from 'react-helmet-async'
import { site } from '../data/siteData'

export default function ServicePolicy() {
  return (
    <div>
      <Helmet>
        <title>Service Policy | Egesa Medical Clinic</title>
        <meta name="description" content="Egesa Medical Clinic service policy — hours, appointments, fees, patient responsibilities, and how we deliver quality, affordable care in Kisii." />
        <link rel="canonical" href="https://egesamedicalclinic.com/service-policy" />
        <meta property="og:title" content="Service Policy | Egesa Medical Clinic" />
        <meta property="og:url" content="https://egesamedicalclinic.com/service-policy" />
      </Helmet>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Service Policy</h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Our commitment to accessible, affordable, and respectful care for every patient who walks through our doors.
            </p>

            <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. Hours of Service</h2>
                <p className="mt-2">
                  Main reception: Monday–Friday 8:00 AM – 5:00 PM, Saturday 9:00 AM – 1:00 PM. Specialist clinics (diabetic, hypertension, dental, eye, STI, mother & child) run on the published weekly schedule. Walk-ins are welcome; urgent cases are prioritised.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. Appointments & Walk-ins</h2>
                <p className="mt-2">
                  Book online, by phone, or walk in. Please arrive early, bring your ID and any prior records. Late arrivals may be rescheduled. Same-day slots are reserved for urgent needs.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. Fees & Payment</h2>
                <p className="mt-2">
                  We publish service fees (e.g. lab tests, family planning methods) at reception and on our Laboratory page. Many maternal and child-health services are free or subsidised. We accept cash, mobile money (M-Pesa), and SHA/NHIF where applicable. No patient is denied emergency care for inability to pay.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. Quality & Safety</h2>
                <p className="mt-2">
                  Care follows national clinical guidelines. We maintain infection-control, sterilisation, and equipment-calibration standards, and continuously train our staff.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">5. Patient Responsibilities</h2>
                <p className="mt-2">
                  To help us serve you well: provide accurate health information, follow agreed treatment plans, respect staff and other patients, and settle fees promptly. See our Patient Rights page for what you can expect from us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">6. Feedback & Grievances</h2>
                <p className="mt-2">
                  Compliments and concerns are welcome. Raise them at reception, by phone ({site.phone}), or email ({site.email}); we acknowledge and respond within a reasonable time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">7. Contact</h2>
                <p className="mt-2">
                  Egesa Medical Clinic, Kisii, Kenya. {site.phone} · {site.email}.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
