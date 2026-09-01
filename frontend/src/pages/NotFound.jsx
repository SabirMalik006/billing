import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0B2348] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2348] via-[#122D5A] to-[#0B2348]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#4486BF]/8 blur-[150px]" />
      </div>

      <div className="relative z-10 px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          {/* 404 */}
          <p className="text-[120px] md:text-[180px] font-extrabold text-white/[0.03] leading-none select-none">404</p>

          <div className="mt-[-40px] md:mt-[-60px]">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-[#4486BF]/10 text-[#4486BF]">
              <Search size={28} />
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Page Not Found</h1>
            <p className="mt-4 max-w-md mx-auto text-base text-white/40 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#4486BF] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4486BF]/20 transition-all hover:bg-[#3a73a8] hover:shadow-xl hover:-translate-y-0.5">
                <Home size={16} />
                Go Home
              </Link>
              <button onClick={() => window.history.back()}
                className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-bold text-white/60 transition-all hover:border-white/20 hover:text-white">
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Go Back
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
