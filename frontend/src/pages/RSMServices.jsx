import { FilePlus2, ScrollText, Milestone, ShieldAlert, ClipboardCheck, TrendingUp, CheckCircle } from 'lucide-react'
import { AnimatedSection, StaggerChildren, StaggerItem } from '../components/Animated'
import { SectionHeading, PrimaryButton } from '../components/UI'

const services = [
  { icon: FilePlus2, title: 'Claim Entry & Submission', desc: 'Clean claim entry and electronic submission designed to minimize rejections and denials.', id: 'claim-entry' },
  { icon: ScrollText, title: 'Medical Coding', desc: 'Precise ICD-10, CPT and HCPCS coding aligned with clinical documentation.', id: 'coding' },
  { icon: Milestone, title: 'AR Follow-up', desc: 'Proactive follow-up on aging accounts receivable to accelerate reimbursements.', id: 'ar' },
  { icon: ShieldAlert, title: 'Denial Management', desc: 'Root-cause analysis, appeals, and prevention strategies to reduce denials.', id: 'denial' },
  { icon: ClipboardCheck, title: 'OASIS QA & Chart Review', desc: 'Quality assurance on OASIS assessments and chart documentation for better outcomes.', id: 'oasis' },
  { icon: TrendingUp, title: 'Reporting & Analytics', desc: 'Clear KPI reporting and revenue analytics for data-driven decisions.', id: 'reporting' },
]

export default function RSMServices() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-mbx-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
          <div className="hero-grid absolute inset-0" />
        </div>
        <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <AnimatedSection>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-mbx-teal">
              RSM Services
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              Revenue Cycle <span className="text-mbx-teal">Management Services</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              End-to-end revenue cycle support that reduces denials, improves cash flow, and gives you full visibility into your financial health.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 lg:py-36 bg-mbx-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading
              eyebrow="RSM Services"
              title="Every Step of the Revenue Cycle, Covered"
              subtitle="From the moment a claim is created to the day payment posts — we manage it all."
            />
          </AnimatedSection>

          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {services.map((item) => (
              <StaggerItem key={item.title}>
                <div id={item.id} className="group h-full rounded-2xl border border-mbx-border bg-white p-8 transition-all duration-500 hover:shadow-xl hover:border-mbx-teal/40 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-mbx-teal to-mbx-teal-light transition-all duration-500 group-hover:w-full" />
                  <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-mbx-teal/10 text-mbx-teal transition-all duration-500 group-hover:bg-mbx-teal group-hover:text-white group-hover:shadow-lg group-hover:shadow-mbx-teal/20">
                    <item.icon size={26} />
                  </div>
                  <h3 className="mb-3 text-lg font-extrabold text-mbx-navy group-hover:text-mbx-teal transition-colors">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-mbx-text-muted">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Why RSM */}
      <section className="py-28 lg:py-36 bg-mbx-surface">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <AnimatedSection className="flex-1" direction="right">
              <SectionHeading
                eyebrow="Why It Matters"
                title="Small Errors Create Large Revenue Consequences"
                subtitle="Quality assurance at every step ensures accuracy, compliance, and revenue integrity."
                centered={false}
              />
              <div className="grid gap-3">
                {[
                  'Multi-step claim scrubbing before submission',
                  'Payer-specific rule checks',
                  'Documentation review for coding accuracy',
                  'Regular audits to catch gaps early',
                ].map((item, i) => (
                  <AnimatedSection key={item} delay={0.1 + i * 0.05}>
                    <div className="flex items-center gap-3 rounded-xl border border-mbx-border bg-mbx-white px-5 py-3.5">
                      <CheckCircle size={16} className="shrink-0 text-mbx-teal" />
                      <span className="text-sm font-semibold text-mbx-navy">{item}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex-1" delay={0.15}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80"
                  alt="Revenue cycle management team"
                  className="w-full rounded-3xl object-cover shadow-xl shadow-mbx-navy/10"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 rounded-2xl bg-mbx-navy p-5 shadow-2xl flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-mbx-teal/10 text-mbx-teal">
                    <TrendingUp size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-white">30% Faster Payments</p>
                    <p className="text-xs text-white/50">Optimized claim workflows</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-mbx-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-mbx-teal/5 blur-[150px]" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Optimize Your Revenue Cycle
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/50">
              Let our experts analyze your current RCM performance and identify untapped revenue opportunities.
            </p>
            <PrimaryButton to="/connect-us" size="lg">Get a Free Audit</PrimaryButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}