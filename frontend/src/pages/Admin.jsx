import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AdminLayout from '../components/admin/AdminLayout'
import AdminLogin from './admin/AdminLogin'
import DashboardOverview from './admin/DashboardOverview'
import AdminGallery from './admin/AdminGallery'
import AdminMessages from './admin/AdminMessages'
import AdminTestimonials from './admin/AdminTestimonials'

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B2348]">
        <div className="text-center">
          <div className="mx-auto size-8 border-3 border-[#4486BF]/30 border-t-[#4486BF] rounded-full animate-spin" />
          <p className="mt-4 text-sm text-white/30">Loading...</p>
        </div>
      </div>
    )
  }
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />
}

export default function Admin() {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route path="/*" element={
        <ProtectedRoute>
          <AdminLayout>
            <Routes>
              <Route index element={<DashboardOverview />} />
              <Route path="gallery" element={<AdminGallery />} />
              <Route path="messages" element={<AdminMessages />} />
              <Route path="testimonials" element={<AdminTestimonials />} />
            </Routes>
          </AdminLayout>
        </ProtectedRoute>
      } />
    </Routes>
  )
}
