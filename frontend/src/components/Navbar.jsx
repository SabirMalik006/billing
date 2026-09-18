import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'Company',
    path: '/company',
    children: [
      { heading: 'Company', items: [
        { label: 'Why MBX', path: '/company' },
        { label: 'About Us', path: '/about' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Testimonials', path: '/testimonials' },
        { label: 'HIPAA Compliance', path: '/hipaa' },
        { label: 'Contact Us', path: '/connect-us' },
      ]},
    ],
  },
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
    label: 'Resources',
    path: '/resources',
    children: [
      { heading: 'Resources', items: [
        { label: 'Resource Center', path: '/resources' },
        { label: 'Free Billing Audit', path: '/services#free-audit' },
        { label: 'Compliance (HIPAA)', path: '/hipaa' },
        { label: 'Our Services', path: '/services' },
      ]},
    ],
  },
  {
    label: 'Software',
    path: '/software',
    children: [
      { heading: 'Software', items: [
        { label: 'Billing Software', path: '/software' },
        { label: 'RCM Dashboard', path: '/software#dashboard' },
        { label: 'Coding Tools', path: '/software#coding' },
      ]},
    ],
  },
  {
    label: 'Medical Assistant',
    path: '/medical-assistant',
    children: [
      { heading: 'Medical Assistant', items: [
        { label: 'Virtual Assistant', path: '/medical-assistant' },
        { label: 'Patient Intake', path: '/medical-assistant#intake' },
        { label: 'Scheduling', path: '/medical-assistant#scheduling' },
        { label: 'Insurance Verification', path: '/medical-assistant#verification' },
      ]},
    ],
  },
  {
    label: 'RSM Services',
    path: '/rsm-services',
    children: [
      { heading: 'RSM Services', items: [
        { label: 'Revenue Cycle Management', path: '/rsm-services' },
        { label: 'Medical Coding', path: '/rsm-services#coding' },
        { label: 'AR Follow-up', path: '/rsm-services#ar' },
        { label: 'Denial Management', path: '/rsm-services#denial' },
      ]},
    ],
  },
  {
    label: 'Solution',
    path: '/solution',
    children: [
      { heading: 'Solution', items: [
        { label: 'End-to-End Solution', path: '/solution' },
        { label: 'Billing & Coding', path: '/solution#billing' },
        { label: 'OASIS & QA', path: '/solution#oasis' },
        { label: 'Reporting', path: '/solution#reporting' },
      ]},
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setExpandedMobile(null)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg shadow-black/5"
      >
        <nav className="container mx-auto grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 py-3 md:gap-4 lg:py-4 xl:gap-6">
          <Link to="/" className="relative z-10 shrink-0">
            <img src="https://mbxsol.com/wp-content/uploads/2026/04/MBX-Solutions-Logo-2-e1779169428791.png" alt="MBX Solutions" className="h-8 md:h-10 lg:h-12 w-auto" />
          </Link>

          <div className="hidden min-w-0 items-center justify-center xl:flex">
            {navItems.map((item, idx) => (
              <div key={item.label} className="group relative">
                <div className="flex items-center">
                  <Link
                    to={item.path}
                    className="px-2.5 xl:px-3 py-2.5 text-[13px] xl:text-sm font-semibold text-[#4486BF] hover:text-mbx-navy transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className="-ml-1 text-mbx-text-muted/50 group-hover:text-mbx-text-muted transition-colors"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  )}
                </div>

                {item.children && (
                  <div className={`pointer-events-none invisible absolute z-50 top-full pt-3 opacity-0 scale-y-95 origin-top transition-all duration-250 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:scale-y-100 ${idx >= navItems.length - 2 ? 'right-0' : 'left-0'}`}>
                    <div className={`${item.children.length > 1 ? 'min-w-[22rem]' : 'min-w-[16rem]'} w-max rounded-2xl bg-mbx-navy border border-white/10 shadow-2xl shadow-black/40 p-5`}>
                      {item.children.map((child, idx) => (
                        <div key={idx}>
                          {child.heading && (
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-mbx-teal">{child.heading}</p>
                          )}
                          <ul className={child.heading ? 'mb-4 space-y-1' : 'space-y-1'}>
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

          <div className="flex items-center justify-end gap-2 md:gap-3 shrink-0">
            <Link
              to="/connect-us"
              className="inline-flex items-center gap-2 rounded-xl bg-[#4486BF] px-3 md:px-5 lg:px-6 py-1.5 md:py-2 lg:py-2.5 text-xs md:text-sm font-bold text-white transition-all duration-300 hover:bg-[#3a73a8] hover:shadow-lg hover:shadow-[#4486BF]/20 hover:-translate-y-0.5"
            >
              <span className="hidden sm:inline">Get Free Audit</span>
              <span className="sm:hidden">Free Audit</span>
              <ArrowRight size={12} className="md:w-[14px]" />
            </Link>

            <button
              className="relative z-10 flex size-11 items-center justify-center text-mbx-navy xl:hidden"
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
            className="fixed inset-0 z-40 bg-mbx-navy xl:hidden"
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

      <a
        href="https://wa.me/18883706494"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2 md:size-16"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="animate-whatsapp-ring pointer-events-none absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
        <span className="animate-whatsapp-glow pointer-events-none absolute inset-0 rounded-full" aria-hidden="true" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="relative size-7 md:size-8" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  )
}
