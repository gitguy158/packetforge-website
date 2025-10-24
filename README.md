# PacketForge — Next.js website (ready for Vercel)

This repository is a ready-to-deploy Next.js site for **PacketForge** with:
- Black & gold theme
- Responsive layout (desktop + mobile)
- Contact form (API route using nodemailer)
- Instructions to deploy on Vercel and set environment variables

## Quick deploy to Vercel

1. Create a GitHub repository named `packetforge-website` under your account (`gitguy158`).
2. Push these files to that repo (see commands below).
3. On Vercel, import the GitHub repo and deploy. Vercel will detect Next.js automatically.
4. Configure environment variables in Vercel (see below).
5. Add your domain: `packetforge.co.uk`.

## Environment variables (required for contact form)

Set these in Vercel Dashboard → Settings → Environment Variables (or locally in a `.env.local` file):
- `SMTP_HOST` (e.g. smtp.gmail.com)
- `SMTP_PORT` (e.g. 587)
- `SMTP_USER` (your SMTP username / email)
- `SMTP_PASS` (SMTP password or app password)
- `CONTACT_TO_EMAIL` = thetibbittsguy@gmail.com

## How to push to GitHub (local commands)

```bash
git init
git add .
git commit -m "Initial PacketForge site"
git branch -M main
git remote add origin https://github.com/gitguy158/packetforge-website.git
git push -u origin main
```

## Notes

- Using Gmail SMTP: enable an App Password (if you have 2FA) and use that for `SMTP_PASS`.
- Alternatively, use a transactional mail provider (SendGrid, Mailgun) and set their SMTP creds.
