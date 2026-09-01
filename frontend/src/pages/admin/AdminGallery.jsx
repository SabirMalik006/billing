import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHeader, EmptyState, ConfirmDialog, Toast } from '../../components/admin/AdminUI'
import { Upload, Trash2, Image, Grid3X3, List } from 'lucide-react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function AdminGallery() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('General')
  const [view, setView] = useState('grid')
  const [filter, setFilter] = useState('All')
  const [confirmDelete, setConfirmDelete] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(() => { fetchImages() }, [])

  const fetchImages = () => {
    fetch(`${API}/api/gallery`).then(r => r.json()).then(data => { setImages(data); setLoading(false) }).catch(() => setLoading(false))
  }

  const categories = ['All', ...new Set(images.map(i => i.category))]
  const filtered = filter === 'All' ? images : images.filter(i => i.category === filter)

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const fd = new FormData()
    fd.append('image', file)
    fd.append('title', title || file.name)
    fd.append('category', category)
    try {
      const res = await fetch(`${API}/api/gallery`, { method: 'POST', body: fd })
      if (res.ok) { setToast({ message: 'Image uploaded successfully', type: 'success' }); setTitle(''); fetchImages() }
      else setToast({ message: 'Upload failed', type: 'error' })
    } catch { setToast({ message: 'Upload failed', type: 'error' }) }
    setUploading(false)
  }

  const handleDelete = async () => {
    if (!confirmDelete) return
    await fetch(`${API}/api/gallery/${confirmDelete}`, { method: 'DELETE' })
    setConfirmDelete(null)
    setToast({ message: 'Image deleted', type: 'success' })
    fetchImages()
  }

  return (
    <div>
      <PageHeader title="Gallery" subtitle={`${images.length} images uploaded`} />

      {/* Upload Card */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 rounded-2xl border border-[#DEE4EB] bg-white p-5">
        <h3 className="mb-4 text-sm font-extrabold text-[#0B2348]">Upload New Image</h3>
        <div className="flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-[180px]">
            <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#5A6B82]">Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Image title"
              className="w-full rounded-xl border border-[#DEE4EB] bg-[#F5F8FA] px-4 py-2.5 text-sm text-[#0B2348] outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 focus:bg-white" />
          </div>
          <div className="min-w-[140px]">
            <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#5A6B82]">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)}
              className="w-full rounded-xl border border-[#DEE4EB] bg-[#F5F8FA] px-4 py-2.5 text-sm text-[#0B2348] outline-none transition-all focus:border-[#4486BF] focus:ring-2 focus:ring-[#4486BF]/10 focus:bg-white">
              <option>General</option>
              <option>Team</option>
              <option>Office</option>
              <option>Events</option>
              <option>Operations</option>
            </select>
          </div>
          <label className="inline-flex items-center gap-2 rounded-xl bg-[#4486BF] px-5 py-2.5 text-sm font-bold text-white cursor-pointer shadow-md shadow-[#4486BF]/20 transition-all hover:bg-[#3a73a8] hover:shadow-lg hover:-translate-y-0.5">
            <Upload size={15} />
            {uploading ? 'Uploading...' : 'Choose File'}
            <input type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
          </label>
        </div>
      </motion.div>

      {/* Filters + View Toggle */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-[#0B2348] text-white shadow-md'
                  : 'bg-white text-[#5A6B82] border border-[#DEE4EB] hover:border-[#4486BF]/30 hover:text-[#0B2348]'
              }`}>
              {cat}
              {cat !== 'All' && <span className="ml-1 text-[10px] opacity-60">{images.filter(i => i.category === cat).length}</span>}
            </button>
          ))}
        </div>
        <div className="flex rounded-lg border border-[#DEE4EB] bg-white p-0.5">
          <button onClick={() => setView('grid')} className={`flex size-7 items-center justify-center rounded-md transition-all ${view === 'grid' ? 'bg-[#0B2348] text-white' : 'text-[#5A6B82]'}`}>
            <Grid3X3 size={14} />
          </button>
          <button onClick={() => setView('list')} className={`flex size-7 items-center justify-center rounded-md transition-all ${view === 'list' ? 'bg-[#0B2348] text-white' : 'text-[#5A6B82]'}`}>
            <List size={14} />
          </button>
        </div>
      </div>

      {/* Images */}
      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-[#DEE4EB] bg-white overflow-hidden animate-pulse">
              <div className="aspect-[4/3] bg-[#F5F8FA]" />
              <div className="p-3 space-y-2"><div className="h-3.5 w-24 rounded bg-[#F5F8FA]" /><div className="h-2.5 w-16 rounded bg-[#F5F8FA]" /></div>
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState icon={Image} title="No images yet" description="Upload your first image to get started." />
      ) : view === 'grid' ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((img, i) => (
            <motion.div key={img._id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-2xl border border-[#DEE4EB] bg-white transition-all duration-300 hover:shadow-lg hover:shadow-[#0B2348]/[0.06] hover:-translate-y-0.5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img.url} alt={img.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3.5">
                <p className="text-sm font-bold text-[#0B2348] truncate">{img.title}</p>
                <span className="mt-1 inline-block rounded-md bg-[#F5F8FA] px-2 py-0.5 text-[10px] font-bold text-[#5A6B82] uppercase tracking-wider">{img.category}</span>
              </div>
              <button onClick={() => setConfirmDelete(img._id)}
                className="absolute top-2.5 right-2.5 flex size-8 items-center justify-center rounded-lg bg-red-500 text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 hover:bg-red-600">
                <Trash2 size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#DEE4EB] bg-white overflow-hidden">
          {filtered.map((img, i) => (
            <motion.div key={img._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.02 }}
              className="group flex items-center gap-4 border-b border-[#DEE4EB] px-5 py-3 last:border-0 hover:bg-[#F5F8FA]/50 transition-colors">
              <img src={img.url} alt={img.title} className="size-12 shrink-0 rounded-xl object-cover" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[#0B2348] truncate">{img.title}</p>
                <p className="text-xs text-[#5A6B82]">{img.category}</p>
              </div>
              <span className="text-[11px] text-[#5A6B82]">{new Date(img.createdAt).toLocaleDateString()}</span>
              <button onClick={() => setConfirmDelete(img._id)}
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-[#5A6B82] opacity-0 group-hover:opacity-100 hover:bg-red-50 hover:text-red-500 transition-all">
                <Trash2 size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      )}

      <ConfirmDialog isOpen={!!confirmDelete} onClose={() => setConfirmDelete(null)} onConfirm={handleDelete}
        title="Delete Image" message="This action cannot be undone. The image will be permanently removed from Cloudinary." />
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </div>
  )
}
