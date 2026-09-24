import { Link } from 'react-router-dom'
import { ArrowUpRight, Phone, Mail, MapPin, MessageCircle, Star, ShieldCheck, LockKeyhole, BadgeCheck } from 'lucide-react'
import { useState } from 'react'
import ReviewForm from './ReviewForm'

const footerLinks = {
  Services: [
    { label: 'Home Health Billing', path: '/services#home-health' },
    { label: 'Hospice Billing', path: '/services#hospice' },
    { label: 'Claim Entry', path: '/services#claim-entry' },
    { label: 'Medical Coding', path: '/services#medical-coding' },
    { label: 'Credentialing', path: '/services#credentialing' },
    { label: 'Free Audit', path: '/services#free-audit' },
  ],
  Resources: [
    { label: 'Services', path: '/services' },
    { label: 'Home Health & Hospice', path: '/capabilities#home-health' },
    { label: 'Specialties', path: '/capabilities#private-practice' },
    { label: 'Blog', path: '/blog' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'HIPAA Compliance', path: '/hipaa' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/connect-us' },
    { label: 'Privacy Policy', path: '#' },
  ],
}

const complianceBadges = [
  { icon: ShieldCheck, label: 'HIPAA Compliant', desc: 'Patient data protected end-to-end' },
  { icon: LockKeyhole, label: 'OSHA Compliant', desc: 'Safe & secure working environments' },
  { icon: BadgeCheck, label: 'HBMA Standards', desc: 'Following healthcare RCM best practices' },
]

export default function Footer() {
  const [showReview, setShowReview] = useState(false)

  return (
    <footer className="relative overflow-hidden bg-[#4486BF]">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.35]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-white/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-white/10 blur-[140px]" />

      <div className="container mx-auto relative z-10 pt-16 pb-10 md:pt-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left lg:col-span-4">
            <Link to="/" className="inline-block">
              <img src="/logo.jpeg" alt="MBX Solutions" className="h-10 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75 sm:mx-0 mx-auto">
              Healthcare revenue cycle expertise for organizations that want greater clarity,
              stronger workflows and more time to focus on care.
            </p>

            {/* Service tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
              {['Home Health Billing', 'Hospice Billing', 'Medical Coding', 'Credentialing'].map((tag) => (
                <Link
                  key={tag}
                  to="/services"
                  className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/80 transition-all duration-300 hover:border-white/60 hover:text-white"
                >
                  {tag}
                </Link>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-7 flex items-center justify-center gap-3 sm:justify-start">
              <a href="https://www.facebook.com/Mbxsol" target="_blank" rel="noopener noreferrer" className="flex size-10 items-center justify-center rounded-xl bg-white/15 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#4486BF]" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/mbxsol/" target="_blank" rel="noopener noreferrer" className="flex size-10 items-center justify-center rounded-xl bg-white/15 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#4486BF]" aria-label="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="text-center sm:text-left lg:col-span-2">
              <h4 className="mb-5 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:justify-start">
                <span className="h-px w-5 bg-white/40" />
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center justify-center gap-1.5 text-sm text-white/75 transition-all duration-300 hover:pl-1 hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight size={11} className="opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Compliance */}
          <div className="text-center sm:text-left lg:col-span-2">
            <h4 className="mb-5 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:justify-start">
              <span className="h-px w-5 bg-white/40" />
              Compliance
            </h4>
            <div className="space-y-3">
              {complianceBadges.map((badge) => (
                <div key={badge.label} className="flex items-start justify-center gap-3 rounded-xl border border-white/20 bg-white/10 p-3 transition-all duration-300 hover:border-white/40 sm:justify-start">
                  <badge.icon size={16} className="mt-0.5 shrink-0 text-white" />
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-bold text-white">{badge.label}</p>
                    <p className="text-xs text-white/70">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact + Help strip */}
        <div className="grid grid-cols-1 gap-4 border-t border-white/20 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <a href="tel:+18883706494" className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 transition-all duration-300 hover:border-white/40 hover:bg-white/15">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#4486BF]">
              <Phone size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Call Us</p>
              <p className="truncate text-sm font-bold text-white">888-370-6494</p>
            </div>
          </a>
          <a href="mailto:info@mbxsol.com" className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 transition-all duration-300 hover:border-white/40 hover:bg-white/15">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#4486BF]">
              <Mail size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Email Us</p>
              <p className="truncate text-sm font-bold text-white">info@mbxsol.com</p>
            </div>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
              <MapPin size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Visit Us</p>
              <p className="text-sm font-bold leading-snug text-white">Silver Spring, MD 20906</p>
            </div>
          </div>
          <a href="https://tawk.to/chat/69e36639917d361c322fb3b5/1jmg4el5d" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/30 bg-white/15 p-5 transition-all duration-300 hover:border-white/60">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#4486BF]">
              <MessageCircle size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Live Chat</p>
              <p className="text-sm font-bold text-white">Chat with our team now</p>
            </div>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/20 pt-8 md:flex-row">
          <p className="text-center text-xs text-white/70 md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-white">MBX Solutions</span>. All rights reserved. Designed &amp; Developed by{' '}
            <a href="https://hostbax.com" target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-white">HostBax</a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/70">
            <button onClick={() => setShowReview(true)} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <Star size={12} /> Write a Review
            </button>
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
      <ReviewForm isOpen={showReview} onClose={() => setShowReview(false)} />
    </footer>
  )
}