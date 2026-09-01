import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import { Stethoscope, Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle } from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/admin')
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen bg-[#0B2348]">
      {/* Left — Branding */}
      <div className="hidden relative flex-1 lg:flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B2348] via-[#122D5A] to-[#0B2348]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          {/* Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#4486BF]/8 blur-[120px]" />
        </div>

        <div className="relative z-10 p-12">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#4486BF] text-white">
              <Stethoscope size={20} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white tracking-tight">MBX Solutions</p>
              <p className="text-[10px] text-white/30 uppercase tracking-widest">Admin Panel</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 px-12 pb-12">
          <h1 className="text-4xl font-extrabold text-white leading-tight">
            Manage your<br />
            <span className="text-[#4486BF]">healthcare platform</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/40">
            Secure access to your admin dashboard. Upload gallery images, manage testimonials, and view client messages.
          </p>
        </div>

        <div className="relative z-10 border-t border-white/[0.06] p-12">
          <p className="text-xs text-white/20">&copy; 2026 MBX Solutions. All rights reserved.</p>
        </div>
      </div>

      {/* Right — Login Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:max-w-[520px]">
        {/* Mobile brand */}
        <div className="mb-10 flex items-center gap-3 lg:hidden">
          <div className="flex size-10 items-center justify-center rounded-xl bg-[#4486BF] text-white">
            <Stethoscope size={20} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-sm font-extrabold text-white tracking-tight">MBX Solutions</p>
            <p className="text-[10px] text-white/30 uppercase tracking-widest">Admin Panel</p>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Welcome back</h2>
          <p className="mt-2 text-sm text-white/40">Sign in to access the admin dashboard</p>

          {error && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3">
              <AlertCircle size={16} className="text-red-400 shrink-0" />
              <p className="text-sm text-red-300">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-white/30">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                <input
                  type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="admin@mbxsol.com"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#4486BF]/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#4486BF]/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-white/30">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                <input
                  type={showPass ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] py-3.5 pl-11 pr-11 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#4486BF]/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#4486BF]/10"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/50 transition-colors">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit" disabled={loading}
              className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#4486BF] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4486BF]/20 transition-all hover:bg-[#3a73a8] hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-white/15">
            Secured admin access only
          </p>
        </motion.div>
      </div>
    </div>
  )
}
