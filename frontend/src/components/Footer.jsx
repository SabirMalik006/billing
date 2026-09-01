import { Link } from 'react-router-dom'
import { ArrowUpRight, Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const footerLinks = {
  Services: [
    { label: 'Home Health Billing', path: '/services#home-health' },
    { label: 'Hospice Billing', path: '/services#hospice' },
    { label: 'Claim Entry', path: '/services#claim-entry' },
    { label: 'Medical Coding', path: '/services#medical-coding' },
    { label: 'Credentialing', path: '/services#credentialing' },
    { label: 'Free Audit', path: '/services#free-audit' },
  ],
  'Quick Links': [
    { label: 'Services', path: '/services' },
    { label: 'Home Health & Hospice', path: '/capabilities#home-health' },
    { label: 'Specialties', path: '/capabilities#private-practice' },
    { label: 'Insights', path: '/our-insights' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/connect-us' },
    { label: 'Privacy Policy', path: '#' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="relative bg-mbx-navy-dark overflow-hidden">
      {/* Subtle top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-mbx-teal/30 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="container mx-auto relative z-10 pt-20 pb-8">
        {/* Top row: Logo + Newsletter + Live Chat */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="mb-6 inline-block">
              <img src="/logo.jpeg" alt="MBX Solutions" className="h-9 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
              Healthcare revenue cycle expertise for organizations that want greater clarity,
              stronger workflows and more time to focus on care.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://www.facebook.com/Mbxsol" target="_blank" rel="noopener noreferrer" className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-all hover:bg-mbx-teal hover:text-white" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/mbxsol/" target="_blank" rel="noopener noreferrer" className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-all hover:bg-mbx-teal hover:text-white" aria-label="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-mbx-teal">Newsletter</h4>
            <p className="mb-4 text-sm text-white/40">Signup our newsletter to get update information, news, insight or promotions.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-mbx-teal transition-colors placeholder:text-white/30"
                required
              />
              <button type="submit" className="rounded-lg bg-[#4486BF] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#3a73a8]">
                Sign Up
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-mbx-teal">Thank you for subscribing!</p>
            )}
          </div>

          {/* Live Chat / Help */}
          <div className="lg:col-span-4">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-mbx-teal">Need Help?</h4>
            <div className="space-y-3">
              <a href="https://tawk.to/chat/69e36639917d361c322fb3b5/1jmg4el5d" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/5 px-4 py-3 text-sm text-white/50 transition-all hover:border-mbx-teal/30 hover:text-white">
                <MessageCircle size={16} className="text-mbx-teal shrink-0" />
                <div>
                  <p className="font-bold text-white/70">Live Chat</p>
                  <p className="text-xs text-white/30">Get instant support from our team</p>
                </div>
              </a>
              <Link to="/connect-us" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/5 px-4 py-3 text-sm text-white/50 transition-all hover:border-mbx-teal/30 hover:text-white">
                <Phone size={16} className="text-mbx-teal shrink-0" />
                <div>
                  <p className="font-bold text-white/70">Contact Us</p>
                  <p className="text-xs text-white/30">Reach out to our support specialists</p>
                </div>
              </Link>
              <Link to="/our-insights" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/5 px-4 py-3 text-sm text-white/50 transition-all hover:border-mbx-teal/30 hover:text-white">
                <ArrowRight size={16} className="text-mbx-teal shrink-0" />
                <div>
                  <p className="font-bold text-white/70">Insights</p>
                  <p className="text-xs text-white/30">Explore helpful articles and updates</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Links + Contact */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 py-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-mbx-teal">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight size={11} className="opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-mbx-teal">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+18883706494" className="flex items-center gap-2.5 text-sm text-white/40 hover:text-mbx-teal transition-colors">
                <Phone size={13} /> 888-370-6494
              </a>
              <a href="tel:+15597777919" className="flex items-center gap-2.5 text-sm text-white/40 hover:text-mbx-teal transition-colors">
                <Phone size={13} /> 559-777-7919
              </a>
              <a href="mailto:info@mbxsol.com" className="flex items-center gap-2.5 text-sm text-white/40 hover:text-mbx-teal transition-colors">
                <Mail size={13} /> info@mbxsol.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/40">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                <span>2209 Keltrip Ct, Silver Spring, MD 20906</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} MBX Solutions. All rights reserved. Designed & Developed by <a href="https://hostbax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">HostBax</a>
          </p>
          <div className="flex items-center gap-6 text-xs text-white/25">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
