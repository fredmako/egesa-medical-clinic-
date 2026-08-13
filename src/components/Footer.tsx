import { Link } from 'react-router-dom'
import { Stethoscope, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { site } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 text-white">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Egesa Medical Clinic</p>
                <p className="text-xs text-slate-400">Our Healthcare We Trust</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Quality healthcare for every family in our community.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {['About', 'Services', 'Laboratory', 'Contact', 'Appointment'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sm text-slate-300 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Mother & Child Health</li>
              <li>Family Planning</li>
              <li>Laboratory</li>
              <li>General Medical Screening Clinics</li>
              <li>Patient Rights & Education</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact Us</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <Phone className="mt-0.5 h-4 w-4 text-emerald-400" />
                <a href={`tel:${site.phone.replace(/ /g,'')}`}>{site.phone}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <Phone className="mt-0.5 h-4 w-4 text-emerald-400" />
                <a href={`tel:${site.altPhone1.replace(/ /g,'')}`}>{site.altPhone1}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <Phone className="mt-0.5 h-4 w-4 text-emerald-400" />
                <a href={`tel:${site.altPhone2.replace(/ /g,'')}`}>{site.altPhone2}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <Mail className="mt-0.5 h-4 w-4 text-emerald-400" />
                <a href="mailto:ceoegesamedicalclinic@gmail.com">{site.email}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Kisii, Kenya</span>
              </li>
            </ul>

            <a
              href="https://wa.me/254707223209"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Egesa Medical Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
