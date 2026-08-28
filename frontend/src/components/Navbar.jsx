import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const navItems = [
  {
    label: 'Services',
    path: '/services',
    children: [
      { heading: 'Primary', items: [
        { label: 'Home Health Billing', path: '/services#home-health' },
        { label: 'Hospice Billing', path: '/services#hospice' },
      ]},
      { heading: 'Core Services', items: [
        { label: 'Claim Entry', path: '/services#claim-entry' },
        { label: 'Claims Scrubbing & Submission', path: '/services#claims-scrubbing' },
        { label: 'Medical Coding', path: '/services#medical-coding' },
        { label: 'AR Follow-up', path: '/services#ar-followup' },
      ]},
      { heading: 'Specialized', items: [
        { label: 'Denial Management', path: '/services#denial-management' },
        { label: 'Credentialing & Enrollment', path: '/services#credentialing' },
        { label: 'Free Audit', path: '/services#free-audit' },
      ]},
    ],
  },
  {
    label: 'Technology & AI',
    path: '/technology-and-ai',
    children: [
      { label: 'Revenue Analytics', path: '/technology-and-ai#analytics' },
      { label: 'Workflow Automation', path: '/technology-and-ai#automation' },
      { label: 'Claims Intelligence', path: '/technology-and-ai#claims' },
      { label: 'MBX Clarity', path: '/technology-and-ai#clarity' },
    ],
  },
  {
    label: 'Capabilities',
    path: '/capabilities',
    children: [
      { heading: 'Primary', items: [
        { label: 'Home Health Billing', path: '/capabilities#home-health' },
        { label: 'Hospice Billing', path: '/capabilities#hospice' },
      ]},
      { heading: 'Services', items: [
        { label: 'Virtual Assistance', path: '/capabilities#virtual-assistance' },
        { label: 'Contracting & Credentialing', path: '/capabilities#credentialing' },
        { label: 'QA & Medical Coding', path: '/capabilities#qa-coding' },
        { label: 'AR & Denial Management', path: '/capabilities#ar-denials' },
      ]},
      { heading: 'Industries', items: [
        { label: 'Private Practice', path: '/capabilities#private-practice' },
        { label: 'Large Groups & Health Systems', path: '/capabilities#large-groups' },
        { label: 'Behavioral Health / ABA', path: '/capabilities#behavioral-health' },
      ]},
    ],
  },
  { label: 'About', path: '/about' },
  { label: 'Insights', path: '/our-insights' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setExpandedMobile(null)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-mbx-navy/95 backdrop-blur-xl shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-4 lg:py-5">
          <Link to="/" className="relative z-10 flex items-center gap-2.5 shrink-0">
            <img src="/logo.jpeg" alt="MBX Solutions" className="h-8 lg:h-9 w-auto" />
            <span className="hidden sm:block text-sm font-extrabold text-white tracking-tight">MBX Solutions</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <div className="flex items-center">
                  <Link
                    to={item.path}
                    className="px-4 py-2 text-[13px] font-semibold text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className="text-white/40 group-hover:text-white/70 transition-colors"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  )}
                </div>

                {item.children && (
                  <div className="pointer-events-none invisible absolute left-0 top-full z-50 pt-3 opacity-0 scale-y-95 origin-top transition-all duration-250 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:scale-y-100">
                    <div className="min-w-[22rem] w-max rounded-2xl bg-mbx-navy border border-white/10 shadow-2xl shadow-black/40 p-6">
                      {item.children.map((child, idx) => (
                        <div key={idx}>
                          {child.heading && (
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-mbx-teal">{child.heading}</p>
                          )}
                          <ul className={child.heading ? 'mb-5 space-y-1' : 'space-y-1'}>
                            {(child.items || [child]).map((sub, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  to={sub.path}
                                  className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-white/60 transition-all hover:bg-white/5 hover:text-white"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/connect-us"
              className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-mbx-teal px-6 py-2.5 text-[13px] font-bold text-mbx-white transition-all duration-300 hover:bg-mbx-teal-dark hover:shadow-lg hover:shadow-mbx-teal/20 hover:-translate-y-0.5"
            >
              Get Free Audit <ArrowRight size={14} />
            </Link>

            <button
              className="relative z-10 flex size-11 items-center justify-center text-mbx-white lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-mbx-navy lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto pt-28 pb-10 px-8">
              <ul className="space-y-0">
                {navItems.map((item, idx) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="border-b border-white/5"
                  >
                    <div className="flex items-center justify-between py-5">
                      <Link to={item.path} className="text-[1.35rem] font-bold text-white">
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          className="flex size-10 items-center justify-center text-white/40"
                          onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                          aria-expanded={expandedMobile === item.label}
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${expandedMobile === item.label ? 'rotate-180' : ''}`}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.children && expandedMobile === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-5 pl-4 space-y-1">
                            {item.children.map((child, cIdx) => (
                              <div key={cIdx}>
                                {child.heading && (
                                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-mbx-teal pt-3">{child.heading}</p>
                                )}
                                {(child.items || [child]).map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    to={sub.path}
                                    className="block rounded-lg py-2.5 pl-3 text-base text-white/50 transition-colors hover:text-white"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8 space-y-3"
              >
                <Link
                  to="/connect-us"
                  className="flex items-center justify-center gap-2 rounded-xl bg-mbx-teal px-8 py-4 text-lg font-bold text-mbx-white"
                >
                  Get Free Audit <ArrowRight size={18} />
                </Link>
                <Link
                  to="/connect-us"
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-lg font-bold text-white"
                >
                  Let's Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
