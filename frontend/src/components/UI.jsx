import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function SectionHeading({ eyebrow, title, subtitle, centered = true, light = false, className = '' }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <span className={`mb-5 inline-block text-xs font-bold tracking-[0.2em] uppercase ${light ? 'text-mbx-teal-light' : 'text-mbx-teal'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`mb-6 text-3xl font-extrabold tracking-tight leading-[1.1] md:text-4xl lg:text-[2.75rem] ${light ? 'text-mbx-white' : 'text-mbx-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-white/60' : 'text-mbx-text-muted'}`}>
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
    lg: 'px-9 py-4.5 text-base',
  }

  const classes = `inline-flex items-center gap-2.5 rounded-xl bg-[#4486BF] font-bold text-mbx-white transition-all duration-300 hover:bg-[#3a73a8] hover:shadow-lg hover:shadow-[#4486BF]/20 hover:-translate-y-0.5 ${sizeClasses[size]} ${className}`

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

export function SecondaryButton({ children, to, href, className = '', size = 'md', light = false }) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4.5 text-base',
  }

  const borderClass = light ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/40' : 'border-mbx-navy/20 text-mbx-navy hover:bg-mbx-navy hover:text-white hover:border-mbx-navy'
  const classes = `inline-flex items-center gap-2.5 rounded-xl border-2 font-bold transition-all duration-300 hover:-translate-y-0.5 ${sizeClasses[size]} ${borderClass} ${className}`

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
      <span className={`mb-4 text-xs font-bold tracking-[0.2em] ${featured ? 'text-mbx-teal-light' : 'text-mbx-teal'}`}>
        {String(number).padStart(2, '0')}
      </span>
      <h3 className={`mb-3 text-xl font-extrabold ${featured ? 'text-mbx-white' : 'text-mbx-navy'} group-hover:text-mbx-teal transition-colors`}>
        {title}
      </h3>
      <p className={`flex-1 text-sm leading-relaxed ${featured ? 'text-white/60' : 'text-mbx-text-muted'}`}>
        {description}
      </p>
      <div className={`mt-5 inline-flex items-center gap-2 text-sm font-bold ${featured ? 'text-mbx-teal-light' : 'text-mbx-teal'}`}>
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
    <div className="group rounded-2xl bg-white/[0.04] p-7 border border-white/[0.06] transition-all duration-500 hover:bg-white/[0.07] hover:border-mbx-teal/20">
      <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-mbx-teal/10 text-mbx-teal transition-colors group-hover:bg-mbx-teal group-hover:text-white">
        <Icon size={22} />
      </div>
      <h3 className="mb-2.5 text-lg font-bold text-mbx-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/50">{description}</p>
    </div>
  )
}

export function FeatureBlock({ eyebrow, title, description, children, reversed = false, className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-16 lg:flex-row ${reversed ? 'lg:flex-row-reverse' : ''} ${className}`}>
      <div className="flex-1">
        {eyebrow && (
          <span className="mb-5 inline-block text-xs font-bold tracking-[0.2em] uppercase text-mbx-teal">
            {eyebrow}
          </span>
        )}
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-mbx-navy md:text-4xl">{title}</h2>
        <p className="mb-8 text-lg leading-relaxed text-mbx-text-muted">{description}</p>
        {children}
      </div>
    </div>
  )
}

export function GlowCard({ children, className = '' }) {
  return (
    <div className={`relative rounded-2xl border border-mbx-border bg-mbx-white p-8 transition-all duration-500 hover:shadow-xl hover:border-mbx-teal/30 ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-mbx-teal/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
