import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, Send, CheckCircle } from 'lucide-react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function ReviewForm({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', role: '', content: '', rating: 5 })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch(`${API}/api/testimonials/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', role: '', content: '', rating: 5 })
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to submit')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setSending(false)
  }

  const close = () => {
    onClose()
    setTimeout(() => { setSent(false); setError(''); setForm({ name: '', role: '', content: '', rating: 5 }) }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={close}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0B2348]/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl border border-[#DEE4EB] bg-white shadow-2xl shadow-[#0B2348]/10 overflow-hidden"
          >
            {/* Top accent */}
            <div className="h-1 bg-gradient-to-r from-[#4486BF] to-[#5A9AD0]" />

            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-extrabold text-[#0B2348]">Write a Review</h3>
                  <p className="text-xs text-[#5A6B82] mt-0.5">Share your experience with MBX Solutions</p>
                </div>
                <button onClick={close} className="flex size-8 items-center justify-center rounded-lg text-[#5A6B82] hover:bg-[#F5F8FA] hover:text-[#0B2348] transition-all">
                  <X size={18} />
                </button>
              </div>

              {sent ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <CheckCircle size={28} />
                  </div>
                  <h4 className="text-lg font-extrabold text-[#0B2348]">Thank You!</h4>
                  <p className="mt-2 text-sm text-[#5A6B82]">Your review has been submitted successfully. It will appear on the site after approval.</p>
                  <button onClick={close} className="mt-6 rounded-xl bg-[#4486BF] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#3a73a8]">
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
                  )}

                  {/* Rating */}
                  <div className="mb-5">
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#5A6B82]">Your Rating</label>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(n => (
                        <button key={n} type="button" onClick={() => setForm({ ...form, rating: n })}
                          className="transition-transform hover:scale-110">
                          <Star size={26} className={n <= form.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#5A6B82]">Your Name *</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Smith"
                        className="w-full rounded-xl border border-[#DEE4EB] bg-[#F5F8FA] px-4 py-2.5 text-sm text-[#0B2348] outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 focus:bg-white" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#5A6B82]">Title / Role</label>
                      <input value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} placeholder="e.g. Clinic Owner"
                        className="w-full rounded-xl border border-[#DEE4EB] bg-[#F5F8FA] px-4 py-2.5 text-sm text-[#0B2348] outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 focus:bg-white" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#5A6B82]">Your Review *</label>
                    <textarea required rows={4} value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} placeholder="Tell us about your experience..."
                      className="w-full resize-none rounded-xl border border-[#DEE4EB] bg-[#F5F8FA] px-4 py-2.5 text-sm text-[#0B2348] outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 focus:bg-white" />
                  </div>

                  <button type="submit" disabled={sending}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4486BF] py-3 text-sm font-bold text-white shadow-md shadow-[#4486BF]/20 transition-all hover:bg-[#3a73a8] hover:shadow-lg disabled:opacity-50">
                    {sending ? <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={15} />}
                    {sending ? 'Submitting...' : 'Submit Review'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
