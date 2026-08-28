import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const workflowSteps = [
  { number: '01', title: 'Credentialing', desc: 'Provider enrollment & payer setup' },
  { number: '02', title: 'Contracting', desc: 'Payer rate negotiation' },
  { number: '03', title: 'Patient Intake', desc: 'Registration & documentation' },
  { number: '04', title: 'Documentation', desc: 'Clinical record completion' },
  { number: '05', title: 'Coding', desc: 'Medical coding & review' },
  { number: '06', title: 'Claim Submission', desc: 'Electronic claim filing' },
  { number: '07', title: 'Payment Posting', desc: 'ERA/EOB processing' },
  { number: '08', title: 'AR Follow-up', desc: 'Aging receivables recovery' },
  { number: '09', title: 'Denial Management', desc: 'Appeals & corrections' },
  { number: '10', title: 'Reporting', desc: 'Analytics & optimization' },
]

export default function WorkflowVisual() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-mbx-navy overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[80%] bg-gradient-to-r from-transparent via-mbx-teal/20 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="mb-5 inline-block text-xs font-bold tracking-[0.2em] uppercase text-mbx-teal">
            The Revenue Cycle
          </span>
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Every Step Connected.
          </h2>
          <p className="text-lg text-white/40">
            From credentialing to reporting, MBX supports every stage of the healthcare revenue cycle.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-500 hover:border-mbx-teal/30 hover:bg-mbx-teal/5">
                <span className="mb-3 block text-3xl font-extrabold text-mbx-teal/30 group-hover:text-mbx-teal transition-colors">
                  {step.number}
                </span>
                <h3 className="mb-1 text-sm font-extrabold text-white">{step.title}</h3>
                <p className="text-xs text-white/40">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center line for desktop */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-white/30 font-medium">
            MBX provides operational support across the entire revenue cycle ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
