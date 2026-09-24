import { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function ContactForm({ compact, className }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', agencyName: '', patientName: '', specialty: '', ehrSoftware: '', message: '' })
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
        setForm({ name: '', phone: '', email: '', agencyName: '', patientName: '', specialty: '', ehrSoftware: '', message: '' })
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
    <div className={`rounded-2xl border border-mbx-border bg-white shadow-2xl shadow-mbx-navy/40 ${compact ? 'flex flex-col p-4 md:p-6' : 'p-6 md:p-8'} ${className || ''}`}>
      {sent ? (
        <div className="py-8 text-center md:py-10">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle size={26} />
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-mbx-navy mb-2">Message Sent!</h3>
          <p className="text-mbx-text-muted">Thank you for reaching out. We'll get back to you shortly.</p>
          <button onClick={() => setSent(false)} className="mt-5 text-sm font-bold text-[#4486BF] hover:underline">
            Send another message
          </button>
        </div>
      ) : (
        <>
          <div className={compact ? 'mb-4 text-center' : 'mb-6 text-center'}>
            <h3 className={`font-extrabold text-mbx-navy ${compact ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}>
              Get Your <span className="text-[#4486BF]">Free Audit</span>
            </h3>
            {!compact && (
              <p className="mt-1.5 text-sm text-mbx-text-muted">
                Fill out the form and our team will get back to you promptly.
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className={compact ? 'flex flex-1 flex-col' : ''}>
            {error && (
              <div className="mb-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}
            <div className={compact ? 'grid gap-3 sm:grid-cols-2' : 'grid gap-4 sm:grid-cols-2'}>
              <div>
                <label className={`mb-1 block text-sm font-bold text-mbx-navy ${compact ? 'text-xs' : ''}`}>Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full rounded-xl border border-mbx-border bg-mbx-surface px-4 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 ${compact ? 'py-2' : 'py-3'}`}
                />
              </div>
              <div>
                <label className={`mb-1 block text-sm font-bold text-mbx-navy ${compact ? 'text-xs' : ''}`}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className={`w-full rounded-xl border border-mbx-border bg-mbx-surface px-4 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 ${compact ? 'py-2' : 'py-3'}`}
                />
              </div>
            </div>
            <div className={compact ? 'mt-3 grid gap-3 sm:grid-cols-2' : 'mt-4 grid gap-4 sm:grid-cols-2'}>
              <div>
                <label className={`mb-1 block text-sm font-bold text-mbx-navy ${compact ? 'text-xs' : ''}`}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={`w-full rounded-xl border border-mbx-border bg-mbx-surface px-4 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 ${compact ? 'py-2' : 'py-3'}`}
                />
              </div>
              <div>
                <label className={`mb-1 block text-sm font-bold text-mbx-navy ${compact ? 'text-xs' : ''}`}>Agency Name</label>
                <input
                  type="text"
                  name="agencyName"
                  value={form.agencyName}
                  onChange={handleChange}
                  placeholder="Your agency / practice"
                  className={`w-full rounded-xl border border-mbx-border bg-mbx-surface px-4 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 ${compact ? 'py-2' : 'py-3'}`}
                />
              </div>
            </div>
            <div className={compact ? 'mt-3 grid gap-3 sm:grid-cols-2' : 'mt-4 grid gap-4 sm:grid-cols-2'}>
              <div>
                <label className={`mb-1 block text-sm font-bold text-mbx-navy ${compact ? 'text-xs' : ''}`}>Patient Name</label>
                <input
                  type="text"
                  name="patientName"
                  value={form.patientName}
                  onChange={handleChange}
                  placeholder="Patient name"
                  className={`w-full rounded-xl border border-mbx-border bg-mbx-surface px-4 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 ${compact ? 'py-2' : 'py-3'}`}
                />
              </div>
              <div>
                <label className={`mb-1 block text-sm font-bold text-mbx-navy ${compact ? 'text-xs' : ''}`}>Specialty</label>
                <input
                  type="text"
                  name="specialty"
                  value={form.specialty}
                  onChange={handleChange}
                  placeholder="e.g. Dermatology"
                  className={`w-full rounded-xl border border-mbx-border bg-mbx-surface px-4 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 ${compact ? 'py-2' : 'py-3'}`}
                />
              </div>
            </div>
            <div className={compact ? 'mt-3' : 'mt-4'}>
              <label className={`mb-1 block text-sm font-bold text-mbx-navy ${compact ? 'text-xs' : ''}`}>EHR Software</label>
              <input
                type="text"
                name="ehrSoftware"
                value={form.ehrSoftware}
                onChange={handleChange}
                placeholder="e.g. Kareo, eClinicalWorks"
                className={`w-full rounded-xl border border-mbx-border bg-mbx-surface px-4 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 ${compact ? 'py-2' : 'py-3'}`}
              />
            </div>
            <div className={compact ? 'mt-3 flex flex-1 flex-col' : 'mt-4'}>
              <label className={`mb-1 block text-sm font-bold text-mbx-navy ${compact ? 'text-xs' : ''}`}>Message *</label>
              <textarea
                name="message"
                required
                rows={compact ? 2 : 4}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                className={`w-full resize-none rounded-xl border border-mbx-border bg-mbx-surface px-4 text-sm text-mbx-navy outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 ${compact ? 'flex-1 min-h-[60px] py-2' : 'py-3'}`}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className={`inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#4486BF] px-8 font-bold text-white transition-all duration-300 hover:bg-[#3a73a8] hover:shadow-lg hover:shadow-[#4486BF]/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed ${compact ? 'mt-4 py-3 text-sm' : 'mt-6 py-3.5 text-base'}`}
            >
{sending ? 'Sending...' : 'Send Message'}
              {!sending && <ArrowRight size={16} />}
            </button>
          </form>
        </>
      )}
    </div>
  )
}