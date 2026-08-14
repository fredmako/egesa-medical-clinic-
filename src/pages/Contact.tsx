import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { site } from '../data/siteData'

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Egesa Medical Clinic — Kisii, Kenya</title>
        <meta name="description" content="Contact Egesa Medical Clinic in Kisii, Kenya. Call 0707 223 209, WhatsApp, or visit us. Open Mon–Fri 8AM–5PM, Sat 9AM–1PM." />
        <link rel="canonical" href="https://egesamedicalclinic.com/contact" />
        <meta property="og:title" content="Contact Us | Egesa Medical Clinic — Kisii, Kenya" />
        <meta property="og:description" content="Call 0707 223 209 or WhatsApp Egesa Medical Clinic in Kisii. Book appointments and get directions." />
        <meta property="og:url" content="https://egesamedicalclinic.com/contact" />
      </Helmet>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Contact Us</h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              We are here to help. Reach out to schedule appointments or ask questions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <div className="grid grid-cols-1 gap-4">
                <div className="card flex items-start gap-4 p-5">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Phone</p>
                    <div className="mt-1 flex flex-col gap-1">
                      <a href={`tel:${site.phone.replace(/ /g, '')}`} className="text-sm text-slate-700 hover:text-primary dark:text-slate-300">{site.phone}</a>
                      <a href={`tel:${site.altPhone1.replace(/ /g, '')}`} className="text-sm text-slate-700 hover:text-primary dark:text-slate-300">{site.altPhone1}</a>
                      <a href={`tel:${site.altPhone2.replace(/ /g, '')}`} className="text-sm text-slate-700 hover:text-primary dark:text-slate-300">{site.altPhone2}</a>
                    </div>
                  </div>
                </div>
                <div className="card flex items-start gap-4 p-5">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
                    <a href="mailto:ceoegesamedicalclinic@gmail.com" className="text-sm text-slate-700 hover:text-primary dark:text-slate-300">
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="card flex items-start gap-4 p-5">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Location</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{site.location}</p>
                  </div>
                </div>
                <div className="card flex items-start gap-4 p-5">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Opening Hours</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Mon–Fri: 8AM – 5PM</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Sat: 9AM – 1PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://wa.me/254707223209"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <div className="card overflow-hidden p-0">
                <iframe
                  title="Egesa Medical Clinic map"
                  src="https://www.google.com/maps?q=Egesa+Medical+Clinic+Kisii+Kenya&output=embed"
                  className="h-64 w-full border-0 md:h-80"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <form className="card mt-6 p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Send a Message</h3>
                <div className="mt-4 grid grid-cols-1 gap-4">
                  <input className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="Full Name" />
                  <input className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="Phone Number" />
                  <input className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="Email" />
                  <textarea rows={5} className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="Your Message" />
                  <button type="button" className="btn btn-primary w-full">Send Message</button>
                </div>
              </form>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Clinic Photos</h3>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <img src="/clinic-waiting.jpg" alt="Clinic waiting area" loading="lazy" decoding="async" className="h-32 w-full rounded-xl border border-slate-200 object-cover dark:border-slate-800" />
                  <img src="/clinic-room.jpg" alt="Medical consultation room" loading="lazy" decoding="async" className="h-32 w-full rounded-xl border border-slate-200 object-cover dark:border-slate-800" />
                  <img src="/clinic-door.jpg" alt="Clinic entrance" loading="lazy" decoding="async" className="h-32 w-full rounded-xl border border-slate-200 object-cover dark:border-slate-800" />
                  <img src="/logo.jpg" alt="Egesa Medical Clinic logo" loading="lazy" decoding="async" className="h-32 w-full rounded-xl border border-slate-200 object-cover dark:border-slate-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
