import { NavLink, useNavigate } from 'react-router-dom'
import { useAdmin } from './AdminLayout'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Image, MessageSquare, Star, ArrowLeft,
  X, Stethoscope
} from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { id: 'gallery', label: 'Gallery', icon: Image, path: '/admin/gallery' },
  { id: 'messages', label: 'Messages', icon: MessageSquare, path: '/admin/messages' },
  { id: 'testimonials', label: 'Testimonials', icon: Star, path: '/admin/testimonials' },
]

export default function AdminSidebar() {
  const { sidebarOpen, setSidebarOpen } = useAdmin()
  const navigate = useNavigate()

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-white/[0.06]">
        <div className="flex size-9 items-center justify-center rounded-xl bg-[#4486BF] text-white">
          <Stethoscope size={18} strokeWidth={2.5} />
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-extrabold text-white tracking-tight truncate">MBX Solutions</p>
          <p className="text-[10px] text-white/30 font-medium uppercase tracking-widest">Admin Panel</p>
        </div>
        <button onClick={() => setSidebarOpen(false)} className="ml-auto flex size-8 items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all lg:hidden">
          <X size={18} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map(item => (
          <NavLink
            key={item.id}
            to={item.path}
            end={item.id === 'dashboard'}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-[#4486BF] text-white shadow-lg shadow-[#4486BF]/25'
                  : 'text-white/50 hover:text-white hover:bg-white/[0.06]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
                <span className="truncate">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute left-0 w-[3px] h-6 rounded-r-full bg-white"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Back to site */}
      <div className="border-t border-white/[0.06] p-3">
        <button
          onClick={() => { navigate('/'); setSidebarOpen(false) }}
          className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13px] font-semibold text-white/40 hover:text-white hover:bg-white/[0.06] transition-all"
        >
          <ArrowLeft size={18} />
          <span>Back to Website</span>
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex w-[240px] shrink-0 flex-col bg-[#0B2348] border-r border-white/[0.04]">
        <SidebarContent />
      </aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-[260px] bg-[#0B2348] shadow-2xl lg:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
