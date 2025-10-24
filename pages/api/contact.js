import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) {
    res.status(400).json({ message: 'Missing fields' })
    return
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL
  } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    res.status(500).json({ message: 'Email not configured on server' })
    return
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    })

    await transporter.sendMail({
      from: `"PacketForge Website" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      subject: `New contact from ${name} <${email}>`,
      text: message + '\n\nReply to: ' + email,
      html: `<p>${message.replace(/\n/g,'<br>')}</p><p>Reply to: <a href="mailto:${email}">${email}</a></p>`
    })

    res.status(200).json({ message: 'Message sent' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error sending email' })
  }
}
