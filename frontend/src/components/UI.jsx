import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function SectionHeader({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
      <h2 className={`mb-4 text-3xl font-bold md:text-4xl ${light ? 'text-brand-white' : 'text-brand-dark-blue'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-brand-blue-gray' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function ServiceCard({ icon: Icon, title, description, link }) {
  return (
    <Link
      to={link}
      className="group flex flex-col rounded-[10px] bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
    >
      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
        <Icon size={24} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-brand-dark-blue group-hover:text-brand-orange transition-colors">
        {title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
        Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

export function CTASection({ title, description, buttonText, buttonLink, variant = 'dark' }) {
  const bgClass = variant === 'dark'
    ? 'bg-gradient-to-r from-brand-blue to-brand-dark-blue'
    : 'bg-brand-orange'

  return (
    <section className={`${bgClass} py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-brand-white md:text-4xl">{title}</h2>
        {description && (
          <p className="mb-8 mx-auto max-w-2xl text-lg text-brand-blue-gray">{description}</p>
        )}
        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-8 py-3 text-base font-semibold text-brand-white transition-all hover:bg-orange-600 hover:shadow-lg"
        >
          {buttonText} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}

export function StatCard({ number, label }) {
  return (
    <div className="text-center">
      <p className="mb-1 text-4xl font-bold text-brand-orange md:text-5xl">{number}</p>
      <p className="text-sm font-medium text-brand-blue-gray">{label}</p>
    </div>
  )
}

export function MarketCard({ icon: Icon, title, description, link }) {
  return (
    <Link
      to={link}
      className="group flex flex-col items-center rounded-[10px] bg-brand-nav-panel p-8 text-center transition-all duration-300 hover:bg-brand-royal-blue hover:shadow-xl"
    >
      <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange transition-colors group-hover:bg-white group-hover:text-brand-orange">
        <Icon size={28} />
      </div>
      <h3 className="mb-2 text-xl font-bold text-brand-white">{title}</h3>
      <p className="text-sm leading-relaxed text-brand-blue-gray">{description}</p>
    </Link>
  )
}

export function TeamCard({ name, role, image }) {
  return (
    <div className="group text-center">
      <div className="relative mb-4 mx-auto size-40 overflow-hidden rounded-full bg-brand-blue-gray">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-brand-royal-blue">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold text-brand-dark-blue">{name}</h3>
      <p className="text-sm text-brand-orange">{role}</p>
    </div>
  )
}
