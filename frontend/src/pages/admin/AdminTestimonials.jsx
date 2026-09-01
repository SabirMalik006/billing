import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHeader, EmptyState, ConfirmDialog, Toast } from '../../components/admin/AdminUI'
import { Star, Plus, Pencil, Trash2, Eye, EyeOff, Quote, X } from 'lucide-react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'
const emptyForm = { name: '', role: '', content: '', rating: 5 }

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [saving, setSaving] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(() => { fetchTestimonials() }, [])

  const fetchTestimonials = () => {
    fetch(`${API}/api/testimonials/all`).then(r => r.json()).then(data => { setTestimonials(data); setLoading(false) }).catch(() => setLoading(false))
  }

  const openForm = (t = null) => {
    if (t) { setForm({ name: t.name, role: t.role, content: t.content, rating: t.rating }); setEditingId(t._id) }
    else { setForm(emptyForm); setEditingId(null) }
    setShowForm(true)
  }

  const closeForm = () => { setShowForm(false); setEditingId(null); setForm(emptyForm) }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    const method = editingId ? 'PUT' : 'POST'
    const url = editingId ? `${API}/api/testimonials/${editingId}` : `${API}/api/testimonials`
    try {
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) {
        setToast({ message: editingId ? 'Testimonial updated' : 'Testimonial added', type: 'success' })
        closeForm(); fetchTestimonials()
      } else setToast({ message: 'Failed to save', type: 'error' })
    } catch { setToast({ message: 'Failed to save', type: 'error' }) }
    setSaving(false)
  }

  const handleDelete = async () => {
    if (!confirmDelete) return
    await fetch(`${API}/api/testimonials/${confirmDelete}`, { method: 'DELETE' })
    setConfirmDelete(null)
    setToast({ message: 'Testimonial deleted', type: 'success' })
    fetchTestimonials()
  }

  const toggleActive = async (t) => {
    await fetch(`${API}/api/testimonials/${t._id}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: !t.active }),
    })
    fetchTestimonials()
  }

  return (
    <div>
      <PageHeader title="Testimonials" subtitle={`${testimonials.length} total, ${testimonials.filter(t => t.active).length} active`}
        action={() => openForm()} actionLabel="Add Testimonial" actionIcon={Plus} />

      {/* Inline Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="mb-6 overflow-hidden">
            <div className="rounded-2xl border border-[#DEE4EB] bg-white p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-extrabold text-[#0B2348]">{editingId ? 'Edit Testimonial' : 'Add New Testimonial'}</h3>
                <button onClick={closeForm} className="flex size-8 items-center justify-center rounded-lg text-[#5A6B82] hover:bg-[#F5F8FA] hover:text-[#0B2348] transition-all">
                  <X size={18} />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#5A6B82]">Client Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. John Smith"
                      className="w-full rounded-xl border border-[#DEE4EB] bg-[#F5F8FA] px-4 py-2.5 text-sm text-[#0B2348] outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 focus:bg-white" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#5A6B82]">Role / Title *</label>
                    <input required value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} placeholder="e.g. Hospice Director"
                      className="w-full rounded-xl border border-[#DEE4EB] bg-[#F5F8FA] px-4 py-2.5 text-sm text-[#0B2348] outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 focus:bg-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#5A6B82]">Testimonial *</label>
                  <textarea required rows={4} value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} placeholder="What did the client say..."
                    className="w-full resize-none rounded-xl border border-[#DEE4EB] bg-[#F5F8FA] px-4 py-2.5 text-sm text-[#0B2348] outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 focus:bg-white" />
                </div>
                <div className="mt-4">
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#5A6B82]">Rating</label>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(n => (
                      <button key={n} type="button" onClick={() => setForm({ ...form, rating: n })} className="transition-transform hover:scale-110">
                        <Star size={22} className={n <= form.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button type="submit" disabled={saving}
                    className="rounded-xl bg-[#4486BF] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#4486BF]/20 transition-all hover:bg-[#3a73a8] disabled:opacity-50">
                    {saving ? 'Saving...' : editingId ? 'Update' : 'Save Testimonial'}
                  </button>
                  <button type="button" onClick={closeForm}
                    className="rounded-xl border border-[#DEE4EB] px-6 py-2.5 text-sm font-bold text-[#5A6B82] hover:border-[#0B2348]/20 hover:text-[#0B2348] transition-all">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Grid */}
      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-[#DEE4EB] bg-white p-6 animate-pulse">
              <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, j) => <div key={j} className="size-4 rounded bg-[#F5F8FA]" />)}</div>
              <div className="space-y-2"><div className="h-3 w-full rounded bg-[#F5F8FA]" /><div className="h-3 w-3/4 rounded bg-[#F5F8FA]" /></div>
              <div className="mt-4 flex items-center gap-3"><div className="size-9 rounded-full bg-[#F5F8FA]" /><div className="space-y-1.5"><div className="h-3 w-24 rounded bg-[#F5F8FA]" /><div className="h-2.5 w-20 rounded bg-[#F5F8FA]" /></div></div>
            </div>
          ))}
        </div>
      ) : testimonials.length === 0 ? (
        <EmptyState icon={Star} title="No testimonials yet" description="Add your first client testimonial to build trust." action={() => openForm()} actionLabel="Add Testimonial" actionIcon={Plus} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div key={t._id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              className={`group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#0B2348]/[0.04] hover:-translate-y-0.5 ${
                t.active ? 'border-[#DEE4EB]' : 'border-dashed border-[#DEE4EB] opacity-60'
              }`}>
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#4486BF] to-[#5A9AD0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="mb-4 flex size-9 items-center justify-center rounded-lg bg-[#4486BF]/10 text-[#4486BF]">
                <Quote size={16} />
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating || 5)].map((_, j) => <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-sm leading-relaxed text-[#5A6B82] line-clamp-3 mb-4">&ldquo;{t.content}&rdquo;</p>
              <div className="flex items-center justify-between border-t border-[#DEE4EB] pt-4">
                <div>
                  <p className="text-sm font-extrabold text-[#0B2348]">{t.name}</p>
                  <p className="text-xs font-medium text-[#4486BF]">{t.role}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  {!t.active && <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Hidden</span>}
                  <button onClick={() => toggleActive(t)} className="flex size-7 items-center justify-center rounded-lg text-[#5A6B82] hover:bg-[#F5F8FA] hover:text-[#4486BF] transition-all"
                    title={t.active ? 'Hide' : 'Show'}>
                    {t.active ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                  <button onClick={() => openForm(t)} className="flex size-7 items-center justify-center rounded-lg text-[#5A6B82] hover:bg-[#F5F8FA] hover:text-[#4486BF] transition-all" title="Edit">
                    <Pencil size={14} />
                  </button>
                  <button onClick={() => setConfirmDelete(t._id)} className="flex size-7 items-center justify-center rounded-lg text-[#5A6B82] hover:bg-red-50 hover:text-red-500 transition-all" title="Delete">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <ConfirmDialog isOpen={!!confirmDelete} onClose={() => setConfirmDelete(null)} onConfirm={handleDelete}
        title="Delete Testimonial" message="This testimonial will be permanently removed. This action cannot be undone." />
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </div>
  )
}
