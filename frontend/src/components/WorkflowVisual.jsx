import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const workflowSteps = [
  { number: '01', title: 'Credentialing', desc: 'Provider enrollment & payer setup' },
  { number: '02', title: 'Patient Intake', desc: 'Registration & documentation' },
  { number: '03', title: 'Eligibility', desc: 'Insurance verification & authorization' },
  { number: '04', title: 'Coding', desc: 'Medical coding & review' },
  { number: '05', title: 'Charge Capture', desc: 'Charge entry & validation' },
  { number: '06', title: 'Claim Submission', desc: 'Electronic claim filing' },
  { number: '07', title: 'Payment Posting', desc: 'ERA/EOB processing' },
  { number: '08', title: 'Denial Management', desc: 'Appeals & corrections' },
  { number: '09', title: 'AR Follow-up', desc: 'Aging receivables recovery' },
  { number: '10', title: 'Reporting', desc: 'Analytics & optimization' },
]

export default function WorkflowVisual() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-mbx-navy overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[80%] bg-gradient-to-r from-transparent via-mbx-teal/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="mb-4 inline-block text-sm font-semibold tracking-widest uppercase text-mbx-teal">
            The Revenue Cycle
          </span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-mbx-white md:text-4xl lg:text-5xl">
            End-to-End Revenue Visibility
          </h2>
          <p className="text-lg text-gray-400">
            From credentialing to reporting, MBX supports every stage of the healthcare revenue cycle.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-mbx-teal/40 hover:bg-mbx-teal/5">
                <span className="mb-3 block text-3xl font-bold text-mbx-teal/40 group-hover:text-mbx-teal transition-colors">
                  {step.number}
                </span>
                <h3 className="mb-1 text-base font-bold text-mbx-white">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
              {/* Connector line for desktop */}
              {index < workflowSteps.length - 1 && index % 5 !== 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-mbx-teal/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-12 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          MBX provides operational support across the entire revenue cycle ecosystem.
        </motion.p>
      </div>
    </section>
  )
}
