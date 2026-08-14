import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Stethoscope,
  CalendarCheck,
  FlaskConical,
  HeartPulse,
  Users,
  ShieldCheck,
  Activity,
  ArrowRight,
  Phone,
  MapPin,
  Star,
} from 'lucide-react'
import { site } from '../data/siteData'

const services = [
  { icon: HeartPulse, title: 'Mother & Child Health', desc: 'Comprehensive maternal, newborn, and child wellness services.', to: '/services' },
  { icon: Users, title: 'Family Planning', desc: 'Modern contraception counseling, methods, and follow-up care.', to: '/services' },
  { icon: FlaskConical, title: 'Laboratory', desc: 'Fast diagnostic testing with affordable turnaround times.', to: '/laboratory' },
  { icon: Activity, title: 'General Medical Screening Clinics', desc: 'Dedicated clinics for chronic disease, dental, eye, and more.', to: '/clinics' },
  { icon: ShieldCheck, title: 'Patient Rights', desc: 'Your rights, responsibilities, and access to care explained.', to: '/rights' },
  { icon: CalendarCheck, title: 'Book Appointment', desc: 'Schedule your visit online or walk in for same-day care.', to: '/appointment' },
]

const treatments = [
  { title: 'Antenatal & Postnatal Care', desc: 'Full pregnancy journey support — ANC registration, monitoring, and postnatal exams.', icon: HeartPulse },
  { title: 'Laboratory & Diagnostics', desc: 'Malaria, widal, urinalysis, haemoglobin, blood grouping and more with fast turnaround.', icon: FlaskConical },
  { title: 'Family Planning', desc: 'Pills, implants, IUCD, injectables and counselling tailored to your needs.', icon: Users },
  { title: 'Chronic Disease Clinics', desc: 'Diabetes, hypertension and TB screening with ongoing follow-up care.', icon: Activity },
  { title: 'Dental & Eye Clinics', desc: 'Weekly specialist clinics for oral health and vision care.', icon: Stethoscope },
  { title: 'HIV Testing & Counselling', desc: 'Confidential, free testing and PMTCT support for registered members.', icon: ShieldCheck },
]

const team = [
  { name: 'Dr. Grace Aoko', role: 'Medical Superintendent', icon: Stethoscope },
  { name: 'Nurse Mercy Kerubo', role: 'Maternal & Child Health', icon: HeartPulse },
  { name: 'Lab. Tech Brian Ondiek', role: 'Laboratory Sciences', icon: FlaskConical },
  { name: 'Counselor Kevin Mose', role: 'Family Planning & HIV', icon: Users },
  { name: 'Dr. Fanuel Nyamweya', role: 'General Practice', icon: Activity },
  { name: 'Nurse Alice Kemunto', role: 'Patient Care Coordinator', icon: ShieldCheck },
]

const testimonials = [
  { name: 'Auma C.', text: 'The antenatal care was wonderful — the nurses explained everything and I never felt rushed.', rating: 5 },
  { name: 'Otieno J.', text: 'Got my lab results the same day at an affordable price. Clean facility and friendly staff.', rating: 5 },
  { name: 'Kerubo M.', text: 'Family planning counselling was private and non-judgemental. Exactly what I needed.', rating: 5 },
  { name: 'Mwangi P.', text: 'Walked in without an appointment and was seen within the hour. Highly recommend.', rating: 4 },
  { name: 'Atieno S.', text: 'My child’s vaccinations were free and the waiting area is comfortable for families.', rating: 5 },
  { name: 'Ochieng R.', text: 'HIV testing was confidential and the counselor was kind. No stigma at all.', rating: 5 },
]

export default function Home() {
  const heroSlides = [
    { src: '/clinic-door.jpg', alt: 'Exterior view and entrance of Egesa Medical Clinic in Kisii' },
    { src: '/hero-door-1280.jpg', alt: 'Frontage of Egesa Medical Clinic' },
    { src: '/clinic-waiting.jpg', alt: 'Reception and waiting area at Egesa Medical Clinic' },
    { src: '/clinic-interior.jpg', alt: 'Interior consultation and laboratory space' },
    { src: '/clinic-room.jpg', alt: 'Treatment and pharmacy room' },
    { src: '/clinic-staff.jpg', alt: 'Egesa Medical Clinic healthcare team' },
    { src: '/hero.png', alt: 'Egesa Medical Clinic facility' },
  ]
  const n = heroSlides.length
  const [slide, setSlide] = useState(0)
  const [touchX, setTouchX] = useState<number | null>(null)

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % n), 5000)
    return () => clearInterval(id)
  }, [n])

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    if (Math.abs(dx) > 40) setSlide((s) => (s + (dx < 0 ? 1 : -1) + n) % n)
    setTouchX(null)
  }

  return (
    <div>
      {/* HERO — rotating facility imagery carousel */}
      <section
        className="relative overflow-hidden text-white"
        aria-label="Egesa Medical Clinic facilities"
        onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides (crossfade) */}
        <div className="absolute inset-0">
          {heroSlides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={i === 0 ? 'high' : 'low'}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
              style={{ opacity: i === slide ? 1 : 0 }}
            />
          ))}
        </div>
        {/* Deep theme-tinted overlay — boosts text contrast over facility photos */}
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-slate-900/30 to-slate-950/60" />

        <div className="relative container py-10 md:py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              {site.name}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] sm:text-4xl md:text-5xl">
              Quality Healthcare For Every Family
            </h1>
            <p className="mt-4 text-base font-medium text-slate-100 sm:text-lg">
              Professional, affordable and accessible healthcare services in Kisii. Consultation, laboratory, pharmacy and preventive care under one trusted clinic.
            </p>

            <ul className="mt-5 flex flex-col gap-2 text-sm font-medium text-white sm:flex-row sm:gap-6">
              <li>
                <a
                  href={`tel:${site.phone.replace(/ /g, '')}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 ring-1 ring-white/20 hover:bg-white/20"
                  aria-label={`Call Egesa Medical Clinic on ${site.phone}`}
                >
                  <Phone className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-slate-100">
                <MapPin className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                {site.location}
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/appointment"
                className="btn btn-primary min-h-[48px] w-full justify-center sm:w-auto"
                aria-label="Book an appointment at Egesa Medical Clinic"
              >
                <CalendarCheck className="mr-2 h-5 w-5" aria-hidden="true" />
                Book Appointment
              </Link>
              <a
                href={`tel:${site.phone.replace(/ /g, '')}`}
                className="btn min-h-[48px] w-full justify-center border border-white/70 bg-transparent text-white hover:bg-white/10 sm:w-auto"
                aria-label={`Call Egesa Medical Clinic now on ${site.phone}`}
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Slide navigation dots */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2" role="tablist" aria-label="Hero image slides">
          {heroSlides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setSlide(i)}
              aria-label={`Show slide ${i + 1}: ${s.alt}`}
              aria-selected={i === slide}
              className={`h-2.5 rounded-full transition-all ${i === slide ? 'w-6 bg-white' : 'w-2.5 bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* TRUST INDICATORS — immediately below hero */}
      <section
        className="border-b border-slate-200 bg-white py-6 dark:border-slate-800 dark:bg-slate-950"
        aria-label="Why you can trust Egesa Medical Clinic"
      >
        <div className="container">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {site.trustIndicators.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-semibold leading-snug text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                <ShieldCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white">Our Services</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Comprehensive healthcare services designed around your family's needs.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="card group flex h-full flex-col p-6 hover:border-sky-200 dark:hover:border-slate-700"
              >
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white">About Egesa Medical Clinic</h2>
              <p className="mt-4 text-slate-700 dark:text-slate-300">{site.mission}</p>
              <p className="mt-3 text-slate-700 dark:text-slate-300">{site.vision}</p>
              <Link to="/about" className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                More about us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Why Choose Us</h3>
              <ul className="mt-4 grid grid-cols-1 gap-3">
                {['Quality Care', 'Affordable Fees', 'Accessible Location', 'Qualified Staff', 'Modern Equipment'].map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-primary dark:bg-slate-800">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <h2 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white">Appointments & Booking</h2>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
            We offer convenient booking options including online appointments, walk-ins, and reminders via SMS or WhatsApp.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
            {['Online Booking', 'Walk-in Booking', 'SMS Reminders', 'WhatsApp Reminders'].map((feature) => (
              <div key={feature} className="card p-5 text-center">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{feature}</p>
              </div>
            ))}
          </div>
          <Link to="/appointment" className="btn btn-primary mt-8">
            Book an Appointment
          </Link>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white">Top Treatments</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Trusted, affordable care across the services our community relies on most.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {treatments.map((t) => (
              <div key={t.title} className="card flex h-full flex-col p-6">
                <t.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{t.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white">Meet Our Team</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Qualified, compassionate professionals dedicated to your family's health.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {team.map((m) => (
              <div key={m.name} className="card flex flex-col items-center p-5 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-primary dark:bg-slate-800">
                  <m.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{m.name}</h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white">What Our Patients Say</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Real experiences from families who trust Egesa Medical Clinic.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card flex h-full flex-col p-6">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm text-slate-700 dark:text-slate-200">"{t.text}"</p>
                <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
        <div className="container py-14 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Your Health, Our Priority — 24 Hours a Day</h2>
          <p className="mx-auto mt-3 max-w-2xl text-emerald-50">
            Open every day, Sunday to Sunday. Walk in or book ahead — we're here for your family whenever you need us.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/appointment" className="btn rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-emerald-50">
              <CalendarCheck className="mr-2 h-4 w-4" /> Book Appointment
            </Link>
            <a href="tel:0707223209" className="btn rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20">
              <Phone className="mr-2 h-4 w-4" /> 0707 223 209
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
