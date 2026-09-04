import { Layers, FileText, ClipboardCheck, BarChart3, Workflow, UserCheck, CheckCircle } from 'lucide-react'
import { AnimatedSection, StaggerChildren, StaggerItem } from '../components/Animated'
import { SectionHeading, PrimaryButton } from '../components/UI'

const pillars = [
  { icon: FileText, title: 'Medical Billing', desc: 'Clean claims, faster payments, zero revenue leakage — full-cycle billing support from charge capture to payment posting.', id: 'billing', color: 'from-mbx-teal/20 to-mbx-teal/5' },
  { icon: ClipboardCheck, title: 'Medical Coding', desc: 'Precision ICD-10, CPT and HCPCS coding aligned with clinical documentation for maximum reimbursement.', id: 'coding', color: 'from-blue-500/20 to-blue-500/5' },
  { icon: Workflow, title: 'OASIS & QA', desc: 'Accurate OASIS assessments, scoring optimization, and rigorous chart review for better outcomes.', id: 'oasis', color: 'from-mbx-teal/20 to-mbx-teal/5' },
  { icon: BarChart3, title: 'Reporting & Analytics', desc: 'Clear revenue dashboards and KPI reporting for data-driven decisions.', id: 'reporting', color: 'from-blue-500/20 to-blue-500/5' },
  { icon: UserCheck, title: 'Credentialing', desc: 'Complete provider enrollment lifecycle — from credentialing to recredentialing and contracting.', id: 'credentialing', color: 'from-mbx-teal/20 to-mbx-teal/5' },
  { icon: Layers, title: 'EDI & EFT', desc: 'Seamless electronic claims, ERA/EOB and EFT setup for faster, cleaner payments.', id: 'edi', color: 'from-blue-500/20 to-blue-500/5' },
]

export default function Solution() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-mbx-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
          <div className="hero-grid absolute inset-0" />
          <div className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-mbx-teal/5 blur-[150px]" />
        </div>
        <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <AnimatedSection>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-mbx-teal">
              Solution
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              One Partner, <span className="text-mbx-teal">End-to-End</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              Billing, coding, QA, credentialing and reporting — connected into one streamlined solution that eliminates gaps and maximizes revenue.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Billing', 'Coding', 'OASIS QA', 'Credentialing', 'Reporting'].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2.5 text-sm text-white/70">
                  <CheckCircle size={14} className="text-mbx-teal" />
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-28 lg:py-36 bg-mbx-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Solution"
              title="Every Step Connected, Every Claim Optimized"
              subtitle="We combine billing, coding, OASIS, QA, and credentialing into one workflow — eliminating gaps and improving outcomes across your entire revenue cycle."
            />
          </AnimatedSection>

          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {pillars.map((item) => (
              <StaggerItem key={item.title}>
                <div id={item.id} className="group relative rounded-2xl border border-mbx-border bg-white p-8 transition-all duration-500 hover:shadow-xl hover:border-mbx-teal/40 hover:-translate-y-1 overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="relative z-10">
                    <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-mbx-teal/10 text-mbx-teal transition-all duration-500 group-hover:bg-mbx-teal group-hover:text-white">
                      <item.icon size={26} />
                    </div>
                    <h3 className="mb-3 text-lg font-extrabold text-mbx-navy group-hover:text-mbx-teal transition-colors">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-mbx-text-muted">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Framework */}
      <section className="py-28 lg:py-36 bg-mbx-surface">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Framework"
              title="A Structured, End-to-End Approach"
              subtitle="We don't just manage billing — we build a structured revenue cycle where every step is compliant and optimized."
            />
          </AnimatedSection>

          <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-5">
            {['Documentation', 'Coding', 'Claim', 'Payment', 'Revenue'].map((step, i) => (
              <AnimatedSection key={step} delay={i * 0.08}>
                <div className="group rounded-2xl bg-mbx-white border-2 border-mbx-border px-6 py-10 text-center transition-all duration-500 hover:border-mbx-teal hover:shadow-xl hover:-translate-y-1">
                  <span className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full bg-mbx-teal text-sm font-extrabold text-white">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="text-base font-extrabold text-mbx-navy group-hover:text-mbx-teal transition-colors">{step}</h4>
                </div>
              </AnimatedSection>
            ))}
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
              Build Your Solution With MBX
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/50">
              Tell us about your practice and we'll design the right revenue cycle solution for you.
            </p>
            <PrimaryButton to="/connect-us" size="lg">Design My Solution</PrimaryButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}