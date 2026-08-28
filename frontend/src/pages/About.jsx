import { Target, Shield, Users, Heart, ArrowRight, CheckCircle } from 'lucide-react'
import { AnimatedSection, StaggerChildren, StaggerItem } from '../components/Animated'
import { SectionHeading, PrimaryButton, DarkCard } from '../components/UI'

const values = [
  { icon: Heart, title: 'Patient-Centered', desc: 'Every workflow starts with better patient outcomes in mind.' },
  { icon: Target, title: 'Results-Driven', desc: 'We measure success by the tangible improvements we deliver.' },
  { icon: Shield, title: 'Compliance-First', desc: 'Regulatory awareness is embedded in everything we do.' },
  { icon: Users, title: 'Client Partnership', desc: 'We work alongside you as an extension of your team.' },
]

const approach = [
  { num: '01', title: 'Understand', desc: 'We learn your organization, workflows, and revenue challenges.' },
  { num: '02', title: 'Design', desc: 'We build a tailored support plan aligned with your goals.' },
  { num: '03', title: 'Implement', desc: 'We integrate with your team and technology systems.' },
  { num: '04', title: 'Optimize', desc: 'We continuously monitor and refine for better performance.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-mbx-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
          <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-mbx-teal/8 blur-[120px]" />
        </div>
        <div className="container mx-auto relative z-10 px-4 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <AnimatedSection>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-mbx-teal">
              About MBX
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-mbx-white md:text-5xl lg:text-6xl">
              Healthcare Expertise.<br />
              Revenue Intelligence.<br />
              <span className="text-mbx-teal">Human Support.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              MBX Solutions is a healthcare revenue cycle partner with deep expertise in
              Home Health and Hospice, supporting organizations that want greater clarity,
              stronger workflows and more time to focus on care.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-24 lg:py-32 bg-mbx-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <AnimatedSection className="flex-1">
              <SectionHeading
                eyebrow="Who We Are"
                title="A Healthcare RCM Partner"
                subtitle="MBX Solutions specializes in healthcare revenue cycle management with particular expertise in Home Health and Hospice, while also supporting private practices, large groups and other healthcare organizations."
                centered={false}
              />
              <p className="mt-4 text-base leading-relaxed text-mbx-text-muted">
                We understand that healthcare organizations face unique revenue challenges —
                from PDGM and OASIS complexities in home health to NOE/NOTR processes in hospice.
                Our team brings deep operational knowledge of these specialized workflows.
              </p>
            </AnimatedSection>

            <AnimatedSection className="flex-1" delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Home Health Expertise',
                  'Hospice Billing Knowledge',
                  'Private Practice Support',
                  'Enterprise Operations',
                  'Technology-Enabled',
                  'Quality-Focused',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 rounded-xl bg-mbx-surface border border-mbx-border px-4 py-3.5">
                    <CheckCircle size={16} className="shrink-0 text-mbx-teal" />
                    <span className="text-sm font-medium text-mbx-navy">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-mbx-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Values"
              title="What We Believe"
              subtitle="The principles that guide how we support healthcare organizations."
            />
          </AnimatedSection>

          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl bg-mbx-white border border-mbx-border p-7 text-center transition-all hover:shadow-lg hover:border-mbx-teal/30">
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-mbx-teal/10 text-mbx-teal">
                    <value.icon size={22} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-mbx-navy">{value.title}</h3>
                  <p className="text-sm text-mbx-text-muted">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-24 lg:py-32 bg-mbx-navy">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Approach"
              title="How We Work"
              subtitle="A structured approach to understanding and supporting your revenue cycle."
              light
            />
          </AnimatedSection>

          <div className="mx-auto max-w-3xl">
            {approach.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mbx-teal text-sm font-bold text-mbx-white">
                      {step.num}
                    </div>
                    {i < approach.length - 1 && <div className="mt-2 h-full w-px bg-white/10" />}
                  </div>
                  <div className="pb-10">
                    <h4 className="mb-1 text-lg font-bold text-mbx-white">{step.title}</h4>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24 lg:py-32 bg-mbx-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Expertise"
              title="What Sets MBX Apart"
              subtitle="Deep healthcare revenue cycle knowledge combined with modern technology-enabled workflows."
            />
          </AnimatedSection>

          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {[
              { title: 'Home Health Depth', desc: 'PDGM, OASIS, LUPA — we understand the complexities of home health billing.' },
              { title: 'Hospice Specialization', desc: 'NOE/NOTR, revenue codes, GIP/respite — hospice-specific expertise.' },
              { title: 'Multi-Specialty Support', desc: 'From private practices to health systems, we scale to your needs.' },
              { title: 'Technology Integration', desc: 'Modern workflows that work alongside your existing systems.' },
              { title: 'Quality Assurance', desc: 'Documentation review, coding accuracy, and claims quality checks.' },
              { title: 'Operational Excellence', desc: 'Consistent, reliable revenue cycle support you can depend on.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl border border-mbx-border bg-mbx-surface p-7 transition-all hover:shadow-lg hover:border-mbx-teal/30">
                  <h3 className="mb-2 text-lg font-bold text-mbx-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-mbx-text-muted">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 bg-mbx-surface border-t border-mbx-border">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-4 text-xl font-bold text-mbx-navy">Security-Conscious Workflows</h3>
              <p className="text-sm text-mbx-text-muted">
                MBX designs healthcare workflows with data privacy and security considerations in mind.
                Our operational processes are built to support healthcare organizations' compliance requirements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-mbx-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-mbx-navy md:text-4xl">
              Partner With MBX
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-mbx-text-muted">
              Discover how MBX Solutions can support your organization's revenue cycle.
            </p>
            <PrimaryButton to="/connect-us" size="lg">Start a Conversation</PrimaryButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
