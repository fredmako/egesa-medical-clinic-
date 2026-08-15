import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const { name, phone, service, date, time, notes } = body || {}

    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({ ok: false, error: 'Missing required fields: name, phone, service, date, time' })
    }

    const host = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com'
    const port = Number(process.env.ZOHO_SMTP_PORT || '465')
    const secure = port === 465
    const user = process.env.ZOHO_SMTP_USER
    const pass = process.env.ZOHO_SMTP_PASS
    const fromName = process.env.ZOHO_FROM_NAME || 'Egesa Medical Clinic'
    const fromEmail = process.env.ZOHO_FROM_EMAIL || user
    const toEmail = process.env.ZOHO_TO_EMAIL || user

    if (!user || !pass) {
      return res.status(500).json({ ok: false, error: 'Email service is not configured on the server.' })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    })

    const appointmentLine = [
      `- Name: ${name}`,
      `- Phone: ${phone}`,
      `- Service: ${service}`,
      `- Date: ${date}`,
      `- Time: ${time}`,
      ...(notes ? [`- Notes: ${notes}`] : []),
    ].join('\n')

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      subject: `New Appointment Request — ${service}`,
      text: [
        `New appointment request from ${name}.`,
        appointmentLine,
      ].join('\n\n'),
      html: [
        `<p>New appointment request from <strong>${name}</strong>.</p>`,
        `<pre style="background:#f4f4f5;padding:12px;border-radius:8px;">${appointmentLine.replace(/</g, '&lt;')}</pre>`,
      ].join('\n'),
    })

    return res.status(200).json({ ok: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Appointment email failed:', message)
    return res.status(500).json({ ok: false, error: 'Failed to send appointment email.' })
  }
}
