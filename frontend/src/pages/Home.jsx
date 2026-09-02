import { Link } from 'react-router-dom'
import { ArrowRight, Stethoscope, Heart, Users, Shield, TrendingUp, Activity, ClipboardCheck, FileText, BarChart3, Clock, Zap, Target, CheckCircle, ChevronRight, ChevronDown, Eye } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import WorkflowVisual from '../components/WorkflowVisual'
import { AnimatedSection, StaggerChildren, StaggerItem } from '../components/Animated'
import { SectionHeading, PrimaryButton, SecondaryButton } from '../components/UI'
import SectionStatsGrid from '../components/SectionStatsGrid'
import SectionRCMTimeline from '../components/SectionRCMTimeline'
import SectionSpecialtiesScroll from '../components/SectionSpecialtiesScroll'
import SectionAuditCTA from '../components/SectionAuditCTA'
import SectionEHRLogos from '../components/SectionEHRLogos'
import SectionSolutionsTabs from '../components/SectionSolutionsTabs'
import SectionHealthcareSectors from '../components/SectionHealthcareSectors'

/* ── Trust Strip ── */
function TrustStrip() {
  const items = ['Home Health', 'Hospice', 'Behavioral Health', 'Private Practice', 'Medical Groups', 'Healthcare Organizations']
  return (
    <section className="bg-mbx-surface py-12 border-b border-mbx-border">
      <div className="container mx-auto">
        <AnimatedSection>
          <p className="mb-6 text-center text-[10px] font-bold tracking-[0.2em] uppercase text-mbx-text-muted">
            Built around the realities of modern healthcare
          </p>
        </AnimatedSection>
        <StaggerChildren className="flex flex-wrap justify-center gap-2" stagger={0.05}>
          {items.map((item) => (
            <StaggerItem key={item}>
              <span className="rounded-full border border-mbx-border bg-mbx-white px-5 py-2 text-xs font-semibold text-mbx-navy transition-all hover:border-mbx-teal hover:text-mbx-teal hover:shadow-sm">
                {item}
              </span>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ── Introduction Section ── */
function IntroductionSection() {
  return (
    <section className="py-28 lg:py-36 bg-mbx-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <AnimatedSection>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-mbx-teal/20 bg-mbx-teal/5 px-4 py-1.5 text-xs font-bold tracking-[0.15em] uppercase text-mbx-teal">
                Who We Are
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-mbx-navy leading-[1.1]">
                Healthcare Revenue,<br />
                <span className="text-mbx-teal">Without the Complexity.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-8 text-lg leading-relaxed text-mbx-text-muted max-w-xl">
                MBX is a trusted medical billing and revenue cycle management company delivering
                comprehensive, technology-driven solutions to healthcare providers. We combine billing,
                coding, OASIS, and QA into one streamlined workflow — eliminating gaps, reducing errors,
                and improving outcomes across your entire revenue cycle.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="mt-10">
                <Link to="/about" className="group inline-flex items-center gap-2.5 rounded-xl bg-[#4486BF] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#3a73a8] hover:shadow-lg hover:shadow-[#4486BF]/20 hover:-translate-y-0.5">
                  Learn More About Us
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Stats */}
          <div className="flex-1">
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
              {[
                { value: '98.5%', label: 'Billing Accuracy', desc: 'Industry-leading precision in claims processing and submission', icon: Target },
                { value: '35%', label: 'A/R Reduction', desc: 'Faster payments and improved cash flow for your practice', icon: TrendingUp },
                { value: '100%', label: 'HIPAA Compliant', desc: 'Full compliance with healthcare data security standards', icon: Shield },
              ].map((stat, i) => (
                <AnimatedSection key={stat.label} delay={0.2 + i * 0.1}>
                  <div className="group relative flex items-start gap-5 rounded-2xl border border-mbx-border/60 bg-white p-6 transition-all duration-500 hover:border-mbx-teal/40 hover:shadow-xl hover:shadow-mbx-teal/5 hover:-translate-y-1 overflow-hidden">
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-mbx-teal to-blue-500 transition-all duration-500 group-hover:w-full" />
                    {/* Glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-mbx-teal/8 rounded-full blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-mbx-navy to-mbx-navy-light text-white transition-all duration-500 group-hover:from-mbx-teal group-hover:to-mbx-teal-dark group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-mbx-teal/30">
                      <stat.icon size={26} />
                    </div>
                    <div className="relative z-10">
                      <p className="text-3xl font-extrabold text-mbx-navy">{stat.value}</p>
                      <p className="mt-1 text-sm font-bold text-mbx-navy">{stat.label}</p>
                      <p className="mt-1.5 text-sm text-mbx-text-muted leading-relaxed">{stat.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── MBX Advantage ── */
function MBXAdvantageSection() {
  const advantages = [
    { icon: ClipboardCheck, title: 'Accurate Documentation', desc: 'Improve coding precision and reduce costly errors with thorough documentation review and alignment.', color: 'from-mbx-teal/20 to-mbx-teal/5' },
    { icon: TrendingUp, title: 'Higher Star Ratings', desc: 'Boost quality scores and patient satisfaction outcomes through optimized clinical documentation.', color: 'from-blue-500/20 to-blue-500/5' },
    { icon: BarChart3, title: 'Better Reimbursement', desc: 'Maximize revenue with compliant and optimized claims that capture the full value of services rendered.', color: 'from-mbx-teal/20 to-mbx-teal/5' },
    { icon: Shield, title: 'Denial Prevention', desc: 'QA-driven process that reduces errors at the source, prevents denials before they happen.', color: 'from-blue-500/20 to-blue-500/5' },
    { icon: Activity, title: 'Revenue Visibility', desc: 'Clear insight into billing performance across your organization with real-time dashboards and reports.', color: 'from-mbx-teal/20 to-mbx-teal/5' },
    { icon: Zap, title: 'End-to-End RCM', desc: 'One partner supporting your entire revenue cycle lifecycle from credentialing to payment posting.', color: 'from-blue-500/20 to-blue-500/5' },
  ]

  return (
    <section className="py-28 lg:py-36 bg-mbx-surface overflow-hidden">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="The MBX Advantage"
            title="Every Step Connected, Every Claim Optimized"
            subtitle="We combine billing, coding, OASIS, and QA into one streamlined workflow — eliminating gaps, reducing errors, and improving outcomes across your entire revenue cycle."
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {advantages.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div className="group relative rounded-3xl border border-mbx-border/60 bg-white p-8 lg:p-9 transition-all duration-500 hover:shadow-2xl hover:shadow-mbx-navy/10 hover:border-mbx-teal/40 hover:-translate-y-2 h-full overflow-hidden text-center">
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 rounded-full bg-gradient-to-r from-mbx-teal to-blue-500 transition-all duration-500 group-hover:w-full" />
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                {/* Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-mbx-teal/10 rounded-full blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Number */}
                  <span className="mb-5 inline-block text-[11px] font-extrabold tracking-[0.2em] text-mbx-border group-hover:text-mbx-teal/40 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-mbx-navy to-mbx-navy-light text-white transition-all duration-500 group-hover:from-mbx-teal group-hover:to-mbx-teal-dark group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-mbx-teal/30">
                    <item.icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-extrabold text-mbx-navy group-hover:text-mbx-navy transition-colors leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-mbx-text-muted">
                    {item.desc}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-mbx-teal opacity-0 translate-x-[-10px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Interactive Services Explorer ── */
function ServiceExplorer() {
  const [expanded, setExpanded] = useState(0)
  const services = [
    { number: '01', title: 'Medical Billing', description: 'Clean claims, faster payments, zero revenue leakage. Full-cycle billing support from charge capture to payment posting.', details: ['Claim Submission', 'Payment Posting', 'Revenue Cycle Management', 'Denial Prevention', 'AR Follow-up', 'Reporting'] },
    { number: '02', title: 'Medical Coding', description: 'Precision coding that drives accuracy and maximizes reimbursement. ICD-10 expertise aligned with clinical documentation.', details: ['ICD-10 Coding', 'CPT/HCPCS Coding', 'Code Review', 'Documentation Alignment', 'Coding Audits', 'Compliance'] },
    { number: '03', title: 'OASIS QA & Chart Review', description: 'Accurate OASIS, stronger scores, better outcomes. Comprehensive quality assurance on OASIS assessments.', details: ['OASIS Accuracy Review', 'Scoring Optimization', 'Star Rating Impact', 'Clinical Documentation', 'QA Metrics', 'Compliance Check'] },
    { number: '04', title: 'EDI & EFT Setup', description: 'Seamless setup for faster claims and quicker payments. Electronic data interchange configuration and management.', details: ['Electronic Claims', 'ERA/EOB Setup', 'EFT Configuration', 'Clearinghouse Integration', 'Payer Connectivity', 'Testing & Validation'] },
    { number: '05', title: 'AR Aging & Recovery', description: 'We recover what others leave behind. Strategic follow-up on aging receivables and revenue recovery.', details: ['Aging AR Analysis', 'Payer Follow-up', 'Appeal Management', 'Revenue Recovery', 'Collections Strategy', 'Trend Reporting'] },
    { number: '06', title: 'Credentialing', description: 'Get approved faster and start billing without delays. Complete provider enrollment lifecycle management.', details: ['Provider Credentialing', 'Payer Enrollment', 'CAQH Setup', 'Recredentialing', 'Contracting', 'Enrollment Tracking'] },
    { number: '07', title: 'Audit', description: 'Identify hidden gaps and unlock missed revenue opportunities. Comprehensive billing and coding audits.', details: ['Coding Audit', 'Billing Compliance', 'Revenue Leakage Analysis', 'Process Review', 'Gap Identification', 'Remediation Plan'] },
    { number: '08', title: 'Virtual Assistance', description: 'Extend your team\'s capacity with dedicated healthcare virtual assistants for administrative workflows.', details: ['Patient Intake', 'Scheduling', 'Insurance Verification', 'Referral Coordination', 'Documentation Follow-up', 'Back-Office Support'] },
    { number: '09', title: 'Contracting', description: 'Payer contracting support to optimize reimbursement rates and strengthen provider-payer relationships.', details: ['Rate Negotiation', 'Contract Review', 'Payer Analysis', 'Terms Optimization', 'Renewal Management', 'Compliance'] },
  ]

  return (
    <section className="py-28 lg:py-36 bg-mbx-surface">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Capabilities"
            title="Comprehensive Revenue Cycle Support"
            subtitle="From specialized home health billing to enterprise-scale operations, we support the full spectrum of healthcare revenue needs."
          />
        </AnimatedSection>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-2">
            {services.map((service, index) => (
              <AnimatedSection key={service.number} delay={index * 0.03}>
                <div
                  className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                    expanded === index
                      ? 'border-mbx-teal/30 bg-mbx-navy shadow-xl shadow-mbx-navy/10'
                      : 'border-mbx-border bg-mbx-white hover:border-mbx-teal/20'
                  }`}
                >
                  <button
                    onClick={() => setExpanded(expanded === index ? -1 : index)}
                    className="flex w-full items-center gap-5 p-6 text-left"
                    aria-expanded={expanded === index}
                  >
                    <span className={`text-2xl font-extrabold transition-colors ${expanded === index ? 'text-mbx-teal' : 'text-mbx-teal/30'}`}>
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3 className={`text-lg font-extrabold transition-colors ${expanded === index ? 'text-white' : 'text-mbx-navy'}`}>
                        {service.title}
                      </h3>
                      {expanded !== index && (
                        <p className="text-sm text-mbx-text-muted mt-0.5 hidden sm:block">{service.description.slice(0, 80)}...</p>
                      )}
                    </div>
                    <ChevronRight
                      size={20}
                      className={`shrink-0 transition-all duration-300 ${
                        expanded === index ? 'rotate-90 text-mbx-teal' : 'text-mbx-text-muted'
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: expanded === index ? 'auto' : 0, opacity: expanded === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-white/10 pt-5">
                        <p className="mb-5 text-sm leading-relaxed text-white/50">{service.description}</p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {service.details.map((detail) => (
                            <div key={detail} className="rounded-lg bg-white/5 px-3 py-2 text-xs font-semibold text-mbx-teal-light border border-white/5">
                              {detail}
                            </div>
                          ))}
                        </div>
                        <div className="mt-5">
                          <Link to="/connect-us" className="inline-flex items-center gap-2 text-sm font-bold text-mbx-teal hover:text-mbx-teal-light transition-colors">
                            Get Started <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Virtual Assistance ── */
function VirtualAssistanceSection() {
  const steps = ['Referral', 'Intake', 'Scheduling', 'Documentation', 'Follow-up', 'Billing']
  const cards = [
    { icon: Clock, title: 'Scheduling Support', desc: 'Appointment coordination and calendar management for your clinical team.' },
    { icon: FileText, title: 'Documentation Follow-up', desc: 'Incomplete chart and documentation tracking to keep workflows moving.' },
    { icon: Shield, title: 'Insurance Verification', desc: 'Eligibility checks and prior authorization before patient visits.' },
    { icon: Users, title: 'Referral Coordination', desc: 'Intake processing and referral management across your network.' },
    { icon: Zap, title: 'Back-Office Support', desc: 'Administrative tasks, data entry, and operational workflows.' },
    { icon: Target, title: 'Communication Workflows', desc: 'Payer and provider communication tracking and follow-up.' },
  ]

  return (
    <section className="py-28 lg:py-36 bg-mbx-surface">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Virtual Assistance"
            title="Extending Your Team's Capacity"
            subtitle="Operational support that allows your clinical team to focus on patient care while we handle the administrative workflows."
          />
        </AnimatedSection>

        {/* Process Flow */}
        <AnimatedSection delay={0.15}>
          <div className="mx-auto max-w-5xl mb-16">
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-0">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="rounded-xl border-2 border-mbx-border bg-white px-6 py-3.5 text-sm font-bold text-mbx-navy shadow-sm transition-all hover:border-[#4486BF] hover:shadow-lg hover:text-[#4486BF] hover:-translate-y-0.5">
                    {step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mx-3 text-[#4486BF]/40 hidden sm:block">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Service Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {cards.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.1 + i * 0.06}>
              <div className="group relative rounded-2xl border border-mbx-border bg-white p-8 transition-all duration-500 hover:shadow-xl hover:border-[#4486BF]/30 hover:-translate-y-1 h-full overflow-hidden text-center">
                {/* Top accent */}
                <div className="absolute top-0 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#4486BF] to-[#5A9AD0] transition-all duration-500 group-hover:w-full" />
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#4486BF]/8 rounded-full blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-mbx-navy to-mbx-navy-light text-white transition-all duration-500 group-hover:from-[#4486BF] group-hover:to-[#3570A0] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#4486BF]/30">
                    <item.icon size={26} />
                  </div>
                  <h3 className="mb-3 text-xl font-extrabold text-mbx-navy group-hover:text-mbx-navy transition-colors">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-mbx-text-muted">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Credentialing ── */
function CredentialingSection() {
  const steps = [
    { num: '01', title: 'Prepare', desc: 'Gather provider documentation and credentials', icon: FileText },
    { num: '02', title: 'Submit', desc: 'File applications with payers and CAQH', icon: Activity },
    { num: '03', title: 'Track', desc: 'Monitor application status and follow up', icon: Eye },
    { num: '04', title: 'Credential', desc: 'Complete payer enrollment and contracting', icon: Shield },
    { num: '05', title: 'Maintain', desc: 'Recredentialing and ongoing compliance', icon: CheckCircle },
  ]

  return (
    <section className="py-28 lg:py-36 bg-mbx-navy relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-mbx-teal/5 blur-[200px]" />

      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contracting & Credentialing"
            title="Streamlined Provider Enrollment"
            subtitle="From initial credentialing to recredentialing, we manage the complete payer enrollment lifecycle."
            light
          />
        </AnimatedSection>

        {/* Horizontal timeline — desktop */}
        <AnimatedSection delay={0.2}>
          <div className="hidden lg:block mx-auto max-w-5xl">
            {/* Connector line */}
            <div className="relative">
              <div className="absolute top-[42px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-mbx-teal/30 to-transparent" />

              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    viewport={{ once: true }}
                    className="group text-center"
                  >
                    {/* Icon circle */}
                    <div className="relative mx-auto mb-6">
                      <div className="mx-auto flex size-[84px] items-center justify-center rounded-full border-2 border-white/10 bg-mbx-navy-light/80 text-mbx-teal transition-all duration-500 group-hover:border-mbx-teal/50 group-hover:bg-mbx-teal group-hover:text-white group-hover:shadow-2xl group-hover:shadow-mbx-teal/30 group-hover:scale-110">
                        <step.icon size={30} />
                      </div>
                      {/* Number badge */}
                      <div className="absolute -top-2 -right-2 flex size-8 items-center justify-center rounded-full bg-mbx-teal text-[11px] font-extrabold text-white shadow-lg shadow-mbx-teal/30">
                        {step.num}
                      </div>
                    </div>

                    {/* Text */}
                    <h4 className="mb-2 text-lg font-extrabold text-white group-hover:text-mbx-teal transition-colors">{step.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Vertical timeline — mobile/tablet */}
        <div className="lg:hidden mx-auto max-w-md mt-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-mbx-teal/30 bg-mbx-navy-light text-mbx-teal transition-all duration-500 hover:bg-mbx-teal hover:text-white hover:shadow-xl hover:shadow-mbx-teal/20 hover:border-mbx-teal">
                    <step.icon size={22} />
                  </div>
                  {i < steps.length - 1 && <div className="mt-2 h-full w-px bg-gradient-to-b from-mbx-teal/20 to-transparent" />}
                </div>
                <div className="pb-10">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs font-extrabold text-mbx-teal tracking-wider">{step.num}</span>
                  </div>
                  <h4 className="mb-1.5 text-xl font-extrabold text-white">{step.title}</h4>
                  <p className="text-sm text-white/40">{step.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── QA & Coding ── */
function QASection() {
  const flow = ['Documentation', 'Coding', 'Claim', 'Payment', 'Revenue']
  const items = [
    { icon: ClipboardCheck, title: 'Medical Coding Accuracy', desc: 'Precise ICD-10 and CPT coding aligned with clinical documentation for maximum reimbursement.' },
    { icon: FileText, title: 'Documentation Review', desc: 'Thorough review of clinical documentation to support coding accuracy and compliance.' },
    { icon: Shield, title: 'Billing QA Checks', desc: 'Multi-step quality checks before claim submission to minimize denials and rejections.' },
    { icon: Activity, title: 'Claims Quality Validation', desc: 'Systematic validation of claims data, codes, and modifiers for accuracy.' },
    { icon: CheckCircle, title: 'Compliance Workflow Review', desc: 'Ensuring all billing workflows meet payer and regulatory compliance standards.' },
    { icon: TrendingUp, title: 'Revenue Integrity Analysis', desc: 'Analyzing revenue patterns to identify gaps and optimize financial performance.' },
  ]

  return (
    <section className="py-28 lg:py-36 bg-mbx-white">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="QA & Medical Coding"
            title="Small Errors Create Large Revenue Consequences"
            subtitle="Quality assurance at every step ensures accuracy, compliance, and revenue integrity."
          />
        </AnimatedSection>

        {/* Flow */}
        <AnimatedSection delay={0.15}>
          <div className="mx-auto max-w-4xl mb-16">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
              {flow.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="rounded-xl bg-mbx-surface border-2 border-mbx-border px-6 py-3.5 text-sm font-bold text-mbx-navy transition-all hover:border-mbx-teal hover:text-mbx-teal">
                    {step}
                  </div>
                  {i < flow.length - 1 && (
                    <div className="mx-2 text-mbx-teal font-bold hidden sm:block">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.06}>
              <div className="group rounded-2xl border border-mbx-border bg-mbx-surface p-8 transition-all duration-500 hover:shadow-xl hover:border-mbx-teal/30 hover:-translate-y-1 h-full">
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-mbx-teal/10 text-mbx-teal transition-all duration-500 group-hover:bg-mbx-teal group-hover:text-white group-hover:shadow-lg group-hover:shadow-mbx-teal/20">
                  <item.icon size={26} />
                </div>
                <h3 className="mb-3 text-xl font-extrabold text-mbx-navy group-hover:text-mbx-teal transition-colors">{item.title}</h3>
                <p className="text-sm leading-relaxed text-mbx-text-muted">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Specialties ── */
function SpecialtiesSection() {
  const specialties = [
    { title: 'Internal Medicine', desc: 'Comprehensive billing solutions designed to streamline patient care services, improve claim accuracy, and maximize reimbursements for internal medicine practices.', icon: Stethoscope },
    { title: 'Cardiology', desc: 'Specialized revenue cycle management for cardiology practices, ensuring accurate coding, faster claims processing, and reduced payment delays.', icon: Activity },
    { title: 'Immunology', desc: 'Efficient billing support for immunology services with optimized workflows, accurate documentation, and improved reimbursement outcomes.', icon: Shield },
    { title: 'Pain Management', desc: 'Specialized billing support for pain management practices with complex multi-procedure coding requirements.', icon: Target },
    { title: 'Behavioral Health', desc: 'Specialized billing for behavioral health organizations, ABA providers, and related healthcare specialties.', icon: Users },
  ]

  return (
    <section className="py-28 lg:py-36 bg-mbx-white overflow-hidden">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Beyond Home Health & Hospice"
            title="Expertise Across Medical Specialties"
            subtitle="Our expertise spans across multiple medical specialties, delivering customized billing and RCM solutions tailored to each practice."
          />
        </AnimatedSection>

        {/* Specialty Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
          {specialties.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="group relative rounded-2xl border border-mbx-border bg-mbx-surface p-6 lg:p-7 text-center transition-all duration-500 hover:shadow-2xl hover:border-mbx-teal/30 hover:-translate-y-2 h-full overflow-hidden cursor-pointer">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-mbx-teal/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-mbx-teal/10 text-mbx-teal transition-all duration-500 group-hover:bg-mbx-teal group-hover:text-white group-hover:shadow-xl group-hover:shadow-mbx-teal/25 group-hover:scale-110">
                    <s.icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2.5 text-base font-extrabold text-mbx-navy group-hover:text-mbx-teal transition-colors leading-tight">{s.title}</h3>

                  {/* Description — shows on hover */}
                  <p className="text-xs leading-relaxed text-mbx-text-muted max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    {s.desc}
                  </p>

                  {/* Arrow — shows on hover */}
                  <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-mbx-teal">
                      Learn More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-mbx-teal hover:text-mbx-teal-dark transition-colors">
              View All Specialties <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ── Enterprise / Large Groups ── */
function EnterpriseSection() {
  return (
    <section className="py-28 lg:py-36 bg-mbx-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <AnimatedSection className="flex-1" direction="right">
            <SectionHeading
              eyebrow="Enterprise Scale"
              title="Built to Scale With Your Organization"
              subtitle="For large medical groups, multi-location practices, and growing healthcare organizations."
              centered={false}
            />
            <div className="grid grid-cols-2 gap-3 mt-8">
              {['Centralized Visibility', 'Standardized Workflows', 'Scalable Billing', 'Enterprise Reporting', 'Process Consistency', 'Multi-Location Support'].map((item) => (
                <div key={item} className="flex items-center gap-2.5 rounded-xl bg-mbx-surface border border-mbx-border px-4 py-3">
                  <CheckCircle size={15} className="shrink-0 text-mbx-teal" />
                  <span className="text-sm font-semibold text-mbx-navy">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <PrimaryButton to="/connect-us" size="lg">Discuss Enterprise Solutions</PrimaryButton>
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex-1" direction="left" delay={0.2}>
            <div className="relative rounded-2xl bg-mbx-navy p-8 shadow-2xl">
              <div className="mb-6 flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-red-400" />
                <div className="size-2.5 rounded-full bg-yellow-400" />
                <div className="size-2.5 rounded-full bg-green-400" />
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Claims Submitted', value: '1,247', color: 'text-mbx-teal' },
                  { label: 'Clean Claims Rate', value: '94.2%', color: 'text-green-400' },
                  { label: 'Avg Days to Payment', value: '28', color: 'text-mbx-teal' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3">
                    <span className="text-sm text-white/50">{item.label}</span>
                    <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
                <div className="rounded-xl bg-white/5 px-5 py-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-white/50">Revenue Performance</span>
                    <span className="text-xs text-mbx-teal font-bold">+12% this quarter</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-mbx-teal to-mbx-teal-light"
                      initial={{ width: 0 }}
                      whileInView={{ width: '78%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
              <p className="mt-5 text-center text-xs text-white/20">Illustrative data — MBX technology-enabled approach</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

/* ── Why MBX / Structural Advantage ── */
function WhyMBXSection() {
  const pillars = [
    { icon: Target, title: 'Specialized Expertise', desc: 'Deep understanding of home health and hospice revenue workflows that generic billing companies miss.' },
    { icon: Users, title: 'Operational Support', desc: 'Extend your internal team\'s capacity with dedicated billing specialists who know your practice.' },
    { icon: BarChart3, title: 'Revenue Visibility', desc: 'Better understanding of billing performance across your organization with clear dashboards.' },
    { icon: Shield, title: 'Quality Focus', desc: 'Emphasis on accurate and consistent revenue cycle workflows at every step of the process.' },
    { icon: TrendingUp, title: 'Scalable Support', desc: 'Designed for growing organizations and multi-location operations that need flexible billing support.' },
    { icon: Zap, title: 'Technology-Enabled', desc: 'Modern workflows and reporting for operational efficiency and real-time revenue insights.' },
  ]

  return (
    <section className="py-28 lg:py-36 bg-mbx-navy relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="The Structural Advantage"
            title="Why Healthcare Organizations Choose MBX"
            subtitle="We don't just manage billing — we build a structured, end-to-end revenue cycle where every step is connected, compliant, and optimized for performance."
            light
          />
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {pillars.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.06}>
              <div className="group rounded-2xl bg-white/[0.04] p-8 border border-white/[0.06] transition-all duration-500 hover:bg-white/[0.08] hover:border-mbx-teal/20 h-full">
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-mbx-teal/10 text-mbx-teal transition-all duration-500 group-hover:bg-mbx-teal group-hover:text-white group-hover:shadow-xl group-hover:shadow-mbx-teal/25">
                  <item.icon size={28} />
                </div>
                <h3 className="mb-3 text-xl font-extrabold text-white group-hover:text-mbx-teal transition-colors">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10">
            {[
              { value: '98.5%', label: 'Billing Accuracy', desc: 'Multi-tier verification process ensures minimal errors.' },
              { value: 'HIPAA & SOC2', label: 'Compliant', desc: 'Data security protocols to protect patient information.' },
              { value: '35%', label: 'A/R Reduction', desc: 'Optimized workflows reduce A/R days within the first 6 months.' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-mbx-teal">{stat.value}</p>
                <p className="text-sm font-bold text-white mt-1">{stat.label}</p>
                <p className="text-xs text-white/40 mt-1">{stat.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ── Testimonials ── */
function TestimonialsSection() {
  const testimonials = [
    { quote: 'MBX Solution has made our entire billing process smooth and hassle-free. Their weekly meetings and consistent communication keep everything aligned and running efficiently.', name: 'Anna Boguslavsky', role: 'Home Health Agency' },
    { quote: 'MBX Solution offers a complete, under-one-roof solution for coding QA, and billing. Their team is always responsive to our queries, and our practice operations have become much smoother.', name: 'Jerry M, Owner', role: 'Home Health Agency' },
    { quote: 'Our experience with MBX Solution has been excellent. Their proactive communication, efficient billing processes, and reliable follow-ups have made a noticeable difference in our operations.', name: 'Good News, CEO', role: 'Pain Management' },
    { quote: 'MBX Solution helped us resolve all our outstanding claims efficiently. Partnering with them was the best decision, and the results have been absolutely worth it.', name: 'Jazzmyn Cook, Owner', role: 'Hospice' },
  ]

  const [active, setActive] = useState(0)

  return (
    <section className="py-28 lg:py-36 bg-mbx-white">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Real feedback from healthcare organizations that trust MBX Solutions with their revenue cycle."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-mbx-border bg-mbx-surface p-8 lg:p-12">
              <div className="absolute top-8 left-8 text-6xl text-mbx-teal/10 font-serif leading-none">"</div>
              <div className="relative z-10">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl text-mbx-navy leading-relaxed mb-8 pl-4"
                >
                  {testimonials[active].quote}
                </motion.p>
                <div className="flex items-center gap-4 pl-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-mbx-teal/10 text-mbx-teal font-bold text-lg">
                    {testimonials[active].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-extrabold text-mbx-navy">{testimonials[active].name}</p>
                    <p className="text-sm text-mbx-text-muted">{testimonials[active].role}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`size-2.5 rounded-full transition-all duration-300 ${
                    active === i ? 'bg-mbx-teal w-8' : 'bg-mbx-border hover:bg-mbx-teal/30'
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ── Free Audit CTA ── */
function CTASection() {
  return (
    <section className="py-28 lg:py-36 bg-mbx-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-mbx-teal/5 blur-[150px]" />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <AnimatedSection>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-5 py-2 text-xs font-bold tracking-[0.15em] uppercase text-mbx-teal">
            Free Financial Audit
          </span>
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Stop Losing Revenue.<br />
            <span className="text-mbx-teal">Get a Free Billing Audit.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/50">
            Let our experts analyze your current RCM performance and identify untapped revenue opportunities.
            No obligation, total transparency.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Free Revenue Leakage Analysis', 'Compliance Risk Assessment', 'Customized ROI Roadmap'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2.5 text-sm text-white/70">
                <CheckCircle size={14} className="text-mbx-teal" />
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton to="/connect-us" size="lg">Schedule Your Free Audit</PrimaryButton>
            <SecondaryButton to="/capabilities" size="lg" light>Explore Capabilities</SecondaryButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ── FAQ Section ── */
function FAQSection() {
  const [open, setOpen] = useState(null)
  const faqs = [
    { q: 'What services do you provide in medical billing?', a: 'We provide end-to-end medical billing services including claim entry, claims scrubbing & submission, AR follow-up, denial management, medical coding (ICD-10), EDI/ERA/EFT setup, credentialing & enrollment, patient collections, value-based care support, and analytics & reporting.' },
    { q: 'How can medical billing services help my practice?', a: 'Our billing services help reduce claim denials, accelerate reimbursements, improve cash flow, ensure coding accuracy, maintain compliance, and free up your clinical team to focus on patient care instead of administrative tasks.' },
    { q: 'Do you handle insurance claim denials?', a: 'Yes. Our denial management team identifies root causes, drafts appeal letters, corrects claims, and resubmits them for faster approval. We also implement prevention strategies to reduce future denials.' },
    { q: 'Do you offer provider credentialing services?', a: 'Absolutely. We manage the complete credentialing lifecycle including provider enrollment, CAQH profile setup, payer enrollment, recredentialing, and contract negotiation to ensure uninterrupted revenue flow.' },
    { q: 'How do you improve claim approval rates?', a: 'We use multi-step claim scrubbing, coding accuracy verification, payer-specific rule checks, and thorough documentation review to ensure clean claims are submitted the first time, dramatically improving approval rates.' },
    { q: 'Can you work with small practices and large healthcare groups?', a: 'Yes. We support everything from single-provider private practices to multi-location health systems. Our scalable workflows adapt to your organization\'s size and complexity.' },
    { q: 'Do you provide billing reports and financial analytics?', a: 'Yes. We provide detailed analytics and reporting including financial dashboards, revenue trend analysis, payer performance reports, KPI tracking, and custom report generation to support data-driven decisions.' },
    { q: 'Is patient information kept secure?', a: 'Absolutely. We design all workflows with HIPAA compliance and data security in mind. Our operational processes are built to support healthcare organizations\' strictest compliance requirements.' },
    { q: 'How long does the credentialing process take?', a: 'Credentialing timelines vary by payer and state, but typically range from 30-90 days. We track every application proactively and follow up regularly to expedite the process.' },
    { q: 'Do you offer a free billing audit?', a: 'Yes! We provide a free audit of your practice for the last 3 months — even if you\'re currently with another billing company. We deliver a detailed report showing where revenue exists and how much we can improve it.' },
  ]

  return (
    <section className="py-28 lg:py-36 bg-mbx-surface">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Get answers to the most common questions about our medical billing services."
          />
        </AnimatedSection>

        <div className="mx-auto max-w-3xl space-y-2">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.03}>
              <div className={`rounded-xl border transition-all duration-300 ${
                open === i ? 'border-mbx-teal/30 bg-mbx-white shadow-md' : 'border-mbx-border bg-mbx-white hover:border-mbx-teal/20'
              }`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                    open === i ? 'bg-mbx-teal text-white' : 'bg-mbx-surface text-mbx-teal'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`flex-1 text-sm font-bold transition-colors ${open === i ? 'text-mbx-teal' : 'text-mbx-navy'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown size={16} className={`shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-mbx-teal' : 'text-mbx-text-muted'}`} />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-17">
                        <p className="text-sm leading-relaxed text-mbx-text-muted">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── HOME PAGE ── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <SectionStatsGrid />
      <IntroductionSection />
      <SectionRCMTimeline />
      <MBXAdvantageSection />
      <SectionSolutionsTabs />
      <ServiceExplorer />
      <SectionSpecialtiesScroll />
      <WorkflowVisual />
      <SectionAuditCTA />
      <VirtualAssistanceSection />
      <SectionEHRLogos />
      <CredentialingSection />
      <QASection />
      <SectionHealthcareSectors />
      <SpecialtiesSection />
      <EnterpriseSection />
      <WhyMBXSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
