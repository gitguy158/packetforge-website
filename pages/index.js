// Updated index.js with an added "About" tab in the navigation

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: null, message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const form = e.target
      const formData = new FormData(form)
      const payload = Object.fromEntries(formData)

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }

      setStatus({ type: 'success', message: data.message || 'Thanks – your message has been sent.' })
      form.reset()
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>PacketForge — Secure Networking Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="PacketForge designs, deploys, and manages secure, high-performance network and VPN infrastructures for modern businesses." />
        <meta property="og:title" content="PacketForge — Secure Networking Solutions" />
        <meta property="og:description" content="Bespoke network architecture and VPN solutions built for performance, resilience, and total data security." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/social-card.png" />
        <meta property="og:url" content="https://your-domain.com" />
      </Head>

      <header style={{ borderBottom: '1px solid #111' }}>
        <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'18px 0' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <img src="/logo.png" alt="PacketForge logo" style={{ width:40, height:40, objectFit:'contain' }} />
            <div style={{ fontWeight:700, letterSpacing:1 }}>PACKETFORGE</div>
          </div>

          {/* Updated Navigation */}
          <nav style={{ display:'flex', gap:18 }} aria-label="Main navigation">
            <Link href="#services" className="muted">Services</Link>
            <Link href="#about" className="muted">About</Link>
            <Link href="#contact" className="muted">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        <section style={{ padding:'60px 0', textAlign:'center' }}>
          <div className="container">
            <h1 style={{ fontSize:42, margin:0 }}>Forging the Future of Secure Connectivity</h1>
            <p className="muted" style={{ maxWidth:760, margin:'18px auto' }}>Bespoke network architecture and VPN solutions built for performance, resilience, and total data security.</p>

            <div style={{ display:'flex', gap:12, justifyContent:'center', marginTop:18, flexWrap:'wrap' }}>
              <a href="#contact" className="btn">Book a Free Network Audit</a>
              <a href="#services" style={{ border:'1px solid var(--gold)', padding:'10px 16px', borderRadius:8 }}>Explore Services</a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" style={{ padding:'40px 0', background:'#0a0a0a' }}>
          <div className="container">
            <h2 style={{ color:'var(--gold)' }}>About PacketForge</h2>
            <p className="muted" style={{ maxWidth:780 }}>
              PacketForge was built in 2016 on the principle that secure, high‑performance networking should be accessible,
              reliable, and engineered with precision. We specialise in designing and deploying bespoke network
              infrastructures that enable businesses to operate with confidence.
            </p>

            <h3 style={{ marginTop:32, color:'#eee' }}>About the Managing Director</h3>
            <p className="muted" style={{ maxWidth:780 }}>
              PacketForge is led by Guy Tibbitts, an experienced IT engineer with a strong background
              in network architecture, infrastructure deployment, and operational security. Guy has spent years building resilient systems, and helping businesses modernise their connectivity.
            </p>

            <p className="muted" style={{ maxWidth:780 }}>
              His mission is simple: forge networks that are fast, secure, and built to last.
            </p>
          </div>
        </section>

        {/* Existing Services + Contact sections remain unchanged */}

        <section id="services" style={{ padding:'40px 0', background:'#050505' }}>
          <div className="container">
            <h2 style={{ color:'var(--gold)' }}>Precision Networking for Modern Business</h2>
            <p className="muted">At PacketForge, we design, deploy, and manage high-performance network infrastructures for businesses that demand reliability and security.</p>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:18, marginTop:22 }}>
              <div className="card">
                <h3>Virtual Private Networks (VPNs)</h3>
                <p className="muted">Encrypted, high-speed, zero-trust connectivity for remote teams.</p>
              </div>
              <div className="card">
                <h3>Corporate Network Architecture</h3>
                <p className="muted">Tailored LAN, WAN, and hybrid network designs for all scales.</p>
              </div>
              <div className="card">
                <h3>Cloud Integration</h3>
                <p className="muted">Secure bridges between your on-premise systems and the cloud.</p>
              </div>
              <div className="card">
                <h3>Network Monitoring & Support</h3>
                <p className="muted">Real-time diagnostics and proactive management.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={{ padding:'40px 0' }}>
          <div className="container">
            <h2 style={{ color:'var(--gold)' }}>Ready to Strengthen Your Network?</h2>
            <p className="muted">Get in touch for a free consultation or network health check. We'll analyse your existing setup and show you where performance and security can be forged stronger.</p>

            <div style={{ maxWidth:680, margin:'18px auto' }}>
              <form id="contact-form" onSubmit={handleSubmit} noValidate>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
                  <input name="name" placeholder="Your name" required autoComplete="name" style={{ padding:10, borderRadius:6, border:'1px solid #222', background:'#070707', color:'#eee' }} />
                  <input name="email" type="email" placeholder="Your email" required autoComplete="email" style={{ padding:10, borderRadius:6, border:'1px solid #222', background:'#070707', color:'#eee' }} />
                </div>
                <textarea name="message" placeholder="How can we help?" required rows={5} style={{ width:'100%', marginTop:12, padding:12, borderRadius:6, border:'1px solid #222', background:'#070707', color:'#eee', resize:'vertical' }} />

                {status.message && (
                  <p style={{ marginTop:10, fontSize:14, color: status.type === 'success' ? 'var(--gold)' : '#ff6b6b' }}>
                    {status.message}
                  </p>
                )}

                <div style={{ marginTop:12, display:'flex', gap:12 }}>
                  <button type="submit" className="btn" disabled={submitting} style={submitting ? { opacity:0.7, cursor:'not-allowed' } : {}}>
                    {submitting ? 'Sending…' : 'Request a Consultation'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop:'1px solid #111', padding:'24px 0', textAlign:'center' }} className="muted">
        <div className="container">
          <div>PacketForge Ltd. — Forging Secure, Intelligent Networks</div>
          <div style={{ marginTop:6 }}>© 2025 PacketForge. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
