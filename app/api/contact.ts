import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, company, message } = req.body

  // Configure your SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email provider
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'bidhunbibin4@gmail.com', // your email
      subject: `New Contact Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Message: ${message}
      `,
    })
    res.status(200).json({ ok: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' })
  }
}