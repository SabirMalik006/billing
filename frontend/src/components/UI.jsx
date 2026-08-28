import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, subtitle, centered = true, light = false, className = '' }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <span className={`mb-4 inline-block text-sm font-semibold tracking-widest uppercase ${light ? 'text-mbx-teal-light' : 'text-mbx-teal'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`mb-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${light ? 'text-mbx-white' : 'text-mbx-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-mbx-text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function PrimaryButton({ children, to, href, className = '', size = 'md' }) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `inline-flex items-center gap-2.5 rounded-lg bg-mbx-teal font-semibold text-mbx-white transition-all duration-300 hover:bg-mbx-teal-dark hover:shadow-lg hover:shadow-mbx-teal/25 ${sizeClasses[size]} ${className}`

  const content = (
    <>
      {children}
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`group ${classes}`}>
        {content}
      </a>
    )
  }

  return (
    <button className={`group ${classes}`}>
      {content}
    </button>
  )
}

export function SecondaryButton({ children, to, href, className = '', size = 'md' }) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `inline-flex items-center gap-2.5 rounded-lg border-2 border-mbx-navy font-semibold text-mbx-navy transition-all duration-300 hover:bg-mbx-navy hover:text-mbx-white ${sizeClasses[size]} ${className}`

  const content = (
    <>
      {children}
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  )

  if (to) {
    return <Link to={to} className={`group ${classes}`}>{content}</Link>
  }

  if (href) {
    return <a href={href} className={`group ${classes}`}>{content}</a>
  }

  return <button className={`group ${classes}`}>{content}</button>
}

export function CapabilityCard({ number, title, description, link, featured = false }) {
  return (
    <Link
      to={link}
      className={`group relative flex flex-col rounded-2xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
        featured
          ? 'border-mbx-teal/30 bg-gradient-to-br from-mbx-navy to-mbx-navy-light p-8 text-mbx-white'
          : 'border-mbx-border bg-mbx-white p-7 hover:border-mbx-teal/40'
      }`}
    >
      <span className={`mb-4 text-sm font-bold tracking-wider ${featured ? 'text-mbx-teal-light' : 'text-mbx-teal'}`}>
        {String(number).padStart(2, '0')}
      </span>
      <h3 className={`mb-3 text-xl font-bold ${featured ? 'text-mbx-white' : 'text-mbx-navy'} group-hover:text-mbx-teal transition-colors`}>
        {title}
      </h3>
      <p className={`flex-1 text-sm leading-relaxed ${featured ? 'text-gray-300' : 'text-mbx-text-muted'}`}>
        {description}
      </p>
      <div className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${featured ? 'text-mbx-teal-light' : 'text-mbx-teal'}`}>
        Learn More
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </Link>
  )
}

export function ProcessStep({ number, title, description, isLast = false }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mbx-teal text-sm font-bold text-mbx-white">
          {number}
        </div>
        {!isLast && <div className="mt-2 h-full w-px bg-mbx-teal/20" />}
      </div>
      <div className={`pb-10 ${isLast ? '' : ''}`}>
        <h4 className="mb-1 text-lg font-bold text-mbx-navy">{title}</h4>
        <p className="text-sm leading-relaxed text-mbx-text-muted">{description}</p>
      </div>
    </div>
  )
}

export function DarkCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl bg-mbx-navy-light/50 p-6 backdrop-blur-sm border border-white/5">
      <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-mbx-teal/15 text-mbx-teal">
        <Icon size={20} />
      </div>
      <h3 className="mb-2 text-base font-bold text-mbx-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
    </div>
  )
}

export function FeatureBlock({ eyebrow, title, description, children, reversed = false, className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-12 lg:flex-row ${reversed ? 'lg:flex-row-reverse' : ''} ${className}`}>
      <div className="flex-1">
        {eyebrow && (
          <span className="mb-4 inline-block text-sm font-semibold tracking-widest uppercase text-mbx-teal">
            {eyebrow}
          </span>
        )}
        <h2 className="mb-5 text-3xl font-bold tracking-tight text-mbx-navy md:text-4xl">{title}</h2>
        <p className="mb-6 text-lg leading-relaxed text-mbx-text-muted">{description}</p>
        {children}
      </div>
    </div>
  )
}
