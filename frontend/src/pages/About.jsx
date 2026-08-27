import { Link } from 'react-router-dom'
import { Users, Shield, Heart, Target, ArrowRight, CheckCircle } from 'lucide-react'
import { SectionHeader, CTASection, TeamCard } from '../components/UI'

const values = [
  { icon: Heart, title: 'Patient-Centered', description: 'Every solution we build starts with better patient outcomes in mind.' },
  { icon: Target, title: 'Results-Driven', description: 'We measure success by the tangible improvements we deliver.' },
  { icon: Shield, title: 'Compliance-First', description: 'Regulatory compliance is embedded in everything we do.' },
  { icon: Users, title: 'Client Partnership', description: 'We work alongside you as an extension of your team.' },
]

const milestones = [
  { year: '2001', title: 'Founded', description: 'SimiTree established to serve home health organizations.' },
  { year: '2008', title: 'Expansion', description: 'Expanded services to include hospice and behavioral health.' },
  { year: '2015', title: 'AI Innovation', description: 'Launched first AI-powered coding and analytics tools.' },
  { year: '2020', title: 'SARA Launch', description: 'Introduced SARA AI-Powered Coding & OASIS assistant.' },
  { year: '2022', title: 'CLARITY Launch', description: 'Released CLARITY AI-Driven Revenue Cycle platform.' },
  { year: '2026', title: 'Today', description: 'Serving 500+ clients with cutting-edge AI technology.' },
]

const leadership = [
  { name: 'Joe Osentoski', role: 'Chief Executive Officer' },
  { name: 'Derek Fournier', role: 'Chief Technology Officer' },
  { name: 'Tara Ross', role: 'VP of Revenue Cycle' },
  { name: 'Mark Kimball', role: 'VP of Business Development' },
  { name: 'Dr. Susan Paparella', role: 'VP of Clinical Services' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark-blue via-brand-blue to-brand-royal-blue py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-orange/20 px-4 py-1 text-sm font-semibold text-brand-orange">
              About SimiTree
            </span>
            <h1 className="mb-6 text-4xl font-bold text-brand-white md:text-5xl">
              Driving Healthcare Forward
            </h1>
            <p className="text-lg text-brand-blue-gray leading-relaxed">
              For over 25 years, SimiTree has been the trusted partner for home health, hospice,
              and behavioral health organizations seeking growth, efficiency, and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-brand-cream py-16 lg:py-24" id="story">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1">
              <span className="mb-4 inline-block rounded-full bg-brand-orange/20 px-4 py-1 text-sm font-semibold text-brand-orange">
                Our Story
              </span>
              <h2 className="mb-4 text-3xl font-bold text-brand-dark-blue md:text-4xl">
                25+ Years of Healthcare Excellence
              </h2>
              <p className="mb-4 text-lg text-gray-600 leading-relaxed">
                SimiTree was founded with a mission to help healthcare organizations navigate the
                complexities of an ever-evolving industry. What started as a consulting firm has
                grown into a comprehensive technology and services partner.
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Today, we combine deep industry expertise with cutting-edge AI technology to deliver
                solutions that drive real results. Our clinician-designed AI tools and experienced
                consultants work together to improve outcomes, strengthen compliance, and accelerate
                financial performance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="mb-1 text-3xl font-bold text-brand-orange">25+</p>
                  <p className="text-sm text-gray-600">Years of Experience</p>
                </div>
                <div className="text-center">
                  <p className="mb-1 text-3xl font-bold text-brand-orange">500+</p>
                  <p className="text-sm text-gray-600">Clients Served</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=450&fit=crop"
                  alt="SimiTree Team"
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-[10px] bg-brand-cream p-6 text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  <value.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-brand-dark-blue">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-dark-blue py-16 lg:py-24" id="history">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones that have shaped who we are today."
            light
          />
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-4 top-0 h-full w-px bg-brand-royal-blue md:left-1/2" />
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`relative mb-8 flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden flex-1 md:block" />
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-orange text-xs font-bold text-white z-10">
                  {milestone.year.slice(2)}
                </div>
                <div className="flex-1 rounded-[10px] bg-brand-nav-panel p-5">
                  <span className="text-sm font-bold text-brand-orange">{milestone.year}</span>
                  <h3 className="text-lg font-bold text-brand-white">{milestone.title}</h3>
                  <p className="text-sm text-brand-blue-gray">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-brand-cream py-16 lg:py-24" id="leadership">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Leadership Team"
            subtitle="Experienced professionals driving innovation in healthcare."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {leadership.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-white py-16 lg:py-24" id="security">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Security & Compliance"
            subtitle="Your data security is our top priority."
          />
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'HIPAA Compliant',
                'SOC 2 Type II Certified',
                'End-to-End Encryption',
                'Regular Security Audits',
                'Access Controls & Monitoring',
                'Incident Response Plan',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-brand-cream p-4">
                  <CheckCircle size={20} className="text-brand-orange" />
                  <span className="font-semibold text-brand-dark-blue">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Growing Family"
        description="Discover how SimiTree can help your organization achieve its goals."
        buttonText="Connect With Us"
        buttonLink="/connect-us"
        variant="dark"
      />
    </>
  )
}
