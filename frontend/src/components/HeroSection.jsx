import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ContactForm from './ContactForm'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-atmos">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661380853137-39299fc23a2a?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvcnBvcmF0ZSUyMHNlY3RvciUyMHBlb3BsZXN8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="h-[115%] w-full object-cover object-[center_30%] opacity-70 translate-y-8"
          />
        </div>
        {/* Blue glows */}
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-[#4486BF]/10 blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 h-[280px] w-[280px] rounded-full bg-[#4486BF]/6 blur-[100px]" />
        {/* Giant background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <span className="text-[20vw] font-extrabold text-mbx-teal/[0.04] tracking-tighter">RCM</span>
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

      <div className="container mx-auto relative z-10 pt-72 pb-20 md:pt-60 lg:pt-56 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-stretch lg:gap-16 xl:grid-cols-[minmax(0,1fr)_460px]">
          <div>
            <div>
              <motion.h1
                className="text-4xl font-extrabold tracking-tight text-mbx-navy sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.08]"
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
                    {i === 2 ? <span className="text-[#00B8A9]">{line}</span> : line}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p
              className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white md:text-xl"
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
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#4486BF] px-8 py-4 text-base font-bold text-mbx-white transition-all duration-300 hover:bg-[#3a73a8] hover:shadow-lg hover:shadow-[#4486BF]/20 hover:-translate-y-0.5"
              >
                Get Your Free Billing Audit
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/capabilities"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#4486BF] px-8 py-4 text-base font-bold text-mbx-white transition-all duration-300 hover:bg-[#3a73a8] hover:shadow-lg hover:shadow-[#4486BF]/20 hover:-translate-y-0.5"
              >
                Explore Our Capabilities
              </Link>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex w-full max-w-md mx-auto lg:mx-0 lg:h-full"
          >
            <ContactForm compact className="flex-1" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
