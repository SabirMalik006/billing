import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mbx-navy">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
        {/* Abstract teal glow */}
        <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-mbx-teal/8 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-mbx-teal/5 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Pulse line decoration */}
        <svg className="absolute bottom-0 left-0 right-0 h-32 text-mbx-teal/10" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <motion.path
            d="M0,60 L120,60 L140,20 L160,100 L180,40 L200,80 L220,60 L360,60 L380,30 L400,90 L420,50 L440,70 L460,60 L600,60 L620,25 L640,95 L660,45 L680,75 L700,60 L840,60 L860,35 L880,85 L900,55 L920,65 L940,60 L1080,60 L1100,20 L1120,100 L1140,40 L1160,80 L1180,60 L1320,60 L1340,30 L1360,90 L1380,50 L1400,70 L1440,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-4 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-mbx-teal">
              Healthcare Revenue Cycle Management
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mt-8">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-mbx-white sm:text-5xl md:text-6xl lg:text-7xl"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
              }}
            >
              {['Better Revenue.', 'Better Visibility.', 'More Time for Care.'].map((line, i) => (
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

          {/* Description */}
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            MBX Solutions helps healthcare organizations strengthen revenue performance through
            specialized billing, coding, credentialing, and virtual assistance — with deep
            expertise in Home Health and Hospice.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <Link
              to="/connect-us"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-mbx-teal px-8 py-4 text-base font-semibold text-mbx-white transition-all duration-300 hover:bg-mbx-teal-dark hover:shadow-lg hover:shadow-mbx-teal/25"
            >
              Talk to an RCM Expert
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/capabilities"
              className="group inline-flex items-center gap-2.5 rounded-lg border-2 border-white/20 px-8 py-4 text-base font-semibold text-mbx-white transition-all duration-300 hover:border-mbx-teal hover:bg-mbx-teal/10"
            >
              Explore Our Capabilities
            </Link>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4"
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
              <p className="text-lg font-bold text-mbx-white">{item.label}</p>
              <p className="text-xs tracking-wider uppercase text-mbx-teal">{item.sublabel}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
