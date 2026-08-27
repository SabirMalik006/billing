import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Search } from 'lucide-react'

const navItems = [
  {
    label: 'Technology & AI',
    path: '/technology-and-ai',
    children: [
      { label: 'CLARITY: AI-Driven Revenue Cycle', path: '/technology-and-ai#clarity' },
      { label: 'SARA: AI-Powered Coding & OASIS', path: '/technology-and-ai#sara' },
      { label: 'Data Analytics & Reporting Tools', path: '/technology-and-ai#analytics' },
    ],
  },
  {
    label: 'Capabilities',
    path: '/capabilities',
    children: [
      {
        heading: 'Markets',
        items: [
          { label: 'Home Health Care', path: '/capabilities#home-health' },
          { label: 'Hospice', path: '/capabilities#hospice' },
          { label: 'Behavioral Health', path: '/capabilities#behavioral-health' },
        ],
      },
      {
        heading: 'Services',
        items: [
          { label: 'Billing', path: '/capabilities#billing' },
          { label: 'Coding & OASIS', path: '/capabilities#coding' },
          { label: 'Compliance & Regulatory Risk', path: '/capabilities#compliance' },
          { label: 'Consulting', path: '/capabilities#consulting' },
          { label: 'Revenue Cycle Management', path: '/capabilities#rcm' },
        ],
      },
    ],
  },
  {
    label: 'Our Insights',
    path: '/our-insights',
    children: [
      { label: 'Blog', path: '/our-insights#blog' },
      { label: 'Case Studies', path: '/our-insights#case-studies' },
      { label: 'eBooks', path: '/our-insights#ebooks' },
      { label: 'White Papers', path: '/our-insights#white-papers' },
      { label: 'Webinars', path: '/our-insights#webinars' },
    ],
  },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Leadership', path: '/about#leadership' },
      { label: 'Our Story', path: '/about#story' },
      { label: 'Our History', path: '/about#history' },
      { label: 'Security & Compliance', path: '/about#security' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setExpandedMobile(null)
  }, [location])

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Utility Nav */}
      <div className="bg-brand-blue-gray">
        <div className="container mx-auto flex items-center justify-end gap-6 px-4 py-2">
          <button className="text-brand-dark-blue hover:text-brand-royal-blue transition-colors" aria-label="Search">
            <Search size={16} />
          </button>
          <Link to="/our-insights" className="text-sm font-semibold text-brand-dark-blue hover:text-brand-royal-blue transition-colors">
            Events
          </Link>
          <a href="#" className="text-sm font-semibold text-brand-dark-blue hover:text-brand-royal-blue transition-colors">
            Careers
          </a>
          <a href="#" className="text-sm font-semibold text-brand-dark-blue hover:text-brand-royal-blue transition-colors">
            Client Login
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-brand-dark-blue" aria-label="Main navigation">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center">
              <svg className="h-8 w-auto" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="30" fontFamily="proxima-nova, sans-serif" fontSize="28" fontWeight="700" fill="#ffffff">
                  SimiTree
                </text>
                <circle cx="185" cy="12" r="6" fill="#e87722" />
                <path d="M182 12 L188 12 M185 9 L185 15" stroke="#ffffff" strokeWidth="1.5" />
              </svg>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-3 lg:flex">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.label} className="group relative">
                  <div className="flex items-center">
                    <Link
                      to={item.path}
                      className="px-3 py-2 text-sm xl:text-base font-semibold text-brand-white hover:text-brand-orange transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        className="ml-1 text-brand-white group-hover:text-brand-orange transition-colors"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <ChevronDown size={14} />
                      </button>
                    )}
                  </div>
                  {item.children && (
                    <div className="pointer-events-none invisible absolute left-0 top-full z-40 -mt-1 min-w-48 w-max origin-top scale-y-95 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:scale-y-100 group-hover:opacity-100">
                      <div className="min-w-[17rem] w-max overflow-hidden rounded-b-md bg-brand-nav-panel shadow-2xl">
                        <div className="px-6 py-5">
                          {item.children.map((child, idx) => (
                            <div key={idx}>
                              {child.heading && (
                                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-royal-blue">{child.heading}</p>
                              )}
                              <ul className={child.heading ? 'mb-4 space-y-3' : 'space-y-4'}>
                                {(child.items || [child]).map((sub, subIdx) => (
                                  <li key={subIdx}>
                                    <Link
                                      to={sub.path}
                                      className="block text-sm leading-6 text-brand-white transition-colors hover:text-brand-orange"
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
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <Link
              to="/connect-us"
              className="ml-4 rounded-md bg-brand-orange px-6 py-2 text-sm font-semibold text-brand-white transition-all hover:bg-orange-600 hover:shadow-lg"
            >
              Connect With Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="flex size-12 items-center justify-center text-brand-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`overflow-hidden border-t border-brand-white/10 bg-brand-dark-blue transition-all duration-300 lg:hidden ${
            mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 pb-10 pt-2">
            <ul>
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-brand-royal-blue/65">
                  <div className="flex items-center justify-between py-4">
                    <Link
                      to={item.path}
                      className="text-lg font-semibold text-brand-white hover:text-brand-orange transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        className="flex size-11 items-center justify-center text-brand-white"
                        onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={expandedMobile === item.label}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${expandedMobile === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedMobile === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pb-5 pt-1">
                        <ul className="space-y-4">
                          {item.children.map((child, idx) => (
                            <div key={idx}>
                              {child.heading && (
                                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-royal-blue pl-4">{child.heading}</p>
                              )}
                              {(child.items || [child]).map((sub, subIdx) => (
                                <li key={subIdx}>
                                  <Link
                                    to={sub.path}
                                    className="block rounded-md py-1 pl-4 text-base text-brand-white transition-colors hover:text-brand-orange"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="border-b border-brand-royal-blue/65 py-4">
              <Link to="/connect-us" className="text-lg font-semibold text-brand-white hover:text-brand-orange transition-colors">
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
