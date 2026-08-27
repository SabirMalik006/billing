import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, BookOpen, FileText, Video, Wrench } from 'lucide-react'
import { SectionHeader } from '../components/UI'

const categories = [
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'case-studies', label: 'Case Studies', icon: FileText },
  { id: 'ebooks', label: 'eBooks', icon: BookOpen },
  { id: 'white-papers', label: 'White Papers', icon: FileText },
  { id: 'webinars', label: 'Webinars', icon: Video },
  { id: 'pdgm-tools', label: 'PDGM Tools', icon: Wrench },
]

const posts = [
  { category: 'blog', title: 'How AI is Transforming Home Health Coding in 2026', date: 'Aug 20, 2026', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop' },
  { category: 'case-study', title: 'Regional Agency Achieves 95% Clean Claims Rate', date: 'Aug 15, 2026', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop' },
  { category: 'white-paper', title: 'PDGM 2.0: What Home Health Leaders Need to Know', date: 'Aug 10, 2026', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop' },
  { category: 'blog', title: 'Top 5 Compliance Challenges in Hospice 2026', date: 'Aug 5, 2026', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop' },
  { category: 'webinar', title: 'Maximizing Revenue with AI-Driven Analytics', date: 'Jul 28, 2026', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop' },
  { category: 'ebook', title: 'The Complete Guide to Home Health Billing', date: 'Jul 20, 2026', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop' },
  { category: 'case-study', title: 'How One Hospice Reduced Denials by 60%', date: 'Jul 15, 2026', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop' },
  { category: 'blog', title: 'Behavioral Health Billing Best Practices', date: 'Jul 10, 2026', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop' },
  { category: 'white-paper', title: 'The Future of AI in Home Healthcare', date: 'Jul 5, 2026', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop' },
]

export default function Insights() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark-blue via-brand-blue to-brand-royal-blue py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-orange/20 px-4 py-1 text-sm font-semibold text-brand-orange">
              Our Insights
            </span>
            <h1 className="mb-6 text-4xl font-bold text-brand-white md:text-5xl">
              Knowledge & Thought Leadership
            </h1>
            <p className="text-lg text-brand-blue-gray leading-relaxed">
              Stay informed with our latest research, case studies, and expert perspectives
              on healthcare technology and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-brand-dark-blue">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-brand-dark-blue transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <cat.icon size={14} /> {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-brand-cream py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-[10px] bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-white capitalize">
                    {post.category.replace('-', ' ')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} /> {post.date}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-brand-dark-blue group-hover:text-brand-orange transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
                    Read More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
