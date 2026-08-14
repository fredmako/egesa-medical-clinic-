import { Helmet } from 'react-helmet-async'
import { site } from '../data/siteData'

export default function Privacy() {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Egesa Medical Clinic</title>
        <meta name="description" content="How Egesa Medical Clinic collects, uses, protects and shares patient information in line with Kenya's Data Protection Act 2019." />
        <link rel="canonical" href="https://egesamedicalclinic.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Egesa Medical Clinic" />
        <meta property="og:url" content="https://egesamedicalclinic.com/privacy-policy" />
      </Helmet>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Privacy Policy</h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Last updated: {new Date().getFullYear()}. This policy explains how Egesa Medical Clinic ("we", "us") handles your personal and health information.
            </p>

            <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. Information We Collect</h2>
                <p className="mt-2">
                  We collect personal details you provide (name, age, contact, next of kin), health information (medical history, test results, diagnoses, treatments), and billing/payment records. Some data is collected automatically through cookies for site analytics.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. How We Use Your Information</h2>
                <p className="mt-2">
                  Your information is used only to deliver care — diagnosis, treatment, lab results, appointments, recalls, and billing. We may also use anonymised data for service planning, quality improvement, and to meet legal or regulatory obligations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. Legal Basis & Confidentiality</h2>
                <p className="mt-2">
                  We process your data under Kenya's <strong>Data Protection Act, 2019</strong> and the <strong>Health Act, 2017</strong>. Patient records are confidential; access is limited to staff directly involved in your care or authorised by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. Sharing Your Information</h2>
                <p className="mt-2">
                  We do not sell your data. We may share it with: referral facilities with your consent; the Social Health Authority (SHA) and government programmes where required by law; and insurers/payers for claims you authorise. Sharing for non-care purposes requires your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">5. Data Security</h2>
                <p className="mt-2">
                  Records are stored securely with access controls, encryption in transit, and staff confidentiality commitments. Physical files are kept in locked, access-restricted areas.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">6. Your Rights</h2>
                <p className="mt-2">
                  You may request access to your records, correction of inaccurate data, and object to or restrict certain processing. To exercise these rights, contact us using the details below. Requests are handled within statutory timeframes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">7. Contact</h2>
                <p className="mt-2">
                  Questions about this policy or your data: {site.email} or call {site.phone}. Postal: Egesa Medical Clinic, Kisii, Kenya.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
