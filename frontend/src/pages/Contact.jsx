import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../components/Animated'
import { Send, CheckCircle } from 'lucide-react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', phone: '', email: '', message: '' })
      } else {
        const data = await res.json()
        setError(data.error || 'Something went wrong')
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
    }
    setSending(false)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-mbx-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
          <div className="hero-grid absolute inset-0" />
        </div>
        <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <AnimatedSection>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-white/80">
              Contact Us
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              Have a <span className="text-[#4486BF]">Question?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              Send us a message. Our team will get back to you promptly with the right solution for your practice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-28 lg:py-36 bg-mbx-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-mbx-navy mb-4">
                  Send us a message
                </h2>
                <p className="text-lg text-mbx-text-muted">
                  Have a question about our services? Send us your inquiry and our team will get back to you promptly.
                </p>
              </div>
            </AnimatedSection>

            {sent ? (
              <AnimatedSection>
                <div className="rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle size={28} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-mbx-navy mb-2">Message Sent!</h3>
                  <p className="text-mbx-text-muted">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-sm font-bold text-[#4486BF] hover:underline">
                    Send another message
                  </button>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection delay={0.1}>
                <form onSubmit={handleSubmit} className="rounded-2xl border border-mbx-border bg-white p-8 md:p-10 shadow-lg shadow-mbx-navy/5">
                  {error && (
                    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                      {error}
                    </div>
                  )}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-mbx-navy">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-mbx-border bg-mbx-surface px-4 py-3.5 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-mbx-navy">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="w-full rounded-xl border border-mbx-border bg-mbx-surface px-4 py-3.5 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-bold text-mbx-navy">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full rounded-xl border border-mbx-border bg-mbx-surface px-4 py-3.5 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10"
                    />
                  </div>
                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-bold text-mbx-navy">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      className="w-full resize-none rounded-xl border border-mbx-border bg-mbx-surface px-4 py-3.5 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#4486BF] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#3a73a8] hover:shadow-lg hover:shadow-[#4486BF]/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                    {!sending && <Send size={16} />}
                  </button>
                </form>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
