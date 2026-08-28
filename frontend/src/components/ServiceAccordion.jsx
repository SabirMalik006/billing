import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Home Health Billing',
    description: 'PDGM-focused billing workflows, OASIS-related revenue considerations, LUPA management, claims processing, coding support, documentation quality review, revenue optimization, and AR/denial management.',
    details: ['PDGM Billing Workflows', 'OASIS Revenue Considerations', 'LUPA Management', 'Claims Processing', 'Coding Support', 'AR & Denial Management'],
  },
  {
    number: '02',
    title: 'Hospice Billing',
    description: 'Hospice billing workflows including NOE/NOTR processes, hospice claim management, revenue code workflows, GIP/respite/routine care considerations, coding support, documentation and QA.',
    details: ['NOE / NOTR Processes', 'Hospice Claim Management', 'Revenue Code Workflows', 'GIP / Respite / Routine Care', 'Coding & Documentation', 'AR & Denial Management'],
  },
  {
    number: '03',
    title: 'Virtual Assistance',
    description: 'Operational support including patient intake, scheduling, referral coordination, documentation follow-up, insurance verification, communication workflows, and back-office support.',
    details: ['Patient Intake', 'Scheduling Support', 'Referral Coordination', 'Documentation Follow-up', 'Insurance Verification', 'Back-Office Support'],
  },
  {
    number: '04',
    title: 'Contracting & Credentialing',
    description: 'Provider credentialing, payer enrollment, CAQH support, recredentialing, contracting support, enrollment tracking, and documentation management.',
    details: ['Provider Credentialing', 'Payer Enrollment', 'CAQH Support', 'Recredentialing', 'Contracting Support', 'Enrollment Tracking'],
  },
  {
    number: '05',
    title: 'QA & Medical Coding',
    description: 'Medical coding support, documentation review, billing QA, claims quality checks, OASIS-related review, compliance-oriented workflow review, error identification, and revenue integrity.',
    details: ['Medical Coding Support', 'Documentation Review', 'Billing QA', 'Claims Quality Checks', 'Compliance Review', 'Revenue Integrity'],
  },
  {
    number: '06',
    title: 'AR & Denial Management',
    description: 'Aging receivables follow-up, denial identification, appeal management, payer-specific workflows, and revenue recovery strategies.',
    details: ['Aging AR Follow-up', 'Denial Identification', 'Appeal Management', 'Payer-Specific Workflows', 'Revenue Recovery', 'Collections Support'],
  },
]

export default function ServiceAccordion() {
  const [expanded, setExpanded] = useState(0)

  return (
    <div className="space-y-3">
      {services.map((service, index) => (
        <div
          key={service.number}
          className={`rounded-2xl border transition-all duration-500 ${
            expanded === index
              ? 'border-mbx-teal/30 bg-mbx-navy shadow-lg shadow-mbx-navy/50'
              : 'border-mbx-border bg-mbx-white hover:border-mbx-teal/20'
          }`}
        >
          <button
            onClick={() => setExpanded(expanded === index ? -1 : index)}
            className="flex w-full items-center gap-5 p-6 text-left"
            aria-expanded={expanded === index}
          >
            <span className={`text-2xl font-bold transition-colors ${expanded === index ? 'text-mbx-teal' : 'text-mbx-teal/40'}`}>
              {service.number}
            </span>
            <div className="flex-1">
              <h3 className={`text-lg font-bold transition-colors ${expanded === index ? 'text-mbx-white' : 'text-mbx-navy'}`}>
                {service.title}
              </h3>
            </div>
            <ChevronDown
              size={20}
              className={`shrink-0 transition-all duration-300 ${
                expanded === index ? 'rotate-180 text-mbx-teal' : 'text-mbx-text-muted'
              }`}
            />
          </button>

          <AnimatePresence>
            {expanded === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-white/10 pt-5">
                    <p className="mb-5 text-sm leading-relaxed text-gray-400">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {service.details.map((detail) => (
                        <div
                          key={detail}
                          className="rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-mbx-teal-light"
                        >
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
