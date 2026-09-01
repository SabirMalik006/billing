import { useAdmin } from './AdminLayout'
import { useAuth } from '../../contexts/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, Bell, LogOut } from 'lucide-react'

const pageTitles = {
  dashboard: 'Dashboard',
  gallery: 'Gallery',
  messages: 'Messages',
  testimonials: 'Testimonials',
}

export default function AdminHeader() {
  const { setSidebarOpen } = useAdmin()
  const { logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname.replace('/admin', '').replace(/^\//, '') || 'dashboard'

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-[#DEE4EB] bg-white/80 backdrop-blur-xl px-4 md:px-6">
      {/* Mobile menu toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="flex size-9 items-center justify-center rounded-xl border border-[#DEE4EB] text-[#5A6B82] hover:border-[#4486BF]/30 hover:text-[#4486BF] transition-all lg:hidden"
      >
        <Menu size={18} />
      </button>

      {/* Page title */}
      <div className="min-w-0 flex-1">
        <h1 className="text-lg font-extrabold text-[#0B2348] tracking-tight">
          {pageTitles[path] || 'Dashboard'}
        </h1>
        <p className="hidden text-xs text-[#5A6B82] sm:block">
          {path === 'dashboard' && 'Overview of your content'}
          {path === 'gallery' && 'Manage uploaded images'}
          {path === 'messages' && 'View contact form submissions'}
          {path === 'testimonials' && 'Manage client testimonials'}
        </p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        <button className="flex size-9 items-center justify-center rounded-xl border border-[#DEE4EB] text-[#5A6B82] hover:border-[#4486BF]/30 hover:text-[#4486BF] transition-all relative">
          <Bell size={17} />
          <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-[#4486BF]" />
        </button>
        <div className="hidden sm:flex items-center gap-2.5 rounded-xl border border-[#DEE4EB] px-3 py-1.5">
          <div className="flex size-7 items-center justify-center rounded-lg bg-[#0B2348] text-[10px] font-bold text-white">
            A
          </div>
          <span className="text-sm font-semibold text-[#0B2348]">Admin</span>
        </div>
        <button onClick={handleLogout}
          className="flex size-9 items-center justify-center rounded-xl border border-[#DEE4EB] text-[#5A6B82] hover:border-red-300 hover:text-red-500 hover:bg-red-50 transition-all"
          title="Sign Out">
          <LogOut size={17} />
        </button>
      </div>
    </header>
  )
}
