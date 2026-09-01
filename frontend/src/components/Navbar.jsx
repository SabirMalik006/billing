import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
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
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/connect-us' },
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
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg shadow-black/5"
      >
        <nav className="container mx-auto flex items-center justify-between py-2 lg:py-3">
          <Link to="/" className="relative z-10 shrink-0">
            <img src="https://mbxsol.com/wp-content/uploads/2026/04/MBX-Solutions-Logo-2-e1779169428791.png" alt="MBX Solutions" className="h-14 lg:h-16 w-auto" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <div className="flex items-center">
                  <Link
                    to={item.path}
                    className="px-5 py-2.5 text-base font-semibold text-[#4486BF] hover:text-mbx-navy transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className="text-mbx-text-muted/50 group-hover:text-mbx-text-muted transition-colors"
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
              className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-[#4486BF] px-10 py-3.5 text-base font-bold text-white transition-all duration-300 hover:bg-[#3a73a8] hover:shadow-lg hover:shadow-[#4486BF]/20 hover:-translate-y-0.5"
            >
              Get Free Audit <ArrowRight size={14} />
            </Link>

            <button
              className="relative z-10 flex size-12 items-center justify-center text-mbx-navy lg:hidden"
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
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#4486BF] px-8 py-4 text-lg font-bold text-mbx-white"
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
