import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Search } from 'lucide-react'
import { AnimatedSection, StaggerChildren, StaggerItem } from '../components/Animated'
import { SectionHeading } from '../components/UI'

const categories = ['All', 'Home Health', 'Hospice', 'Medical Billing', 'Coding', 'RCM', 'Credentialing', 'Technology']

const posts = [
  { category: 'Home Health', title: 'Understanding PDGM: What Home Health Leaders Need to Know', date: 'Aug 20, 2026', readTime: '8 min read', excerpt: 'A practical guide to Patient-Driven Groupings Model and its impact on home health billing workflows.' },
  { category: 'Hospice', title: 'NOE and NOTR: Hospice Billing Essentials', date: 'Aug 15, 2026', readTime: '6 min read', excerpt: 'Key considerations for Notice of Election and Notice of Termination in hospice revenue management.' },
  { category: 'RCM', title: 'The Revenue Cycle: From Intake to Payment', date: 'Aug 10, 2026', readTime: '10 min read', excerpt: 'A comprehensive overview of healthcare revenue cycle stages and where optimization opportunities exist.' },
  { category: 'Coding', title: 'Medical Coding Accuracy and Revenue Integrity', date: 'Aug 5, 2026', readTime: '7 min read', excerpt: 'How documentation quality directly impacts coding accuracy and downstream revenue performance.' },
  { category: 'Technology', title: 'Technology-Enabled RCM: A Modern Approach', date: 'Jul 28, 2026', readTime: '9 min read', excerpt: 'How healthcare organizations are leveraging technology to improve revenue cycle visibility and efficiency.' },
  { category: 'Credentialing', title: 'Provider Credentialing: Common Pitfalls and Solutions', date: 'Jul 20, 2026', readTime: '6 min read', excerpt: 'Streamlining the payer enrollment process and avoiding delays that impact revenue.' },
  { category: 'Home Health', title: 'LUPA Management Strategies for Home Health Agencies', date: 'Jul 15, 2026', readTime: '7 min read', excerpt: 'Practical approaches to managing Low Utilization Payment Adjustments and optimizing visit utilization.' },
  { category: 'Hospice', title: 'Hospice Revenue Codes: A Practical Guide', date: 'Jul 10, 2026', readTime: '8 min read', excerpt: 'Understanding revenue code workflows for Routine Home Care, GIP, and Respite.' },
  { category: 'RCM', title: 'Denial Management Best Practices', date: 'Jul 5, 2026', readTime: '6 min read', excerpt: 'Proactive strategies for identifying, preventing, and appealing claim denials.' },
]

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-mbx-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
          <div className="absolute top-1/2 -right-32 h-80 w-80 rounded-full bg-mbx-teal/8 blur-[120px]" />
        </div>
        <div className="container mx-auto relative z-10 px-4 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <AnimatedSection>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-mbx-teal">
              Insights
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-mbx-white md:text-5xl lg:text-6xl">
              Knowledge & Thought Leadership
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Expert perspectives on healthcare revenue cycle management, billing, coding,
              and operational excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[72px] z-30 bg-mbx-white border-b border-mbx-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-mbx-navy text-mbx-white'
                      : 'bg-mbx-surface text-mbx-text-muted hover:bg-mbx-border hover:text-mbx-navy border border-mbx-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-mbx-text-muted" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-mbx-border bg-mbx-surface pl-9 pr-4 py-2.5 text-sm outline-none focus:border-mbx-teal focus:ring-1 focus:ring-mbx-teal/20 transition-all sm:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 lg:py-24 bg-mbx-surface min-h-[50vh]">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-mbx-text-muted">No articles found matching your criteria.</p>
            </div>
          ) : (
            <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
              {filtered.map((post, index) => (
                <StaggerItem key={index}>
                  <article className="group flex h-full flex-col rounded-2xl border border-mbx-border bg-mbx-white p-7 transition-all duration-300 hover:shadow-xl hover:border-mbx-teal/30 hover:-translate-y-1">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-full bg-mbx-teal/10 px-3 py-1 text-xs font-semibold text-mbx-teal">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-mbx-text-muted">
                        <Calendar size={12} /> {post.date}
                      </span>
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-mbx-navy group-hover:text-mbx-teal transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-mbx-text-muted line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-mbx-text-muted">{post.readTime}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-mbx-teal">
                        Read <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerChildren>
          )}
        </div>
      </section>
    </>
  )
}
