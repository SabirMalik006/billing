import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Brain, Database, Shield, TrendingUp, Users, FileText,
  ArrowRight, ArrowLeft, ChevronRight, Activity, BarChart3,
  Stethoscope, Heart, Building2, ClipboardCheck
} from 'lucide-react'
import { SectionHeader, ServiceCard, CTASection, StatCard, MarketCard } from '../components/UI'

const heroSlides = [
  {
    tag: 'Technology & AI',
    title: 'AI-Powered Solutions for Smarter Healthcare',
    description: 'Our clinician-designed and expert-validated AI tools deliver compliance-ready coding and over 90% cash forecast accuracy for home health, hospice, and behavioral health organizations.',
    cta: 'Explore Our AI-Powered Technologies',
    link: '/technology-and-ai',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
  },
  {
    tag: 'Revenue Cycle Management',
    title: 'Maximize Revenue, Minimize Denials',
    description: 'SimiTree manages every stage of your revenue cycle so nothing gets missed and no revenue gets left behind. From first verification to final payment.',
    cta: 'Explore RCM Services',
    link: '/capabilities#rcm',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop',
  },
  {
    tag: 'Consulting Services',
    title: 'Strategic Guidance for Growth',
    description: 'From M&A advisory to compliance and regulatory risk management, our experts help you navigate the complexities of healthcare with confidence.',
    cta: 'Discover Our Services',
    link: '/capabilities',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop',
  },
]

const services = [
  { icon: Brain, title: 'AI & Technology', description: 'Clinician-designed AI tools for compliance-ready coding and cash forecast accuracy.', link: '/technology-and-ai' },
  { icon: TrendingUp, title: 'Revenue Cycle', description: 'End-to-end revenue cycle management to maximize collections and reduce denials.', link: '/capabilities#rcm' },
  { icon: Shield, title: 'Compliance & Risk', description: 'Stay compliant with evolving regulations and mitigate regulatory risks.', link: '/capabilities#compliance' },
  { icon: FileText, title: 'Coding & OASIS', description: 'Expert coding services ensuring accuracy and compliance for optimal reimbursement.', link: '/capabilities#coding' },
  { icon: BarChart3, title: 'Data Analytics', description: 'Actionable insights through advanced analytics and custom reporting tools.', link: '/technology-and-ai#analytics' },
  { icon: Users, title: 'Consulting', description: 'Strategic consulting for operational excellence and sustainable growth.', link: '/capabilities#consulting' },
]

const markets = [
  { icon: Stethoscope, title: 'Home Health Care', description: 'Specialized solutions for home health agencies to improve outcomes and efficiency.', link: '/capabilities#home-health' },
  { icon: Heart, title: 'Hospice', description: 'Compassionate technology and consulting for hospice organizations.', link: '/capabilities#hospice' },
  { icon: Building2, title: 'Behavioral Health', description: 'Tailored services for behavioral health organizations to thrive.', link: '/capabilities#behavioral-health' },
]

const insights = [
  {
    category: 'Blog',
    title: 'How AI is Transforming Home Health Coding in 2026',
    date: 'Aug 20, 2026',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop',
    link: '/our-insights',
  },
  {
    category: 'Case Study',
    title: 'Regional Agency Achieves 95% Clean Claims Rate with SARA',
    date: 'Aug 15, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    link: '/our-insights',
  },
  {
    category: 'White Paper',
    title: 'PDGM 2.0: What Home Health Leaders Need to Know',
    date: 'Aug 10, 2026',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop',
    link: '/our-insights',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <>
      {/* Hero Slider */}
      <section className="relative overflow-hidden bg-gradient-to-t from-brand-blue to-brand-dark-blue pt-8 lg:pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <h1 className="text-4xl font-bold text-brand-white md:text-5xl">SimiTree solves it.</h1>
            <time className="shrink-0 font-semibold text-brand-white" dateTime="2026-08-27">
              August 27, 2026
            </time>
          </div>

          <div className="mt-5 w-full border-t border-brand-royal-blue" />

          <div className="relative py-8 lg:py-12">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`flex flex-col items-start gap-6 lg:flex-row lg:items-center ${
                  index === currentSlide ? 'block' : 'hidden'
                }`}
              >
                <div className="flex-1 pr-0 lg:pr-8">
                  <span className="mb-3 inline-block rounded-full bg-brand-orange/20 px-4 py-1 text-sm font-semibold text-brand-orange">
                    {slide.tag}
                  </span>
                  <h2 className="mb-4 text-balance text-2xl font-bold text-brand-white md:text-3xl lg:text-4xl">
                    {slide.title}
                  </h2>
                  <p className="mb-6 text-brand-blue-gray leading-relaxed">{slide.description}</p>
                  <Link
                    to={slide.link}
                    className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-brand-white transition-all hover:bg-orange-600 hover:shadow-lg"
                  >
                    {slide.cta} <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="w-full flex-1 lg:w-auto">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={slide.image}
                      alt={slide.tag}
                      className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-80"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between border-t border-brand-royal-blue py-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
                className="flex size-10 items-center justify-center rounded-full border border-brand-royal-blue text-brand-white transition-colors hover:bg-brand-royal-blue"
                aria-label="Previous slide"
              >
                <ArrowLeft size={18} />
              </button>
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`size-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-brand-orange scale-125' : 'bg-brand-royal-blue hover:bg-brand-orange/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide ? 'true' : undefined}
                />
              ))}
              <button
                onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
                className="flex size-10 items-center justify-center rounded-full border border-brand-royal-blue text-brand-white transition-colors hover:bg-brand-royal-blue"
                aria-label="Next slide"
              >
                <ArrowRight size={18} />
              </button>
            </div>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex size-10 items-center justify-center rounded-full border border-brand-royal-blue text-brand-white transition-colors hover:bg-brand-royal-blue"
              aria-label={isAutoPlaying ? 'Pause' : 'Play'}
            >
              {isAutoPlaying ? (
                <div className="flex gap-1">
                  <div className="size-1 rounded-sm bg-brand-white" />
                  <div className="size-1 rounded-sm bg-brand-white" />
                </div>
              ) : (
                <div className="size-0 border-t-[5px] border-b-[5px] border-l-[8px] border-transparent border-l-brand-white" />
              )}
            </button>
          </div>
        </div>
        <div className="w-full border-t border-brand-royal-blue" />
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-dark-blue py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCard number="25+" label="Years of Experience" />
            <StatCard number="90%+" label="Cash Forecast Accuracy" />
            <StatCard number="500+" label="Clients Served" />
            <StatCard number="100%" label="HIPAA Compliant" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-cream py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive technology and consulting solutions designed specifically for home health, hospice, and behavioral health organizations."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="bg-brand-dark-blue py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Markets We Serve"
            subtitle="Tailored solutions for every segment of the healthcare continuum."
            light
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market) => (
              <MarketCard key={market.title} {...market} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Highlight */}
      <section className="bg-brand-cream py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1">
              <span className="mb-4 inline-block rounded-full bg-brand-orange/20 px-4 py-1 text-sm font-semibold text-brand-orange">
                AI-Powered Technology
              </span>
              <h2 className="mb-4 text-3xl font-bold text-brand-dark-blue md:text-4xl">
                SARA & CLARITY: Your AI-Powered Advantage
              </h2>
              <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                Our clinician-designed and expert-validated AI tools deliver compliance-ready coding
                and over 90% cash forecast accuracy. Improve outcomes, strengthen compliance, and
                accelerate financial performance.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  'Clinician-designed AI for accurate coding',
                  '90%+ cash forecast accuracy with CLARITY',
                  'Real-time compliance monitoring',
                  'Seamless integration with major EHRs',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <ClipboardCheck size={18} className="text-brand-orange" />
                    <span className="text-brand-dark-blue">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/technology-and-ai"
                className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-brand-white transition-all hover:bg-orange-600 hover:shadow-lg"
              >
                Explore Our Technology <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&h=450&fit=crop"
                  alt="AI Technology in Healthcare"
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-blue/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-brand-orange text-white">
                      <Activity size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-white">Powered by AI</p>
                      <p className="text-sm text-brand-blue-gray">Clinician-Designed & Validated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Latest Insights"
            subtitle="Stay informed with our latest thinking on healthcare technology, compliance, and operational excellence."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <Link
                key={insight.title}
                to={insight.link}
                className="group overflow-hidden rounded-[10px] bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-white">
                    {insight.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-brand-dark-blue group-hover:text-brand-orange transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-500">{insight.date}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/our-insights"
              className="inline-flex items-center gap-2 rounded-md border-2 border-brand-orange px-6 py-3 text-sm font-semibold text-brand-orange transition-all hover:bg-brand-orange hover:text-white"
            >
              View All Insights <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Organization?"
        description="Let's discuss how SimiTree can help you improve outcomes, strengthen compliance, and accelerate growth."
        buttonText="Connect With Us"
        buttonLink="/connect-us"
        variant="dark"
      />
    </>
  )
}
