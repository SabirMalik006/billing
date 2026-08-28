import { Link } from 'react-router-dom'
import { Stethoscope, Heart, Users, Building2, Shield, FileText, ClipboardCheck, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import { AnimatedSection, StaggerChildren, StaggerItem } from '../components/Animated'
import { SectionHeading, PrimaryButton, CapabilityCard } from '../components/UI'
import ServiceAccordion from '../components/ServiceAccordion'

const primaryServices = [
  { number: 1, title: 'Home Health Billing', description: 'PDGM-focused billing workflows, OASIS-related revenue, LUPA management, claims processing, coding support, documentation quality, revenue optimization, and AR/denial management.', link: '/connect-us', featured: true },
  { number: 2, title: 'Hospice Billing', description: 'NOE/NOTR processes, hospice claim management, revenue code workflows, GIP/respite/routine care, coding support, documentation and QA, AR and denial management.', link: '/connect-us', featured: true },
]

const secondaryServices = [
  { number: 3, title: 'Virtual Assistance', description: 'Patient intake, scheduling support, referral coordination, documentation follow-up, insurance verification, and back-office support.', link: '/connect-us' },
  { number: 4, title: 'Contracting & Credentialing', description: 'Provider credentialing, payer enrollment, CAQH support, recredentialing, contracting, enrollment tracking, and documentation management.', link: '/connect-us' },
  { number: 5, title: 'QA & Medical Coding', description: 'Medical coding support, documentation review, billing QA, claims quality checks, compliance review, and revenue integrity.', link: '/connect-us' },
  { number: 6, title: 'AR & Denial Management', description: 'Aging receivables follow-up, denial identification, appeal management, payer-specific workflows, and revenue recovery.', link: '/connect-us' },
]

const industries = [
  { number: 7, title: 'Private Practice RCM', description: 'Full-cycle revenue management for independent practices across family medicine, cardiology, PT, mental health, and more.', link: '/connect-us' },
  { number: 8, title: 'Large Groups & Health Systems', description: 'Standardized workflows, centralized reporting, and scalable operations for multi-location healthcare organizations.', link: '/connect-us' },
  { number: 9, title: 'Behavioral Health / ABA', description: 'Specialized billing support for behavioral health organizations, ABA providers, and related healthcare specialties.', link: '/connect-us' },
]

export default function Capabilities() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-mbx-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
          <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-mbx-teal/8 blur-[120px]" />
        </div>
        <div className="container mx-auto relative z-10 px-4 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <AnimatedSection>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-mbx-teal">
              Capabilities
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-mbx-white md:text-5xl lg:text-6xl">
              Revenue Cycle Expertise Built Around Healthcare
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              From specialized home health and hospice billing to enterprise-scale operations —
              comprehensive revenue cycle support for every type of healthcare organization.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Primary: Home Health + Hospice */}
      <section className="py-24 lg:py-32 bg-mbx-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Primary Specializations"
              title="Home Health & Hospice"
              subtitle="Deep operational expertise in the billing workflows, documentation requirements, and revenue considerations unique to home-based care."
            />
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-2">
            {primaryServices.map((service) => (
              <AnimatedSection key={service.number} delay={service.number === 1 ? 0 : 0.1}>
                <CapabilityCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-24 lg:py-32 bg-mbx-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
            <AnimatedSection className="lg:w-1/3 lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Services"
                title="Comprehensive RCM Services"
                subtitle="Each service is designed to support specific aspects of the healthcare revenue cycle."
                centered={false}
              />
              <PrimaryButton to="/connect-us">Discuss Your Needs</PrimaryButton>
            </AnimatedSection>

            <AnimatedSection className="lg:w-2/3" delay={0.15}>
              <ServiceAccordion />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Secondary Services */}
      <section className="py-24 lg:py-32 bg-mbx-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Additional Services"
              title="Supporting Every Aspect of Revenue Management"
              subtitle="From virtual assistance to denial management, we provide the operational support healthcare organizations need."
            />
          </AnimatedSection>

          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {secondaryServices.map((service) => (
              <StaggerItem key={service.number}>
                <CapabilityCard {...service} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32 bg-mbx-navy">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Industries"
              title="Built for Every Stage of Healthcare Growth"
              subtitle="Supporting private practices, large groups, behavioral health, and other healthcare organizations."
              light
            />
          </AnimatedSection>

          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {industries.map((service) => (
              <StaggerItem key={service.number}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-mbx-teal/30 hover:bg-white/[0.06]">
                  <span className="mb-3 block text-sm font-bold text-mbx-teal">{String(service.number).padStart(2, '0')}</span>
                  <h3 className="mb-2 text-xl font-bold text-mbx-white">{service.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center gap-1.5 text-sm font-semibold text-mbx-teal hover:text-mbx-teal-light transition-colors">
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-mbx-surface">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-mbx-navy md:text-4xl">
              Let's Build Your Revenue Solution
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-mbx-text-muted">
              Contact us to discuss how MBX capabilities can address your specific challenges.
            </p>
            <PrimaryButton to="/connect-us" size="lg">Start a Conversation</PrimaryButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
