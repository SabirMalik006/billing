import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../components/Animated'
import { Star, Quote } from 'lucide-react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const fallbackTestimonials = [
  {
    name: 'Jazzmyn Cook',
    role: 'Hospice Director',
    content: 'MBX Solutions transformed our hospice billing operations. Their deep understanding of hospice-specific workflows and dedication to accuracy has significantly improved our revenue cycle. We saw a marked improvement in claim acceptance rates within the first quarter.',
    rating: 5,
  },
  {
    name: 'Anna Boguslavsky',
    role: 'Home Health Agency Owner',
    content: 'Working with MBX has been a game-changer for our home health agency. Their team handles everything from OASIS reviews to claim submissions with exceptional precision. The reduced denials and faster payments have made a real difference in our cash flow.',
    rating: 5,
  },
  {
    name: 'Jerry M',
    role: 'Home Health Operator',
    content: 'MBX Solutions provides reliable, accurate billing support that we can count on. Their team is responsive, knowledgeable, and genuinely invested in our success. I recommend them to any home health organization looking for a trusted billing partner.',
    rating: 5,
  },
  {
    name: 'Good News CEO',
    role: 'Pain Management Practice',
    content: 'Switching to MBX was the best decision we made for our practice. Their attention to detail in coding and billing has maximized our reimbursements while keeping us fully compliant. The team feels like an extension of our own staff.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/api/testimonials`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) setTestimonials(data)
        else setTestimonials(fallbackTestimonials)
        setLoading(false)
      })
      .catch(() => {
        setTestimonials(fallbackTestimonials)
        setLoading(false)
      })
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-mbx-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
          <div className="hero-grid absolute inset-0" />
        </div>
        <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <AnimatedSection>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-white/80">
              Testimonials
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              What Our <span className="text-[#4486BF]">Clients Say</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              Real feedback from healthcare organizations that trust MBX Solutions for their revenue cycle management.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-28 lg:py-36 bg-mbx-white">
        <div className="container mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block size-8 border-4 border-[#4486BF] border-t-transparent rounded-full animate-spin" />
              <p className="mt-4 text-mbx-text-muted">Loading testimonials...</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <AnimatedSection key={t._id || t.name} delay={i * 0.08}>
                  <div className="group relative rounded-2xl border border-mbx-border bg-white p-8 transition-all duration-500 hover:shadow-xl hover:border-[#4486BF]/30 hover:-translate-y-1 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#4486BF] to-[#5A9AD0] transition-all duration-500 group-hover:w-full" />
                    <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#4486BF]/10 text-[#4486BF]">
                      <Quote size={22} />
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating || 5)].map((_, j) => (
                        <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-mbx-text-muted mb-6">&ldquo;{t.content}&rdquo;</p>
                    <div className="border-t border-mbx-border pt-5">
                      <p className="text-base font-extrabold text-mbx-navy">{t.name}</p>
                      {t.role && <p className="text-sm text-[#4486BF] font-medium">{t.role}</p>}
                      {t.source === 'user' && (
                        <span className="mt-1 inline-block rounded-full bg-[#4486BF]/10 px-2.5 py-0.5 text-[9px] font-bold text-[#4486BF] uppercase tracking-wider">Client Review</span>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-mbx-surface">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-mbx-navy mb-4">
              Ready to Experience the MBX Difference?
            </h2>
            <p className="text-lg text-mbx-text-muted max-w-2xl mx-auto mb-8">
              Join the growing number of healthcare organizations that trust MBX Solutions for their revenue cycle management.
            </p>
            <a href="/connect-us" className="inline-flex items-center gap-2.5 rounded-xl bg-[#4486BF] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#3a73a8] hover:shadow-lg hover:shadow-[#4486BF]/20 hover:-translate-y-0.5">
              Get Started Today
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
