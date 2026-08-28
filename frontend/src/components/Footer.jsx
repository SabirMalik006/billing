import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Capabilities: [
    { label: 'Home Health Billing', path: '/capabilities#home-health' },
    { label: 'Hospice Billing', path: '/capabilities#hospice' },
    { label: 'Virtual Assistance', path: '/capabilities#virtual-assistance' },
    { label: 'Contracting & Credentialing', path: '/capabilities#credentialing' },
    { label: 'QA & Medical Coding', path: '/capabilities#qa-coding' },
    { label: 'AR & Denial Management', path: '/capabilities#ar-denials' },
  ],
  Industries: [
    { label: 'Home Health', path: '/capabilities#home-health' },
    { label: 'Hospice', path: '/capabilities#hospice' },
    { label: 'Private Practice', path: '/capabilities#private-practice' },
    { label: 'Large Groups & Health Systems', path: '/capabilities#large-groups' },
    { label: 'Behavioral Health / ABA', path: '/capabilities#behavioral-health' },
  ],
  Company: [
    { label: 'About MBX', path: '/about' },
    { label: 'Technology & AI', path: '/technology-and-ai' },
    { label: 'Insights', path: '/our-insights' },
    { label: 'Contact', path: '/connect-us' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-mbx-navy-dark">
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="mb-6 inline-block">
              <img src="/logo.jpeg" alt="MBX Solutions" className="h-9 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              Healthcare revenue cycle expertise for organizations that want greater clarity,
              stronger workflows and more time to focus on care.
            </p>
            <div className="mt-6 space-y-2">
              <a href="mailto:info@mbxsol.com" className="block text-sm text-gray-400 hover:text-mbx-teal transition-colors">
                info@mbxsol.com
              </a>
              <a href="https://mbxsol.com" className="block text-sm text-gray-400 hover:text-mbx-teal transition-colors">
                mbxsol.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-mbx-teal">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-mbx-white"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Column */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-mbx-teal">Get Started</h4>
            <p className="mb-4 text-sm text-gray-400">
              Ready to strengthen your revenue cycle?
            </p>
            <Link
              to="/connect-us"
              className="inline-flex items-center gap-2 rounded-lg bg-mbx-teal px-5 py-2.5 text-sm font-semibold text-mbx-white transition-all hover:bg-mbx-teal-light"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} MBX Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-mbx-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-mbx-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
