import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const workflowSteps = [
  { number: '01', title: 'Credentialing', desc: 'Provider enrollment & payer setup', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=520&q=60' },
  { number: '02', title: 'Contracting', desc: 'Payer rate negotiation', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=520&q=60' },
  { number: '03', title: 'Patient Intake', desc: 'Registration & documentation', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=520&q=60' },
  { number: '04', title: 'Documentation', desc: 'Clinical record completion', image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=520&q=60' },
  { number: '05', title: 'Coding', desc: 'Medical coding & review', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=520&q=60' },
  { number: '06', title: 'Claim Submission', desc: 'Electronic claim filing', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=520&q=60' },
  { number: '07', title: 'Payment Posting', desc: 'ERA/EOB processing', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=520&q=60' },
  { number: '08', title: 'AR Follow-up', desc: 'Aging receivables recovery', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=520&q=60' },
  { number: '09', title: 'Denial Management', desc: 'Appeals & corrections', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=520&q=60' },
  { number: '10', title: 'Reporting', desc: 'Analytics & optimization', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=520&q=60' },
]

export default function WorkflowVisual() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-atmos-soft py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div className="absolute top-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-mbx-teal/30 to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-0 size-[420px] rounded-full bg-[#4486BF]/10 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 size-[360px] rounded-full bg-[#C7E7F8]/60 blur-[150px]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-white/70 px-4 py-1.5 text-xs font-bold tracking-[0.15em] uppercase text-mbx-teal">
            The Revenue Cycle
          </span>
          <h2 className="mt-6 mb-6 text-3xl font-extrabold leading-tight tracking-tight text-mbx-navy md:text-4xl lg:text-5xl">
            Every Step Connected.
          </h2>
          <p className="text-lg text-mbx-text-muted">
            From credentialing to reporting, MBX Solutions supports every stage of the healthcare revenue cycle.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group h-full"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-mbx-border bg-white shadow-[0_2px_16px_rgba(11,35,72,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#4486BF]/40 hover:shadow-xl hover:shadow-[#4486BF]/10">
                {/* Image */}
                <div className="relative h-28 overflow-hidden sm:h-32">
                  <img
                    src={step.image}
                    alt={`${step.title} — healthcare revenue cycle`}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2348]/55 via-[#0B2348]/15 to-transparent" />
                  <span className="absolute left-3 top-3 flex size-8 items-center justify-center rounded-lg bg-white/90 text-xs font-extrabold text-[#4486BF] shadow-sm backdrop-blur-sm">
                    {step.number}
                  </span>
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#4486BF] to-[#5A9AD0] transition-all duration-500 group-hover:w-full" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col items-center p-5 text-center">
                  <h3 className="text-sm font-extrabold text-mbx-navy transition-colors group-hover:text-[#4486BF]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-mbx-text-muted">{step.desc}</p>
                  <div className="mt-auto flex items-center justify-center gap-1.5 pt-3 text-[10px] font-bold text-mbx-teal">
                    <CheckCircle size={12} />
                    Active
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-sm font-medium text-mbx-text-muted/70">
            MBX Solutions provides operational support across the entire revenue cycle ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  )
}