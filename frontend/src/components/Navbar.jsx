import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const navItems = [
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
  {
    label: 'Insights',
    path: '/our-insights',
  },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Who We Are', path: '/about#who-we-are' },
      { label: 'Our Approach', path: '/about#approach' },
      { label: 'Our Expertise', path: '/about#expertise' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setExpandedMobile(null)
    window.scrollTo(0, 0)
  }, [location])

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
          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center shrink-0">
            <img src="/logo.jpeg" alt="MBX Solutions" className="h-9 lg:h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <div className="flex items-center">
                  <Link
                    to={item.path}
                    className="px-4 py-2 text-sm font-medium text-mbx-white/80 hover:text-mbx-white transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className="text-mbx-white/60 group-hover:text-mbx-white transition-colors"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  )}
                </div>

                {item.children && (
                  <div className="pointer-events-none invisible absolute left-0 top-full z-50 pt-3 opacity-0 scale-y-95 origin-top transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:scale-y-100">
                    <div className="min-w-[20rem] w-max rounded-2xl bg-mbx-navy border border-white/10 shadow-2xl shadow-black/30 p-6">
                      {item.children.map((child, idx) => (
                        <div key={idx}>
                          {child.heading && (
                            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-mbx-teal">{child.heading}</p>
                          )}
                          <ul className={child.heading ? 'mb-5 space-y-2.5' : 'space-y-2.5'}>
                            {(child.items || [child]).map((sub, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  to={sub.path}
                                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 transition-all hover:bg-white/5 hover:text-mbx-white"
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

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/connect-us"
              className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-mbx-teal px-6 py-2.5 text-sm font-semibold text-mbx-white transition-all duration-300 hover:bg-mbx-teal-dark hover:shadow-lg hover:shadow-mbx-teal/25"
            >
              Let's Talk <ArrowRight size={15} />
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
            <div className="flex h-full flex-col overflow-y-auto pt-24 pb-10 px-6">
              <ul className="space-y-1">
                {navItems.map((item, idx) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="border-b border-white/10"
                  >
                    <div className="flex items-center justify-between py-4">
                      <Link
                        to={item.path}
                        className="text-2xl font-bold text-mbx-white"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          className="flex size-10 items-center justify-center text-white/60"
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
                          <div className="pb-4 pl-4 space-y-2">
                            {item.children.map((child, cIdx) => (
                              <div key={cIdx}>
                                {child.heading && (
                                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-mbx-teal pt-2">{child.heading}</p>
                                )}
                                {(child.items || [child]).map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    to={sub.path}
                                    className="block rounded-lg py-2 pl-3 text-base text-white/60 transition-colors hover:text-mbx-white"
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
                className="mt-8"
              >
                <Link
                  to="/connect-us"
                  className="flex items-center justify-center gap-2 rounded-xl bg-mbx-teal px-8 py-4 text-lg font-bold text-mbx-white"
                >
                  Let's Talk <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
