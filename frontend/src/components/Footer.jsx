import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react'

const footerLinks = {
  'Technology & AI': [
    { label: 'CLARITY: AI-Driven Revenue Cycle', path: '/technology-and-ai#clarity' },
    { label: 'SARA: AI-Powered Coding & OASIS', path: '/technology-and-ai#sara' },
    { label: 'Data Analytics & Reporting', path: '/technology-and-ai#analytics' },
  ],
  'Services': [
    { label: 'Billing', path: '/capabilities#billing' },
    { label: 'Coding & OASIS', path: '/capabilities#coding' },
    { label: 'Compliance & Regulatory Risk', path: '/capabilities#compliance' },
    { label: 'Revenue Cycle Management', path: '/capabilities#rcm' },
    { label: 'Consulting', path: '/capabilities#consulting' },
  ],
  'Markets': [
    { label: 'Home Health Care', path: '/capabilities#home-health' },
    { label: 'Hospice', path: '/capabilities#hospice' },
    { label: 'Behavioral Health', path: '/capabilities#behavioral-health' },
  ],
  'Company': [
    { label: 'About Us', path: '/about' },
    { label: 'Leadership', path: '/about#leadership' },
    { label: 'Our Story', path: '/about#story' },
    { label: 'Careers', path: '#' },
    { label: 'Contact', path: '/connect-us' },
  ],
}

const socialLinks = [
  { icon: Globe, label: 'LinkedIn', href: '#' },
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: Globe, label: 'Twitter', href: '#' },
  { icon: ExternalLink, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark-blue text-brand-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-6 inline-block">
              <svg className="h-8 w-auto" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="30" fontFamily="proxima-nova, sans-serif" fontSize="28" fontWeight="700" fill="#ffffff">
                  SimiTree
                </text>
                <circle cx="185" cy="12" r="6" fill="#e87722" />
              </svg>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-brand-blue-gray">
              Driving growth in home health, hospice, and behavioral health with consulting, AI technology, analytics, and billing support.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@simitreehc.com" className="flex items-center gap-2 text-sm text-brand-blue-gray hover:text-brand-orange transition-colors">
                <Mail size={16} /> info@simitreehc.com
              </a>
              <a href="tel:8667464830" className="flex items-center gap-2 text-sm text-brand-blue-gray hover:text-brand-orange transition-colors">
                <Phone size={16} /> (866) 746-4830
              </a>
              <div className="flex items-start gap-2 text-sm text-brand-blue-gray">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>405 N Frederick Ave, Suite 200<br />Gaithersburg, MD 20877</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-orange">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-brand-blue-gray transition-colors hover:text-brand-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-royal-blue/30">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-xs text-brand-blue-gray">
            &copy; {new Date().getFullYear()} SimiTree Healthcare Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-brand-blue-gray transition-colors hover:text-brand-orange"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs text-brand-blue-gray">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-orange transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
