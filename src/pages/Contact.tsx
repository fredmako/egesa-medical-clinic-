import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { site } from '../data/siteData'

export default function Contact() {
  return (
    <div>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            We are here to help. Reach out to schedule appointments or ask questions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <div className="grid grid-cols-1 gap-4">
                <div className="card flex items-start gap-4 p-5">
                  <Phone className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Phone</p>
                    <div className="mt-1 flex flex-col gap-1">
                      <a href={`tel:${site.phone.replace(/ /g,'')}`} className="text-sm text-slate-700 hover:text-emerald-700">{site.phone}</a>
                      <a href={`tel:${site.altPhone1.replace(/ /g,'')}`} className="text-sm text-slate-700 hover:text-emerald-700">{site.altPhone1}</a>
                      <a href={`tel:${site.altPhone2.replace(/ /g,'')}`} className="text-sm text-slate-700 hover:text-emerald-700">{site.altPhone2}</a>
                    </div>
                  </div>
                </div>
                <div className="card flex items-start gap-4 p-5">
                  <Mail className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                    <a href="mailto:ceoegesamedicalclinic@gmail.com" className="text-sm text-slate-700 hover:text-emerald-700">
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="card flex items-start gap-4 p-5">
                  <MapPin className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Location</p>
                    <p className="text-sm text-slate-700">{site.location}</p>
                  </div>
                </div>
                <div className="card flex items-start gap-4 p-5">
                  <Clock className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Opening Hours</p>
                    <p className="text-sm text-slate-700">Mon–Fri: 8AM – 5PM</p>
                    <p className="text-sm text-slate-700">Sat: 9AM – 1PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://wa.me/254707223209"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <form className="card p-6">
                <h3 className="text-lg font-semibold">Send a Message</h3>
                <div className="mt-4 grid grid-cols-1 gap-4">
                  <input className="w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700" placeholder="Full Name" />
                  <input className="w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700" placeholder="Phone Number" />
                  <input className="w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700" placeholder="Email" />
                  <textarea rows={5} className="w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700" placeholder="Your Message" />
                  <button type="button" className="btn btn-primary w-full">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
