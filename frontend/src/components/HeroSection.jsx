import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Activity, Shield, FileText, CheckCircle, Clock } from 'lucide-react'

function DashboardVisual() {
  return (
    <div className="relative w-full max-w-[540px]">
      {/* Glow effect */}
      <div className="absolute -inset-4 rounded-3xl bg-mbx-teal/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative rounded-2xl border border-white/10 bg-mbx-navy/80 p-6 backdrop-blur-xl shadow-2xl shadow-black/30"
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-2 rounded-full bg-mbx-teal animate-pulse-slow" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-mbx-teal">MBX Revenue Intelligence</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-white/40">
            <div className="size-1.5 rounded-full bg-green-400" />
            Live
          </div>
        </div>

        {/* Main metric */}
        <div className="mb-5 rounded-xl bg-white/[0.04] p-5 border border-white/[0.06]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-medium text-white/40 mb-1">Revenue Performance</p>
              <p className="text-3xl font-extrabold text-white">$2.48M</p>
              <p className="mt-1 text-[11px] text-white/30">illustrative data</p>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-green-500/10 px-2.5 py-1.5">
              <TrendingUp size={12} className="text-green-400" />
              <span className="text-[11px] font-bold text-green-400">+12.4%</span>
            </div>
          </div>
          {/* Animated chart line */}
          <div className="mt-4 h-16">
            <svg viewBox="0 0 400 60" className="h-full w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(21,159,160)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgb(21,159,160)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,45 L30,40 L60,42 L90,35 L120,38 L150,30 L180,32 L210,25 L240,28 L270,20 L300,22 L330,15 L360,18 L400,10"
                fill="none"
                stroke="rgb(21,159,160)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
              />
              <motion.path
                d="M0,45 L30,40 L60,42 L90,35 L120,38 L150,30 L180,32 L210,25 L240,28 L270,20 L300,22 L330,15 L360,18 L400,10 L400,60 L0,60 Z"
                fill="url(#chartGrad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              />
            </svg>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Claims', value: '94.8%', icon: FileText, color: 'text-mbx-teal' },
            { label: 'AR Days', value: '28', icon: Clock, color: 'text-mbx-teal-light' },
            { label: 'Denials', value: '↓3.2%', icon: Shield, color: 'text-green-400' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white/[0.04] p-3 border border-white/[0.04]">
              <stat.icon size={14} className={`mb-2 ${stat.color}`} />
              <p className="text-[10px] text-white/40 mb-0.5">{stat.label}</p>
              <p className="text-sm font-extrabold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="mt-4 space-y-2">
          {[
            { text: 'Clean claim posted', time: '2m ago', color: 'bg-green-400' },
            { text: 'OASIS review completed', time: '8m ago', color: 'bg-mbx-teal' },
            { text: 'Credentialing approved', time: '15m ago', color: 'bg-mbx-teal-light' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 + i * 0.2 }}
              className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2"
            >
              <div className={`size-1.5 rounded-full ${item.color}`} />
              <span className="flex-1 text-[11px] text-white/50">{item.text}</span>
              <span className="text-[10px] text-white/25">{item.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        className="absolute -right-4 top-8 rounded-xl border border-white/10 bg-mbx-navy/90 px-4 py-3 shadow-xl backdrop-blur-sm"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-lg bg-mbx-teal/15">
            <Activity size={14} className="text-mbx-teal" />
          </div>
          <div>
            <p className="text-[10px] text-white/40">Claims Processing</p>
            <p className="text-xs font-bold text-white">Active</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-6 bottom-20 rounded-xl border border-white/10 bg-mbx-navy/90 px-4 py-3 shadow-xl backdrop-blur-sm"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-lg bg-green-500/15">
            <CheckCircle size={14} className="text-green-400" />
          </div>
          <div>
            <p className="text-[10px] text-white/40">QA Review</p>
            <p className="text-xs font-bold text-white">98.5% Accuracy</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-2 bottom-8 rounded-xl border border-white/10 bg-mbx-navy/90 px-4 py-3 shadow-xl backdrop-blur-sm"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-lg bg-mbx-teal/15">
            <Shield size={14} className="text-mbx-teal" />
          </div>
          <div>
            <p className="text-[10px] text-white/40">AR Recovery</p>
            <p className="text-xs font-bold text-white">In Progress</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mbx-navy">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
        <div className="hero-grid absolute inset-0" />
        {/* Teal glows */}
        <div className="absolute top-1/4 -right-48 h-[500px] w-[500px] rounded-full bg-mbx-teal/6 blur-[150px]" />
        <div className="absolute bottom-1/4 -left-48 h-[400px] w-[400px] rounded-full bg-mbx-teal/4 blur-[120px]" />
        {/* Giant background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <span className="text-[20vw] font-extrabold text-white/[0.02] tracking-tighter">RCM</span>
        </div>
        {/* Subtle pulse line */}
        <svg className="absolute bottom-0 left-0 right-0 h-24 text-mbx-teal/8" viewBox="0 0 1440 90" preserveAspectRatio="none">
          <motion.path
            d="M0,45 L120,45 L140,15 L160,75 L180,30 L200,60 L220,45 L360,45 L380,20 L400,70 L420,35 L440,55 L460,45 L600,45 L620,18 L640,72 L660,32 L680,58 L700,45 L840,45 L860,22 L880,68 L900,38 L920,52 L940,45 L1080,45 L1100,15 L1120,75 L1140,30 L1160,60 L1180,45 L1320,45 L1340,20 L1360,70 L1380,35 L1400,55 L1440,45"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Left */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-mbx-teal">
                Healthcare Revenue Cycle Management
              </span>
            </motion.div>

            <div className="mt-8">
              <motion.h1
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.08]"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
                }}
              >
                {['Leave Billing To Us.', 'Focus On What', 'Matters Most.'].map((line, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {i === 2 ? <span className="text-mbx-teal">{line}</span> : line}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              MBX Solutions helps healthcare organizations simplify medical billing, coding,
              credentialing and revenue cycle management — with deep expertise in Home Health and Hospice.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <Link
                to="/connect-us"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-mbx-teal px-8 py-4 text-base font-bold text-mbx-white transition-all duration-300 hover:bg-mbx-teal-dark hover:shadow-lg hover:shadow-mbx-teal/20 hover:-translate-y-0.5"
              >
                Get Your Free Billing Audit
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/capabilities"
                className="group inline-flex items-center gap-2.5 rounded-xl border-2 border-white/15 px-8 py-4 text-base font-bold text-white/80 transition-all duration-300 hover:border-mbx-teal hover:bg-mbx-teal/10 hover:text-white"
              >
                Explore Our Capabilities
              </Link>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              className="mt-16 grid grid-cols-2 gap-8 border-t border-white/8 pt-10 sm:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              {[
                { label: 'Home Health', sublabel: 'Specialization' },
                { label: 'Hospice', sublabel: 'Expertise' },
                { label: 'Private Practice', sublabel: 'Support' },
                { label: 'Health Systems', sublabel: 'Scale' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-base font-extrabold text-white">{item.label}</p>
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-mbx-teal mt-0.5">{item.sublabel}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Animated Dashboard */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <DashboardVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
