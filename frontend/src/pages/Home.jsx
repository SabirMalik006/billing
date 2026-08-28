import { Link } from 'react-router-dom'
import { ArrowRight, Stethoscope, Heart, Users, Building2, Shield, TrendingUp, Activity, ClipboardCheck, FileText, BarChart3, Clock, Zap, Target, CheckCircle } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import HeroSection from '../components/HeroSection'
import WorkflowVisual from '../components/WorkflowVisual'
import ServiceAccordion from '../components/ServiceAccordion'
import { AnimatedSection, StaggerChildren, StaggerItem } from '../components/Animated'
import { SectionHeading, PrimaryButton, SecondaryButton, CapabilityCard, DarkCard } from '../components/UI'

/* ── Trust Strip ── */
function TrustStrip() {
  const items = ['Home Health', 'Hospice', 'Private Practice', 'Large Groups', 'Behavioral Health', 'Health Systems']
  return (
    <section className="bg-mbx-surface py-16 border-b border-mbx-border">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <p className="mb-8 text-center text-sm font-semibold tracking-widest uppercase text-mbx-text-muted">
            Built around the realities of modern healthcare
          </p>
        </AnimatedSection>
        <StaggerChildren className="flex flex-wrap justify-center gap-3" stagger={0.06}>
          {items.map((item) => (
            <StaggerItem key={item}>
              <span className="rounded-full border border-mbx-border bg-mbx-white px-5 py-2.5 text-sm font-medium text-mbx-navy transition-all hover:border-mbx-teal hover:text-mbx-teal hover:shadow-sm">
                {item}
              </span>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ── Home Health + Hospice Specialization ── */
function SpecializationSection() {
  return (
    <section className="py-24 lg:py-32 bg-mbx-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Core Specialization"
            title="Where Healthcare Expertise Meets Revenue Performance"
            subtitle="Deep operational understanding of the workflows, documentation, and billing complexities unique to home-based care."
          />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Home Health */}
          <AnimatedSection delay={0.1}>
            <div className="group rounded-2xl border border-mbx-border bg-mbx-surface p-8 transition-all duration-500 hover:border-mbx-teal/30 hover:shadow-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-mbx-teal/10 text-mbx-teal transition-colors group-hover:bg-mbx-teal group-hover:text-white">
                  <Stethoscope size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-mbx-navy">Home Health</h3>
                  <p className="text-sm text-mbx-text-muted">PDGM-focused billing & revenue</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {['PDGM Billing Workflows', 'OASIS Revenue Considerations', 'LUPA Management', 'Claims & Coding', 'Documentation Quality', 'Revenue Optimization', 'AR & Denial Management', 'Compliance Support'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg bg-mbx-white px-3 py-2.5 text-sm text-mbx-navy border border-mbx-border/50">
                    <CheckCircle size={14} className="shrink-0 text-mbx-teal" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Hospice */}
          <AnimatedSection delay={0.2}>
            <div className="group rounded-2xl border border-mbx-border bg-mbx-surface p-8 transition-all duration-500 hover:border-mbx-teal/30 hover:shadow-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-mbx-navy/10 text-mbx-navy transition-colors group-hover:bg-mbx-navy group-hover:text-white">
                  <Heart size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-mbx-navy">Hospice</h3>
                  <p className="text-sm text-mbx-text-muted">Specialized hospice billing support</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {['NOE / NOTR Processes', 'Hospice Claim Management', 'Revenue Code Workflows', 'GIP / Respite / Routine', 'Coding & Documentation', 'QA & Compliance', 'AR & Denial Management', 'Revenue Integrity'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg bg-mbx-white px-3 py-2.5 text-sm text-mbx-navy border border-mbx-border/50">
                    <CheckCircle size={14} className="shrink-0 text-mbx-teal" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

/* ── Capabilities ── */
function CapabilitiesSection() {
  const capabilities = [
    { number: 1, title: 'Home Health Billing', description: 'PDGM-focused billing with OASIS, LUPA, and documentation support.', link: '/capabilities#home-health', featured: true },
    { number: 2, title: 'Hospice Billing', description: 'NOE/NOTR workflows, revenue codes, and hospice-specific claim management.', link: '/capabilities#hospice', featured: true },
    { number: 3, title: 'Virtual Assistance', description: 'Patient intake, scheduling, referral coordination, and admin support.', link: '/capabilities#virtual-assistance' },
    { number: 4, title: 'Contracting & Credentialing', description: 'Provider enrollment, CAQH, payer contracting, and recredentialing.', link: '/capabilities#credentialing' },
    { number: 5, title: 'QA & Medical Coding', description: 'Coding accuracy, documentation review, and claims quality checks.', link: '/capabilities#qa-coding' },
    { number: 6, title: 'AR & Denial Management', description: 'Aging receivables follow-up, appeals, and revenue recovery.', link: '/capabilities#ar-denials' },
    { number: 7, title: 'Private Practice RCM', description: 'Full-cycle billing for family medicine, cardiology, PT, and more.', link: '/capabilities#private-practice' },
    { number: 8, title: 'Large Groups & Health Systems', description: 'Standardized workflows and centralized reporting for scale.', link: '/capabilities#large-groups' },
    { number: 9, title: 'Behavioral Health / ABA', description: 'Specialized billing for behavioral health and ABA organizations.', link: '/capabilities#behavioral-health' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-mbx-surface">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Capabilities"
            title="Comprehensive Revenue Cycle Support"
            subtitle="From specialized home health billing to enterprise-scale operations, we support the full spectrum of healthcare revenue needs."
          />
        </AnimatedSection>

        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {capabilities.map((cap) => (
            <StaggerItem key={cap.number}>
              <CapabilityCard {...cap} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ── Technology / MBX Clarity ── */
function TechnologySection() {
  return (
    <section className="py-24 lg:py-32 bg-mbx-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <AnimatedSection className="flex-1" direction="right">
            <span className="mb-4 inline-block text-sm font-semibold tracking-widest uppercase text-mbx-teal">
              Technology-Enabled RCM
            </span>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-mbx-navy md:text-4xl">
              Clearer Visibility into the Revenue Cycle
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-mbx-text-muted">
              MBX combines deep healthcare expertise with modern technology-enabled workflows
              designed to improve visibility, consistency, and operational efficiency across
              your revenue cycle.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: BarChart3, label: 'Revenue Analytics' },
                { icon: Activity, label: 'Workflow Automation' },
                { icon: FileText, label: 'Claims Tracking' },
                { icon: TrendingUp, label: 'Denial Insights' },
                { icon: ClipboardCheck, label: 'Documentation Workflows' },
                { icon: Shield, label: 'Compliance Monitoring' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 rounded-xl bg-mbx-surface px-4 py-3 border border-mbx-border">
                  <item.icon size={16} className="text-mbx-teal" />
                  <span className="text-sm font-medium text-mbx-navy">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <PrimaryButton to="/technology-and-ai">Explore Our Technology</PrimaryButton>
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex-1" direction="left" delay={0.2}>
            {/* Abstract dashboard mockup */}
            <div className="relative rounded-2xl bg-mbx-navy p-8 shadow-2xl">
              <div className="mb-6 flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-400" />
                <div className="size-3 rounded-full bg-yellow-400" />
                <div className="size-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3">
                  <span className="text-sm text-gray-300">Claims Submitted</span>
                  <span className="text-sm font-bold text-mbx-teal">1,247</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3">
                  <span className="text-sm text-gray-300">Clean Claims Rate</span>
                  <span className="text-sm font-bold text-green-400">94.2%</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3">
                  <span className="text-sm text-gray-300">Avg Days to Payment</span>
                  <span className="text-sm font-bold text-mbx-teal">28</span>
                </div>
                <div className="rounded-xl bg-white/5 px-5 py-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-300">Revenue Performance</span>
                    <span className="text-xs text-mbx-teal">+12% this quarter</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-mbx-teal to-mbx-teal-light" />
                  </div>
                </div>
              </div>
              <p className="mt-5 text-center text-xs text-gray-500">Conceptual dashboard — MBX technology-enabled approach</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

/* ── Virtual Assistance ── */
function VirtualAssistanceSection() {
  const steps = ['Referral', 'Intake', 'Scheduling', 'Documentation', 'Billing', 'Follow-up']
  return (
    <section className="py-24 lg:py-32 bg-mbx-surface">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Virtual Assistance"
            title="Extending Your Team's Capacity"
            subtitle="Operational support that allows your clinical team to focus on patient care while we handle the administrative workflows."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-0">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="rounded-xl border border-mbx-border bg-mbx-white px-5 py-3 text-sm font-semibold text-mbx-navy shadow-sm transition-all hover:border-mbx-teal hover:shadow-md">
                    {step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mx-2 text-mbx-teal/40 hidden sm:block">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Clock, title: 'Scheduling Support', desc: 'Appointment coordination and calendar management' },
                { icon: FileText, title: 'Documentation Follow-up', desc: 'Incomplete chart and documentation tracking' },
                { icon: Shield, title: 'Insurance Verification', desc: 'Eligibility checks and prior authorization' },
                { icon: Users, title: 'Referral Coordination', desc: 'Intake processing and referral management' },
                { icon: Zap, title: 'Back-Office Support', desc: 'Administrative tasks and data entry' },
                { icon: Target, title: 'Communication Workflows', desc: 'Payer and provider communication tracking' },
              ].map((item) => (
                <DarkCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ── Credentialing Process ── */
function CredentialingSection() {
  const steps = [
    { num: '01', title: 'Prepare', desc: 'Gather provider documentation and credentials' },
    { num: '02', title: 'Submit', desc: 'File applications with payers and CAQH' },
    { num: '03', title: 'Track', desc: 'Monitor application status and follow up' },
    { num: '04', title: 'Credential', desc: 'Complete payer enrollment and contracting' },
    { num: '05', title: 'Maintain', desc: 'Recredentialing and ongoing compliance' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-mbx-navy">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contracting & Credentialing"
            title="Streamlined Provider Enrollment"
            subtitle="From initial credentialing to recredentialing, we manage the complete payer enrollment lifecycle."
            light
          />
        </AnimatedSection>

        <div className="mx-auto max-w-3xl">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mbx-teal text-sm font-bold text-mbx-white">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && <div className="mt-2 h-full w-px bg-white/10" />}
                </div>
                <div className={`pb-10 ${i === steps.length - 1 ? '' : ''}`}>
                  <h4 className="mb-1 text-lg font-bold text-mbx-white">{step.title}</h4>
                  <p className="text-sm text-gray-400">{step.desc}</p>
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
  return (
    <section className="py-24 lg:py-32 bg-mbx-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="QA & Medical Coding"
            title="Small Errors Create Large Revenue Consequences"
            subtitle="Quality assurance at every step ensures accuracy, compliance, and revenue integrity."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
              {flow.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="rounded-xl bg-mbx-surface border border-mbx-border px-5 py-3 text-sm font-semibold text-mbx-navy">
                    {step}
                  </div>
                  {i < flow.length - 1 && (
                    <div className="mx-2 text-mbx-teal font-bold hidden sm:block">→</div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Medical coding accuracy',
                'Documentation review',
                'Billing QA checks',
                'Claims quality validation',
                'Compliance workflow review',
                'Revenue integrity analysis',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-mbx-surface border border-mbx-border px-5 py-4">
                  <CheckCircle size={16} className="shrink-0 text-mbx-teal" />
                  <span className="text-sm font-medium text-mbx-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ── Private Practice + Large Groups ── */
function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-mbx-surface">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Built for Every Stage of Healthcare Growth"
            subtitle="From single-provider practices to multi-location health systems."
          />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-mbx-border bg-mbx-white p-8 h-full">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-mbx-teal/10 text-mbx-teal">
                <Building2 size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-mbx-navy">Private Practice</h3>
              <p className="mb-5 text-sm text-mbx-text-muted">
                RCM support for independent practices across multiple specialties.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Family Medicine', 'Internal Medicine', 'Cardiology', 'Physical Therapy', 'Mental Health', 'Pain Management'].map((s) => (
                  <span key={s} className="rounded-full bg-mbx-surface border border-mbx-border px-3 py-1.5 text-xs font-medium text-mbx-navy">{s}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl border border-mbx-border bg-mbx-white p-8 h-full">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-mbx-navy/10 text-mbx-navy">
                <Users size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-mbx-navy">Large Groups & Health Systems</h3>
              <p className="mb-5 text-sm text-mbx-text-muted">
                Scale without losing visibility. Standardized workflows for enterprise operations.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Standardized Workflows', 'Centralized Reporting', 'Multi-Location Support', 'Process Consistency'].map((s) => (
                  <span key={s} className="rounded-full bg-mbx-surface border border-mbx-border px-3 py-1.5 text-xs font-medium text-mbx-navy">{s}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

/* ── Healthcare Team ── */
function TeamSection() {
  const roles = ['Nurses', 'Physical Therapists', 'Occupational Therapists', 'Speech-Language Pathologists', 'Home Health Aides', 'Social Workers', 'Physicians', 'Administrators']
  return (
    <section className="py-24 lg:py-32 bg-mbx-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <AnimatedSection className="flex-1">
            <SectionHeading
              eyebrow="Our Purpose"
              title="Supporting the People Behind Patient Care"
              subtitle="Healthcare teams focus on patients. MBX handles the revenue and administrative side so they can focus on what matters most."
              centered={false}
            />
            <PrimaryButton to="/connect-us">Learn How We Support Your Team</PrimaryButton>
          </AnimatedSection>

          <AnimatedSection className="flex-1" delay={0.2} direction="left">
            <div className="grid grid-cols-2 gap-3">
              {roles.map((role) => (
                <div key={role} className="rounded-xl border border-mbx-border bg-mbx-surface px-4 py-3 text-center text-sm font-medium text-mbx-navy transition-all hover:border-mbx-teal hover:shadow-sm">
                  {role}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

/* ── Why MBX ── */
function WhyMBXSection() {
  const pillars = [
    { icon: Target, title: 'Specialized Expertise', desc: 'Deep understanding of home health and hospice revenue workflows.' },
    { icon: Users, title: 'Operational Support', desc: 'Extend your internal team\'s capacity with dedicated specialists.' },
    { icon: BarChart3, title: 'Revenue Visibility', desc: 'Better understanding of billing performance across your organization.' },
    { icon: Shield, title: 'Quality Focus', desc: 'Emphasis on accurate and consistent revenue cycle workflows.' },
    { icon: TrendingUp, title: 'Scalable Support', desc: 'Designed for growing organizations and multi-location operations.' },
    { icon: Zap, title: 'Technology-Enabled', desc: 'Modern workflows and reporting for operational efficiency.' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-mbx-navy">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why MBX"
            title="Why Healthcare Organizations Choose MBX"
            subtitle="A partner built around the realities of modern healthcare revenue management."
            light
          />
        </AnimatedSection>

        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <DarkCard {...pillar} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

/* ── CTA ── */
function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-mbx-surface">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <span className="mb-4 inline-block text-sm font-semibold tracking-widest uppercase text-mbx-teal">
            Get Started
          </span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-mbx-navy md:text-4xl lg:text-5xl">
            Let's Build a Stronger Revenue Cycle
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-mbx-text-muted">
            Whether you're a home health agency, hospice, private practice, or health system —
            MBX is ready to support your revenue cycle.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton to="/connect-us" size="lg">Start the Conversation</PrimaryButton>
            <SecondaryButton to="/capabilities" size="lg">Explore Capabilities</SecondaryButton>
          </div>
        </AnimatedSection>
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
      <SpecializationSection />
      <CapabilitiesSection />
      <TechnologySection />
      <WorkflowVisual />
      <VirtualAssistanceSection />
      <CredentialingSection />
      <QASection />
      <IndustriesSection />
      <TeamSection />
      <WhyMBXSection />
      <CTASection />
    </>
  )
}
