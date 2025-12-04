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

      setStatus({
        type: 'success',
        message: data.message || 'Thanks – your message has been sent.',
      })
      form.reset()
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Somethin
