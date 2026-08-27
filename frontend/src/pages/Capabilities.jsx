import { Link } from 'react-router-dom'
import {
  Stethoscope, Heart, Building2, FileText, TrendingUp, Shield,
  Users, BarChart3, Briefcase, ClipboardCheck, Search, ArrowRight,
  CheckCircle
} from 'lucide-react'
import { SectionHeader, CTASection } from '../components/UI'

const markets = [
  {
    icon: Stethoscope,
    title: 'Home Health Care',
    id: 'home-health',
    description: 'Comprehensive solutions designed specifically for home health agencies to improve patient outcomes, streamline operations, and maximize reimbursement.',
    services: ['Coding & OASIS Review', 'Revenue Cycle Management', 'Compliance Consulting', 'Data Analytics'],
  },
  {
    icon: Heart,
    title: 'Hospice',
    id: 'hospice',
    description: 'Compassionate technology and expert consulting to help hospice organizations deliver exceptional care while maintaining financial sustainability.',
    services: ['Cost Reporting', 'Compliance & Regulatory Risk', 'Billing Support', 'Strategic Consulting'],
  },
  {
    icon: Building2,
    title: 'Behavioral Health',
    id: 'behavioral-health',
    description: 'Tailored services for behavioral health organizations to navigate complex regulations and optimize their revenue cycle.',
    services: ['Credentialing & Contracting', 'Revenue Cycle Management', 'Data Analysis', 'M&A Advisory'],
  },
]

const services = [
  { icon: FileText, title: 'Billing', id: 'billing', description: 'End-to-end billing services ensuring clean claims and faster reimbursements.', link: '/connect-us' },
  { icon: ClipboardCheck, title: 'Coding & OASIS', id: 'coding', description: 'Expert coding review and OASIS accuracy improvement services.', link: '/connect-us' },
  { icon: Shield, title: 'Compliance & Regulatory Risk', id: 'compliance', description: 'Stay ahead of regulatory changes and maintain compliance.', link: '/connect-us' },
  { icon: Users, title: 'Consulting', id: 'consulting', description: 'Strategic consulting for operational excellence and growth.', link: '/connect-us' },
  { icon: BarChart3, title: 'Cost Reporting', id: 'cost-reporting', description: 'Accurate cost reporting and analysis for better financial decisions.', link: '/connect-us' },
  { icon: Briefcase, title: 'Credentialing & Contracting', id: 'credentialing', description: 'Streamlined credentialing and payer contract optimization.', link: '/connect-us' },
  { icon: Search, title: 'Data Analysis', id: 'data-analysis', description: 'Deep data insights to drive strategic decision-making.', link: '/connect-us' },
  { icon: TrendingUp, title: 'Mergers & Acquisitions', id: 'ma', description: 'Expert M&A advisory for healthcare organizations.', link: '/connect-us' },
  { icon: Users, title: 'Recruiting & Interim Leadership', id: 'recruiting', description: 'Access top talent and interim leadership solutions.', link: '/connect-us' },
  { icon: TrendingUp, title: 'Revenue Cycle Management', id: 'rcm', description: 'Optimize your entire revenue cycle for maximum performance.', link: '/connect-us' },
]

export default function Capabilities() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark-blue via-brand-blue to-brand-royal-blue py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-orange/20 px-4 py-1 text-sm font-semibold text-brand-orange">
              Capabilities
            </span>
            <h1 className="mb-6 text-4xl font-bold text-brand-white md:text-5xl">
              Solutions for Every Healthcare Need
            </h1>
            <p className="text-lg text-brand-blue-gray leading-relaxed">
              From market-specific solutions to comprehensive services, we deliver the expertise
              and technology your organization needs to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="bg-brand-cream py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Markets We Serve"
            subtitle="Specialized solutions tailored for each segment of the healthcare continuum."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {markets.map((market) => (
              <div key={market.id} id={market.id} className="rounded-[10px] bg-white p-8 shadow-md">
                <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <market.icon size={28} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-brand-dark-blue">{market.title}</h3>
                <p className="mb-6 text-gray-600 leading-relaxed">{market.description}</p>
                <ul className="space-y-2">
                  {market.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-brand-orange" />
                      <span className="text-brand-dark-blue">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive consulting and technology services to optimize every aspect of your operations."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className="group flex flex-col rounded-[10px] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <service.icon size={20} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-brand-dark-blue group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm text-gray-600">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
                  Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Your Solution Together"
        description="Contact us to discuss how our capabilities can address your specific challenges and goals."
        buttonText="Get Started"
        buttonLink="/connect-us"
        variant="dark"
      />
    </>
  )
}
