import { Link } from 'react-router-dom'
import { BarChart3, Activity, FileText, Shield, Zap, TrendingUp, ArrowRight, CheckCircle, Database, Eye } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedSection, StaggerChildren, StaggerItem } from '../components/Animated'
import { SectionHeading, PrimaryButton, DarkCard } from '../components/UI'

const capabilities = [
  {
    icon: BarChart3,
    title: 'Revenue Analytics',
    id: 'analytics',
    desc: 'Real-time visibility into billing performance, collections, and revenue trends across your organization.',
    items: ['Performance dashboards', 'Collection trend analysis', 'Payer mix reporting', 'Revenue forecasting'],
  },
  {
    icon: Activity,
    title: 'Workflow Automation',
    id: 'automation',
    desc: 'Technology-enabled workflows designed to improve consistency, reduce manual tasks, and accelerate turnaround.',
    items: ['Claims processing automation', 'Follow-up prioritization', 'Task routing', 'Status tracking'],
  },
  {
    icon: Eye,
    title: 'Claims Intelligence',
    id: 'claims',
    desc: 'Proactive claims tracking and denial pattern identification to prevent revenue loss before it happens.',
    items: ['Claims status monitoring', 'Denial pattern analysis', 'Appeal management', 'Clean claims optimization'],
  },
  {
    icon: FileText,
    title: 'Documentation Workflows',
    id: 'documentation',
    desc: 'Structured documentation review processes that support coding accuracy and compliance.',
    items: ['Documentation quality checks', 'Completeness verification', 'Compliance review', 'Coder-clinician feedback loops'],
  },
  {
    icon: Shield,
    title: 'Compliance Monitoring',
    id: 'compliance',
    desc: 'Operational workflows designed with healthcare data privacy and security considerations in mind.',
    items: ['Regulatory awareness', 'Audit preparation support', 'Policy documentation', 'Staff training resources'],
  },
  {
    icon: Database,
    title: 'EMR Integration',
    id: 'integration',
    desc: 'Technology-enabled approaches that work alongside your existing electronic health record and practice management systems.',
    items: ['EHR workflow alignment', 'Data consistency checks', 'System interoperability', 'Export and reporting'],
  },
]

export default function Technology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-mbx-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
          <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-mbx-teal/8 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="container mx-auto relative z-10 px-4 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <AnimatedSection>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-mbx-teal">
              Technology & AI
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-mbx-white md:text-5xl lg:text-6xl">
              Technology-Enabled Revenue Intelligence
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Modern workflows designed to improve visibility, consistency and operational
              efficiency across the healthcare revenue cycle.
            </p>
            <div className="mt-8">
              <PrimaryButton to="/connect-us">Request a Consultation</PrimaryButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32 bg-mbx-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Approach"
              title="Technology-Enabled RCM"
              subtitle="MBX combines deep healthcare expertise with modern technology to deliver operational visibility and efficiency."
            />
          </AnimatedSection>

          <div className="space-y-6">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={cap.id} id={cap.id} delay={index * 0.05}>
                <div className={`flex flex-col gap-8 rounded-2xl border border-mbx-border p-8 transition-all duration-500 hover:shadow-lg lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-mbx-teal/10 text-mbx-teal">
                      <cap.icon size={24} />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-mbx-navy">{cap.title}</h3>
                    <p className="mb-6 text-base leading-relaxed text-mbx-text-muted">{cap.desc}</p>
                    <ul className="space-y-2.5">
                      {cap.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-mbx-navy">
                          <CheckCircle size={16} className="shrink-0 text-mbx-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="rounded-2xl bg-mbx-surface border border-mbx-border p-6">
                      <div className="space-y-3">
                        {cap.items.map((item, i) => (
                          <div key={item} className="flex items-center gap-3 rounded-xl bg-mbx-white border border-mbx-border/50 px-4 py-3">
                            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-mbx-teal/10 text-xs font-bold text-mbx-teal">
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <span className="text-sm font-medium text-mbx-navy">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MBX Clarity */}
      <section ref={ref} className="py-24 lg:py-32 bg-mbx-navy">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              eyebrow="MBX Clarity"
              title="Clearer Visibility into the Revenue Cycle"
              subtitle="MBX's technology-enabled approach to revenue visibility — designed to give healthcare organizations the insights they need."
              light
            />
          </AnimatedSection>

          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl bg-mbx-navy-light/50 border border-white/10 p-8 backdrop-blur-sm"
            >
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Activity, title: 'Real-Time Data', desc: 'Current visibility into claims and payments' },
                  { icon: BarChart3, title: 'Revenue Reporting', desc: 'Performance dashboards and trend analysis' },
                  { icon: Eye, title: 'Workflow Tracking', desc: 'Monitor task progress and bottlenecks' },
                  { icon: Shield, title: 'Payer Intelligence', desc: 'Understand payer behavior and patterns' },
                  { icon: TrendingUp, title: 'Operational Insights', desc: 'Identify opportunities for improvement' },
                  { icon: Zap, title: 'Actionable Alerts', desc: 'Proactive notifications for critical items' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl bg-white/5 p-5 border border-white/5">
                    <item.icon size={20} className="mb-3 text-mbx-teal" />
                    <h4 className="mb-1 text-base font-bold text-mbx-white">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-gray-500">
                MBX Clarity represents our technology-enabled approach to revenue visibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 lg:py-32 bg-mbx-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Benefits"
              title="Why Technology Matters in RCM"
              subtitle="Purpose-built workflows for the unique needs of healthcare revenue management."
            />
          </AnimatedSection>

          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {[
              { icon: Zap, title: 'Faster Turnaround', desc: 'Streamlined workflows reduce processing time.' },
              { icon: Shield, title: 'Built-In Compliance', desc: 'Every workflow designed with compliance in mind.' },
              { icon: TrendingUp, title: 'Better Visibility', desc: 'Real-time insights into billing performance.' },
              { icon: Database, title: 'System Integration', desc: 'Works alongside your existing systems.' },
            ].map((adv) => (
              <StaggerItem key={adv.title}>
                <DarkCard {...adv} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-mbx-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-mbx-navy md:text-4xl">
              Ready to See Our Approach in Action?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-mbx-text-muted">
              Schedule a consultation to discuss how MBX's technology-enabled workflows can support your organization.
            </p>
            <PrimaryButton to="/connect-us" size="lg">Request a Consultation</PrimaryButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
