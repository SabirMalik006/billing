import { Link } from 'react-router-dom'
import { Brain, Activity, BarChart3, ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Database } from 'lucide-react'
import { SectionHeader, CTASection } from '../components/UI'

const features = [
  {
    icon: Brain,
    title: 'CLARITY: AI-Driven Revenue Cycle',
    id: 'clarity',
    description: 'Predictive analytics and AI-powered tools that deliver over 90% cash forecast accuracy for home health, hospice, and behavioral health organizations.',
    highlights: ['Cash forecast accuracy over 90%', 'Predictive denial management', 'Real-time revenue insights', 'Automated follow-up prioritization'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=400&fit=crop',
  },
  {
    icon: Activity,
    title: 'SARA: AI-Powered Coding & OASIS',
    id: 'sara',
    description: 'Clinician-designed AI assistant that ensures accurate coding and OASIS documentation, reducing compliance risk while maximizing reimbursement.',
    highlights: ['Clinician-designed AI engine', 'Real-time coding suggestions', 'OASIS accuracy improvement', 'Compliance risk reduction'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=400&fit=crop',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Reporting',
    id: 'analytics',
    description: 'Comprehensive analytics dashboards and custom reporting tools that transform your data into actionable insights for better decision-making.',
    highlights: ['Custom dashboard creation', 'Real-time performance metrics', 'Regulatory reporting automation', 'Trend analysis & forecasting'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=400&fit=crop',
  },
]

const advantages = [
  { icon: Zap, title: 'Faster Results', description: 'AI-accelerated workflows that reduce processing time and improve turnaround.' },
  { icon: Shield, title: 'Built-In Compliance', description: 'Every tool designed with regulatory compliance at its core.' },
  { icon: TrendingUp, title: 'Proven ROI', description: 'Measurable improvements in revenue, efficiency, and outcomes.' },
  { icon: Database, title: 'Seamless Integration', description: 'Works with your existing EHR and practice management systems.' },
]

export default function Technology() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark-blue via-brand-blue to-brand-royal-blue py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-orange/20 px-4 py-1 text-sm font-semibold text-brand-orange">
              Technology & AI
            </span>
            <h1 className="mb-6 text-4xl font-bold text-brand-white md:text-5xl">
              AI-Powered Solutions for Healthcare
            </h1>
            <p className="text-lg text-brand-blue-gray leading-relaxed">
              Our clinician-designed and expert-validated AI tools deliver compliance-ready coding
              and over 90% cash forecast accuracy for healthcare organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      {features.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-brand-cream' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`flex flex-col items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="flex-1">
                <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <feature.icon size={28} />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-brand-dark-blue md:text-4xl">{feature.title}</h2>
                <p className="mb-6 text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                <ul className="mb-8 space-y-3">
                  {feature.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-brand-orange" />
                      <span className="text-brand-dark-blue">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/connect-us"
                  className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-brand-white transition-all hover:bg-orange-600 hover:shadow-lg"
                >
                  Request a Demo <ArrowRight size={18} />
                </Link>
              </div>
              <div className="flex-1">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Advantages */}
      <section className="bg-brand-dark-blue py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose Our Technology"
            subtitle="Purpose-built for the unique needs of home health, hospice, and behavioral health."
            light
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv) => (
              <div key={adv.title} className="rounded-[10px] bg-brand-nav-panel p-6 text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange">
                  <adv.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-brand-white">{adv.title}</h3>
                <p className="text-sm text-brand-blue-gray">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to See Our AI in Action?"
        description="Schedule a personalized demo to see how SARA and CLARITY can transform your organization."
        buttonText="Request a Demo"
        buttonLink="/connect-us"
        variant="dark"
      />
    </>
  )
}
