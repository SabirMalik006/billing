import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, ChevronDown, ClipboardCheck, FileText, Activity, Shield, TrendingUp, Users, Zap, Target, BarChart3, Eye } from 'lucide-react'
import { AnimatedSection } from '../components/Animated'
import { SectionHeading, PrimaryButton } from '../components/UI'

const services = [
  {
    id: 'claim-entry',
    icon: ClipboardCheck,
    title: 'Claim Entry',
    tagline: 'Error-free patient demo & claims entry',
    description: 'Our billing team is highly experienced and has great knowledge of billing guidelines which enables us to provide error-free patient demo and claims entry in various billing platforms without any delay.',
    details: ['Patient demographic verification', 'Insurance eligibility checks', 'Multi-platform claim entry', 'Error-free data processing', 'Fast turnaround time', 'Quality assurance checks'],
  },
  {
    id: 'claims-scrubbing',
    icon: Eye,
    title: 'Claims Scrubbing & Submission',
    tagline: 'Thoroughly reviewed, accurately coded claims',
    description: 'We ensure every claim is thoroughly reviewed, accurately coded, and submitted on time to minimize denials, reduce rejections, and accelerate reimbursements.',
    details: ['Pre-submission claim scrubbing', 'Coding accuracy verification', ' payer-specific rule checks', 'Electronic claim submission', 'Batch processing optimization', 'Submission tracking'],
  },
  {
    id: 'ar-followup',
    icon: TrendingUp,
    title: 'AR Follow-up',
    tagline: 'Active tracking & collections',
    description: 'Our dedicated team actively tracks unpaid claims, resolves denials, and follows up with payers to improve collections and maximize your revenue cycle performance.',
    details: ['Aging AR analysis', 'Payer follow-up calls', 'Account reconciliation', 'Payment trend tracking', 'Escalation management', 'Collection optimization'],
  },
  {
    id: 'denial-management',
    icon: Shield,
    title: 'Denial Management',
    tagline: 'Resolve denials, recover revenue',
    description: 'We identify, analyze, and resolve denied claims efficiently to reduce revenue loss, improve claim approval rates, and ensure faster payment recovery for your practice.',
    details: ['Denial root cause analysis', 'Appeal letter drafting', 'Corrected claim resubmission', 'Payer communication', 'Denial trend reporting', 'Prevention strategies'],
  },
  {
    id: 'medical-coding',
    icon: FileText,
    title: 'Medical Coding',
    tagline: 'Precision ICD-10 coding',
    description: 'We handle claim rejections promptly by identifying errors, correcting issues, and resubmitting clean claims to ensure faster approvals and consistent revenue flow.',
    details: ['ICD-10-CM coding', 'CPT/HCPCS coding', 'Code validation & audit', 'Documentation alignment', 'Modifier application', 'Coding compliance review'],
  },
  {
    id: 'edi-eft',
    icon: Activity,
    title: 'EDI, ERA & EFT Setup',
    tagline: 'Seamless electronic workflows',
    description: 'We streamline EDI, ERA, and EFT enrollments to ensure faster claim processing, secure electronic payments, and efficient remittance management for your practice.',
    details: ['EDI enrollment setup', 'ERA configuration', 'EFT bank setup', 'Clearinghouse integration', 'Payer connectivity', 'Testing & validation'],
  },
  {
    id: 'credentialing',
    icon: Users,
    title: 'Credentialing & Enrollment',
    tagline: 'Timely approvals, uninterrupted revenue',
    description: 'We manage provider credentialing and payer enrollments efficiently to ensure timely approvals, compliance, and uninterrupted revenue flow for your healthcare practice.',
    details: ['Provider credentialing', 'Payer enrollment', 'CAQH profile setup', 'Recredentialing management', 'Contract negotiation', 'Enrollment tracking'],
  },
  {
    id: 'claim-rejection',
    icon: Zap,
    title: 'Claim Rejection & Resubmission',
    tagline: 'Fix errors, resubmit clean claims',
    description: 'We handle claim rejections promptly by identifying errors, correcting issues, and resubmitting clean claims to ensure faster approvals and consistent revenue flow.',
    details: ['Rejection analysis', 'Error correction', 'Clean claim resubmission', 'Payer-specific fixes', 'Turnaround tracking', 'Revenue recovery'],
  },
  {
    id: 'patient-collections',
    icon: BarChart3,
    title: 'Patient Collections',
    tagline: 'Simplified patient payments',
    description: 'We simplify patient collections by improving payment processes, reducing outstanding balances, and ensuring timely payments while maintaining a positive patient experience.',
    details: ['Patient statement processing', 'Payment plan setup', 'Balance follow-up', 'Collection strategy', 'Patient communication', 'Payment reconciliation'],
  },
  {
    id: 'value-based-care',
    icon: Target,
    title: 'Value-Based Care',
    tagline: 'Quality reporting & optimization',
    description: 'We support value-based care programs by improving quality reporting, performance tracking, and reimbursement optimization to help providers deliver better patient outcomes and financial success.',
    details: ['Quality measure reporting', 'Performance benchmarking', 'HEDIS/CMS support', 'Care coordination', 'Outcome tracking', 'Reimbursement optimization'],
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics & Reporting',
    tagline: 'Data-driven decisions',
    description: 'We provide detailed analytics and reporting to track financial performance, identify revenue gaps, and support smarter decisions for stronger practice growth and profitability.',
    details: ['Financial dashboards', 'Revenue trend analysis', 'Payer performance reports', 'KPI tracking', 'Custom report generation', 'Growth forecasting'],
  },
  {
    id: 'free-audit',
    icon: Eye,
    title: 'Free Billing Audit',
    tagline: 'Discover hidden revenue',
    description: 'We provide a free audit on your practice of the last 3 months — even if you\'re with another billing company — and provide you a report on where revenue exists and how much we can improve it.',
    details: ['3-month billing review', 'Revenue leakage analysis', 'Denial pattern assessment', 'Compliance risk check', 'Improvement roadmap', 'ROI projection'],
  },
]

const specialties = [
  { title: 'Internal Medicine', desc: 'Comprehensive billing solutions designed to streamline patient care services, improve claim accuracy, and maximize reimbursements for internal medicine practices.' },
  { title: 'Cardiology', desc: 'Specialized revenue cycle management for cardiology practices, ensuring accurate coding, faster claims processing, and reduced payment delays.' },
  { title: 'Immunology', desc: 'Efficient billing support for immunology services with optimized workflows, accurate documentation, and improved reimbursement outcomes.' },
  { title: 'Pain Management', desc: 'Specialized billing for pain management practices with complex multi-procedure coding requirements.' },
  { title: 'Behavioral Health', desc: 'Specialized billing for behavioral health organizations, ABA providers, and related healthcare specialties.' },
  { title: 'Private Practice', desc: 'Full-cycle revenue management for independent practices across family medicine, cardiology, PT, and more.' },
]

export default function Services() {
  const [expandedService, setExpandedService] = useState(null)
  const [activeSpecialty, setActiveSpecialty] = useState(0)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-mbx-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
          <div className="hero-grid absolute inset-0" />
          <div className="absolute top-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-mbx-teal/5 blur-[150px]" />
          <div className="absolute bottom-1/4 -left-32 h-[400px] w-[400px] rounded-full bg-mbx-teal/4 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
            <span className="text-[18vw] font-extrabold text-white/[0.02] tracking-tighter">SERVICES</span>
          </div>
        </div>
        <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <AnimatedSection>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-mbx-teal">
              Our Services
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              Smart Billing & Coding Solutions<br />
              <span className="text-mbx-teal">for Home Health and Hospice</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              Delivering end-to-end medical billing, credentialing, and revenue cycle management
              solutions that maximize reimbursements, reduce denials, and support the financial
              growth of your healthcare practice.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton to="/connect-us" size="lg">Get Free Audit</PrimaryButton>
              <Link
                to="/capabilities"
                className="group inline-flex items-center gap-2.5 rounded-xl border-2 border-white/15 px-8 py-4 text-base font-bold text-white/80 transition-all duration-300 hover:border-mbx-teal hover:bg-mbx-teal/10 hover:text-white"
              >
                Explore Capabilities
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-28 lg:py-36 bg-mbx-surface">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading
              eyebrow="What We Offer"
              title="Comprehensive Medical Billing Services"
              subtitle="From claim entry to payment posting, our experienced team handles every aspect of the revenue cycle with precision and expertise."
            />
          </AnimatedSection>

          {/* Services Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <div
                  id={service.id}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className={`group relative rounded-2xl border p-7 lg:p-8 cursor-pointer transition-all duration-500 h-full overflow-hidden scroll-mt-28 text-center ${
                    expandedService === index
                      ? 'border-mbx-teal/40 bg-mbx-navy shadow-2xl shadow-mbx-navy/20'
                      : 'border-mbx-border bg-mbx-white hover:border-mbx-teal/30 hover:shadow-xl hover:-translate-y-1.5'
                  }`}
                >
                  {/* Hover glow */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    expandedService === index
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-mbx-teal/8 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-mbx-teal/5 rounded-full blur-[60px]" />
                  </div>

                  <div className="relative z-10">
                    {/* Icon — centered */}
                    <div className={`mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl transition-all duration-500 ${
                      expandedService === index
                        ? 'bg-mbx-teal text-white shadow-xl shadow-mbx-teal/30'
                        : 'bg-mbx-teal/10 text-mbx-teal group-hover:bg-mbx-teal group-hover:text-white group-hover:shadow-xl group-hover:shadow-mbx-teal/25 group-hover:scale-105'
                    }`}>
                      <service.icon size={28} />
                    </div>

                    {/* Number */}
                    <span className={`mb-3 block text-xs font-extrabold tracking-wider transition-colors ${
                      expandedService === index ? 'text-mbx-teal' : 'text-mbx-border group-hover:text-mbx-teal/50'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Title */}
                    <h3 className={`mb-2 text-xl font-extrabold transition-colors leading-tight ${
                      expandedService === index ? 'text-white' : 'text-mbx-navy group-hover:text-mbx-teal'
                    }`}>
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className={`text-sm font-medium transition-colors ${
                      expandedService === index ? 'text-mbx-teal-light' : 'text-mbx-teal/70'
                    }`}>
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className={`mt-4 text-sm leading-relaxed transition-all duration-500 ${
                      expandedService === index ? 'text-white/50' : 'text-mbx-text-muted'
                    }`}>
                      {service.description}
                    </p>

                    {/* Details grid — only when expanded */}
                    <AnimatePresence>
                      {expandedService === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 pt-5 border-t border-white/10">
                            <div className="grid grid-cols-2 gap-2">
                              {service.details.map((detail) => (
                                <div key={detail} className="flex items-center justify-center gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-xs font-semibold text-mbx-teal-light border border-white/5">
                                  <CheckCircle size={12} className="shrink-0" />
                                  {detail}
                                </div>
                              ))}
                            </div>
                            <div className="mt-5">
                              <Link
                                to="/connect-us"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 rounded-xl bg-[#4486BF] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#3a73a8] hover:shadow-lg hover:shadow-[#4486BF]/20"
                              >
                                Get Started <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand indicator */}
                    <div className={`mt-4 flex items-center justify-center gap-2 text-xs font-bold transition-colors ${
                      expandedService === index ? 'text-mbx-teal' : 'text-mbx-text-muted group-hover:text-mbx-teal'
                    }`}>
                      <span>{expandedService === index ? 'Show less' : 'View details'}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${
                        expandedService === index ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-28 lg:py-36 bg-mbx-surface">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Specialties"
              title="Explore Our Expertise Across Each Specialty"
              subtitle="Our expertise spans across multiple medical specialties, delivering customized billing, credentialing, and revenue cycle management solutions tailored to each practice."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className="lg:w-2/5 space-y-2">
                  {specialties.map((s, i) => (
                    <button
                      key={s.title}
                      onClick={() => setActiveSpecialty(i)}
                      className={`w-full text-left rounded-xl px-5 py-4 text-sm font-bold transition-all duration-300 ${
                        activeSpecialty === i
                          ? 'bg-mbx-navy text-white shadow-lg'
                          : 'bg-mbx-white text-mbx-text-muted border border-mbx-border hover:border-mbx-teal/30 hover:text-mbx-navy'
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
                <div className="lg:w-3/5">
                  <div className="rounded-2xl border border-mbx-border bg-mbx-white p-8 lg:p-10 min-h-[200px]">
                    <h3 className="text-2xl font-extrabold text-mbx-navy mb-3">{specialties[activeSpecialty].title}</h3>
                    <p className="text-mbx-text-muted leading-relaxed mb-6">{specialties[activeSpecialty].desc}</p>
                    <Link to="/connect-us" className="inline-flex items-center gap-2 text-sm font-bold text-mbx-teal hover:text-mbx-teal-dark transition-colors">
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Billing Process */}
      <section className="py-28 lg:py-36 bg-mbx-navy">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Billing Process"
              title="Streamlined Medical Billing for Maximum Revenue"
              subtitle="Our streamlined medical billing process ensures accuracy, faster reimbursements, and complete revenue cycle management."
              light
            />
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mx-auto max-w-5xl">
            {[
              { number: '01', title: 'Credentialing', desc: 'Provider enrollment & payer setup' },
              { number: '02', title: 'Patient Intake', desc: 'Registration & documentation' },
              { number: '03', title: 'Coding', desc: 'Medical coding & review' },
              { number: '04', title: 'Claim Submission', desc: 'Electronic claim filing' },
              { number: '05', title: 'Payment Posting', desc: 'ERA/EOB processing & AR' },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 text-center transition-all duration-500 hover:border-mbx-teal/30 hover:bg-mbx-teal/5">
                  <span className="mb-3 block text-3xl font-extrabold text-mbx-teal/30 group-hover:text-mbx-teal transition-colors">
                    {step.number}
                  </span>
                  <h3 className="mb-1 text-sm font-extrabold text-white">{step.title}</h3>
                  <p className="text-xs text-white/40">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-sm text-white/40 max-w-3xl mx-auto">
                From credentialing and contracting to claims submission, collections, and payment posting — we help
                healthcare providers maximize revenue while reducing administrative burden.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="py-28 lg:py-36 bg-mbx-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-mbx-teal/5 blur-[150px]" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-5 py-2 text-xs font-bold tracking-[0.15em] uppercase text-mbx-teal">
              Free Financial Audit
            </span>
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-mbx-navy leading-tight">
              Discover What's Leaving<br />
              <span className="text-mbx-teal">Your Revenue Behind.</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-mbx-text-muted">
              We provide a free audit of your practice for the last 3 months — even if you're with another
              billing company — and show you exactly where revenue exists and how much we can improve.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Free Revenue Leakage Analysis', 'Compliance Risk Assessment', 'Customized ROI Roadmap'].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-full bg-mbx-surface border border-mbx-border px-5 py-2.5 text-sm font-medium text-mbx-navy">
                  <CheckCircle size={14} className="text-mbx-teal" />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton to="/connect-us" size="lg">Schedule Your Free Audit</PrimaryButton>
              <Link
                to="/capabilities"
                className="group inline-flex items-center gap-2.5 rounded-xl border-2 border-mbx-navy/20 px-8 py-4 text-base font-bold text-mbx-navy transition-all duration-300 hover:bg-mbx-navy hover:text-white hover:border-mbx-navy"
              >
                Explore Capabilities
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
