import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { StatCard } from '../../components/admin/AdminUI'
import { Image, MessageSquare, Star, TrendingUp } from 'lucide-react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function DashboardOverview() {
  const [stats, setStats] = useState({ gallery: 0, contacts: 0, testimonials: 0, unread: 0 })
  const [recentContacts, setRecentContacts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch(`${API}/api/gallery`).then(r => r.json()),
      fetch(`${API}/api/contact`).then(r => r.json()),
      fetch(`${API}/api/testimonials/all`).then(r => r.json()),
    ]).then(([gallery, contacts, testimonials]) => {
      setStats({
        gallery: gallery.length,
        contacts: contacts.length,
        testimonials: testimonials.length,
        unread: contacts.filter(c => !c.read).length,
      })
      setRecentContacts(contacts.slice(0, 5))
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Image} label="Gallery Images" value={stats.gallery} color="#4486BF" delay={0} />
        <StatCard icon={MessageSquare} label="Total Messages" value={stats.contacts} color="#0B2348" delay={0.05} />
        <StatCard icon={Star} label="Testimonials" value={stats.testimonials} color="#5A9AD0" delay={0.1} />
        <StatCard icon={TrendingUp} label="Unread Messages" value={stats.unread} color={stats.unread > 0 ? '#E53935' : '#4486BF'} delay={0.15} />
      </div>

      {/* Recent Messages */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="rounded-2xl border border-[#DEE4EB] bg-white"
      >
        <div className="flex items-center justify-between border-b border-[#DEE4EB] px-6 py-4">
          <h3 className="text-sm font-extrabold text-[#0B2348]">Recent Messages</h3>
          <a href="/admin/messages" className="text-xs font-bold text-[#4486BF] hover:underline">View all</a>
        </div>
        {loading ? (
          <div className="p-12 text-center">
            <div className="inline-block size-6 border-3 border-[#4486BF] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : recentContacts.length === 0 ? (
          <div className="p-12 text-center text-sm text-[#5A6B82]">No messages yet.</div>
        ) : (
          <div className="divide-y divide-[#DEE4EB]">
            {recentContacts.map(c => (
              <div key={c._id} className="flex items-center gap-4 px-6 py-3.5 hover:bg-[#F5F8FA]/50 transition-colors">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#0B2348] text-xs font-bold text-white">
                  {c.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-[#0B2348] truncate">{c.name}</p>
                    {!c.read && <span className="size-1.5 rounded-full bg-[#4486BF] shrink-0" />}
                  </div>
                  <p className="text-xs text-[#5A6B82] truncate">{c.message}</p>
                </div>
                <span className="shrink-0 text-[11px] font-medium text-[#5A6B82]">
                  {new Date(c.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
