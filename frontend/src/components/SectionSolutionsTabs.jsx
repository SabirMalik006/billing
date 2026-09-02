import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FileText, Code, Briefcase, Users, DollarSign, ChevronRight, Check } from 'lucide-react'

const tabs = [
  {
    id: 'billing',
    label: 'Medical Billing',
    icon: FileText,
    heading: 'Explore how RCM Matter approaches medical billing as we aim to set new standards for accurate and efficient billing practices.',
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
    heading: 'Explore how RCM Matter approaches medical coding as we aim to set new standards for accurate and efficient coding practices.',
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
    heading: 'Explore how RCM Matter approaches AR management as we aim to set new standards for efficient accounts receivable recovery.',
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
    heading: 'Explore how RCM Matter approaches credentialing as we aim to streamline provider enrollment and compliance.',
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
    heading: 'Explore how RCM Matter approaches denial management as we aim to minimize revenue loss and maximize recoveries.',
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

export default function SectionSolutionsTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#0A2A4D] to-[#071B33] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1B6FA8]/5 blur-[200px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#29ABE2]/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#1B6FA8]/5 blur-[120px]" />

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold text-[#29ABE2] mb-2 tracking-wide uppercase">Our Solutions</p>
          <h2 className="text-3xl md:text-4xl lg:text-[36px] font-extrabold text-white leading-tight mb-4">
            Comprehensive Solutions for Efficient{' '}
            <span className="text-[#29ABE2]">Revenue Cycle Management</span>
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5A623] mx-auto mb-5" />
          <p className="text-base text-white/60 max-w-[900px] mx-auto leading-relaxed">
            At RCM Matter, we offer comprehensive Revenue Cycle Management services from medical coding to payment posting using advanced technology and best practices to ensure financial optimization and compliance at every stage.
          </p>
        </motion.div>

        {/* White card container */}
        <motion.div
          className="max-w-6xl mx-auto rounded-2xl bg-white shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row min-h-[440px]">
            {/* Left: Tabs */}
            <div className="w-full md:w-[32%] bg-gradient-to-b from-[#0B3D66] to-[#082A4A] p-4 flex flex-col gap-2">
              {tabs.map((tab, idx) => {
                const isActive = activeTab === idx
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                    className={`group flex items-center gap-3 w-full px-4 py-4 rounded-xl text-left text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? 'bg-white text-[#0B3D66] shadow-lg shadow-black/20'
                        : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white'
                    }`}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#F5A623] rounded-r-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className={`flex size-9 items-center justify-center rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-[#29ABE2] text-white'
                        : 'bg-white/10 text-white/50 group-hover:bg-white/20 group-hover:text-white'
                    }`}>
                      <tab.icon size={18} />
                    </div>
                    <span className="flex-1">{tab.label}</span>
                    <ChevronRight
                      size={16}
                      className={`transition-all duration-300 ${
                        isActive ? 'text-[#29ABE2] translate-x-0 opacity-100' : 'text-white/30 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }`}
                    />
                  </motion.button>
                )
              })}
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-[68%] p-8 lg:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Tab heading */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#E8F4FD] text-[#29ABE2] shrink-0">
                      {(() => {
                        const Icon = tabs[activeTab].icon
                        return <Icon size={24} />
                      })()}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0B3D66] mb-2">{tabs[activeTab].label}</h3>
                      <p className="text-[15px] leading-[1.7] text-mbx-text-muted">
                        {tabs[activeTab].heading}
                      </p>
                    </div>
                  </div>

                  {/* Items list */}
                  <ul className="space-y-4">
                    {tabs[activeTab].items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.07 }}
                        className="flex items-start gap-3 group"
                      >
                        <span className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-[#29ABE2]/10 text-[#29ABE2] shrink-0 group-hover:bg-[#29ABE2] group-hover:text-white transition-all duration-300">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <span className="text-[15px] text-mbx-text-muted leading-relaxed group-hover:text-mbx-text transition-colors duration-300">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
