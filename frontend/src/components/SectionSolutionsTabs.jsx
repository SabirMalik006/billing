import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  FileText, Code, Briefcase, Users, DollarSign,
  Check, ArrowRight, Sparkles, TrendingUp, ShieldCheck, Clock, BadgeCheck,
} from 'lucide-react'

const tabs = [
  {
    id: 'billing',
    label: 'Medical Billing',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    stat: { value: '94.2%', label: 'Clean Claims Rate' },
    highlight: 'End-to-end billing, from charge capture to payment posting.',
    heading: 'Explore how MBX Solutions approaches medical billing as we aim to set new standards for accurate and efficient billing practices.',
    items: [
      'Ensuring all claims are submitted promptly.',
      'Providing clear and concise billing statements.',
      'Verifying patient information to ensure eligibility.',
      'Expert advice to optimize your processes.',
      'Adhering to all regulatory requirements.',
      'Leveraging the latest tools for billing efficiency.',
    ],
  },
  {
    id: 'coding',
    label: 'Medical Coding',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    stat: { value: '98.5%', label: 'Coding Accuracy' },
    highlight: 'Precise ICD-10 & CPT coding that maximizes compliant reimbursement.',
    heading: 'Explore how MBX Solutions approaches medical coding as we aim to set new standards for accurate and efficient coding practices.',
    items: [
      'Precision ICD-10 and CPT coding aligned with documentation.',
      'Regular code audits to ensure compliance.',
      'Specialty-specific coding expertise across all domains.',
      'Continuous education on coding updates and changes.',
      'Reducing claim denials through accurate code assignment.',
      'Maximizing reimbursement through proper code utilization.',
    ],
  },
  {
    id: 'ar',
    label: 'AR Management',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    stat: { value: '28 Days', label: 'Avg Days to Payment' },
    highlight: 'Systematic recovery that turns aged receivables into cash.',
    heading: 'Explore how MBX Solutions approaches AR management as we aim to set new standards for efficient accounts receivable recovery.',
    items: [
      'Systematic follow-up on all outstanding claims.',
      'Aging analysis to prioritize collection efforts.',
      'Payer-specific rules to accelerate payments.',
      'Appeal management for denied claims.',
      'Revenue recovery strategies for aged receivables.',
      'Regular reporting on AR performance metrics.',
    ],
  },
  {
    id: 'credentialing',
    label: 'Credentialing',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    stat: { value: '30–45', label: 'Days to Enrollment' },
    highlight: 'Complete provider enrollment, tracked and followed up proactively.',
    heading: 'Explore how MBX Solutions approaches credentialing as we aim to streamline provider enrollment and compliance.',
    items: [
      'Complete provider enrollment lifecycle management.',
      'CAQH profile setup and maintenance.',
      'Payer enrollment and recredentialing tracking.',
      'Contract negotiation support.',
      'Compliance monitoring and deadline management.',
      'Proactive follow-up to expedite approvals.',
    ],
  },
  {
    id: 'denial',
    label: 'Denial Management',
    icon: DollarSign,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    stat: { value: '-25%', label: 'Denial Reduction' },
    highlight: 'Root-cause prevention that protects your revenue stream.',
    heading: 'Explore how MBX Solutions approaches denial management as we aim to minimize revenue loss and maximize recoveries.',
    items: [
      'Root cause analysis for all denied claims.',
      'Strategic appeal letter drafting and submission.',
      'Corrected claim resubmission for faster approval.',
      'Prevention strategies to reduce future denials.',
      'Payer-specific denial pattern identification.',
      'Staff training on denial avoidance best practices.',
    ],
  },
]

const statIcons = [ShieldCheck, TrendingUp, Clock, BadgeCheck, TrendingUp]

export default function SectionSolutionsTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  const tab = tabs[activeTab]

  return (
    <section ref={sectionRef} className="py-14 lg:py-20 bg-gradient-to-br from-[#0A2A4D] to-[#071B33] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1B6FA8]/5 blur-[200px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#29ABE2]/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#1B6FA8]/5 blur-[120px]" />
      <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#29ABE2]/30 bg-[#29ABE2]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-[#29ABE2] mb-4">
            <Sparkles size={12} /> Our Solutions
          </span>
          <h2 className="max-w-4xl mx-auto text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white leading-[1.15] tracking-tight mb-4">
            Comprehensive Solutions for Efficient{' '}
            <span className="bg-gradient-to-r from-[#29ABE2] to-[#5AD1F0] bg-clip-text text-transparent">Revenue Cycle Management</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-[3px] w-[60px] bg-gradient-to-r from-transparent to-[#F5A623]" />
            <div className="size-1.5 rounded-full bg-[#F5A623]" />
            <div className="h-[3px] w-[60px] bg-gradient-to-l from-transparent to-[#F5A623]" />
          </div>
          <p className="text-base md:text-lg text-white/60 max-w-[900px] mx-auto leading-relaxed">
            At MBX Solutions, we offer comprehensive Revenue Cycle Management services from medical coding to payment posting using advanced technology and best practices to ensure financial optimization and compliance at every stage.
          </p>
        </motion.div>

        {/* Card container */}
        <motion.div
          className="max-w-6xl mx-auto rounded-3xl bg-white shadow-2xl shadow-black/40 overflow-hidden ring-1 ring-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row min-h-[440px]">
            {/* Left: Tabs */}
            <div className="w-full md:w-[32%] bg-gradient-to-b from-[#0B3D66] via-[#0A2A4D] to-[#071B33] p-5 lg:p-6 flex flex-col gap-2.5 justify-center relative overflow-hidden">
              {/* Decorative glows */}
              <div className="absolute -top-20 -right-20 size-48 rounded-full bg-[#29ABE2]/10 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 size-40 rounded-full bg-[#F5A623]/5 blur-[60px] pointer-events-none" />
              <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[#29ABE2]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[#29ABE2]/40 to-transparent pointer-events-none" />

              {/* Panel header */}
              <div className="px-2 pb-3 mb-2 border-b border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#29ABE2]">Our Services</p>
                <p className="mt-1.5 text-[13px] text-white/40 leading-relaxed">Pick a service to explore our full revenue cycle support.</p>
              </div>

              {tabs.map((service, idx) => {
                const isActive = activeTab === idx
                return (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveTab(idx)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                    className={`group flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-left transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? 'bg-white text-[#0B3D66] shadow-xl shadow-black/25'
                        : 'bg-white/[0.04] text-white/60 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/10'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#F5A623] to-[#F5A623]/60 rounded-r-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-[#29ABE2] to-[#1B8EC2] text-white shadow-md shadow-[#29ABE2]/30'
                        : 'bg-white/10 text-white/40 group-hover:bg-white/20 group-hover:text-white'
                    }`}>
                      <service.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold truncate">{service.label}</span>
                        <ArrowRight
                          size={12}
                          className={`shrink-0 transition-all duration-300 ${
                            isActive
                              ? 'text-[#29ABE2] opacity-100 translate-x-0'
                              : 'text-white/30 opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100'
                          }`}
                        />
                      </div>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="mt-0.5 text-[11px] leading-snug text-mbx-text-muted line-clamp-1 overflow-hidden"
                          >
                            {service.highlight}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <span className={`text-[9px] font-extrabold ${isActive ? 'text-[#F5A623]' : 'text-white/20'} transition-colors`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </motion.button>
                )
              })}

              {/* Panel footer */}
              <div className="px-2 pt-3 mt-2 border-t border-white/10 flex items-center gap-2">
                <Sparkles size={13} className="text-[#F5A623]/70 shrink-0" />
                <p className="text-[11px] text-white/35">HIPAA-compliant & fully managed</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-[68%] bg-white p-6 lg:p-8 relative overflow-hidden">
              {/* Watermark */}
              <span className="absolute -top-4 right-4 text-[140px] leading-none font-extrabold text-[#0B3D66]/[0.04] select-none pointer-events-none">
                {String(activeTab + 1).padStart(2, '0')}
              </span>
              <div className="absolute -top-24 -right-24 size-72 rounded-full bg-[#29ABE2]/6 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-28 -left-20 size-64 rounded-full bg-[#0B3D66]/5 blur-[80px] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
                >
                  {/* Left: text content */}
                  <div>
                    <div className="flex items-start gap-4 mb-5">
                      <div className="relative shrink-0">
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B3D66] to-[#082A4A] text-[#29ABE2] shadow-lg shadow-[#0B3D66]/20">
                          {(() => {
                            const Icon = tab.icon
                            return <Icon size={26} />
                          })()}
                        </div>
                        <div className="absolute -top-1.5 -right-1.5 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-[#F5A623] to-[#F5A623]/80 text-white shadow-md">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      </div>
                      <div>
                        <span className="inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#29ABE2] bg-[#29ABE2]/10 rounded-full">
                          {tab.label} Services
                        </span>
                        <h3 className="mt-2 text-2xl font-extrabold text-[#0B3D66] leading-tight">{tab.label}</h3>
                        <p className="mt-2 text-[15px] leading-[1.7] text-mbx-text-muted">{tab.heading}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {tab.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.06 }}
                          className="group flex items-start gap-3 rounded-xl border border-[#E8F4FD] bg-[#F7FBFE] px-3.5 py-2.5 transition-all duration-300 hover:border-[#29ABE2]/25 hover:bg-white hover:shadow-md hover:shadow-[#29ABE2]/5"
                        >
                          <span className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-[#29ABE2]/10 text-[#29ABE2] shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#29ABE2] group-hover:to-[#1B8EC2] group-hover:text-white transition-all duration-300">
                            <Check size={13} strokeWidth={3} />
                          </span>
                          <span className="text-sm leading-relaxed text-mbx-text-muted group-hover:text-mbx-text transition-colors duration-300">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: visual */}
                  <div className="flex flex-col gap-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#29ABE2]/25 via-transparent to-[#F5A623]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg pointer-events-none" />
                      <img
                        src={tab.image}
                        alt={tab.label}
                        className="relative w-full h-[190px] lg:h-[220px] object-cover rounded-2xl shadow-lg shadow-[#0B3D66]/10"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0B3D66]/80 via-transparent to-transparent" />

                      {/* Floating stat */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur px-4 py-3 shadow-xl">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#29ABE2] to-[#1B8EC2] text-white shadow-md shadow-[#29ABE2]/30">
                          {(() => {
                            const SIcon = statIcons[activeTab]
                            return <SIcon size={18} />
                          })()}
                        </div>
                        <div>
                          <p className="text-sm font-extrabold text-[#0B3D66] leading-none">{tab.stat.value}</p>
                          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-mbx-text-muted">{tab.stat.label}</p>
                        </div>
                      </div>

                      {/* Highlight badge */}
                      <span className="absolute top-4 right-4 rounded-full bg-[#F5A623]/95 backdrop-blur px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0B3D66] shadow-lg">
                        Key Focus
                      </span>
                    </div>

                    <div className="rounded-2xl border border-[#E8F4FD] bg-gradient-to-br from-[#F7FBFE] to-white p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#29ABE2] mb-1.5">Why it matters</p>
                      <p className="text-sm leading-relaxed text-mbx-text-muted">{tab.highlight}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}