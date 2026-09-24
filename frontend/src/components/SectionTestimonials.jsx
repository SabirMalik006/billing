import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { AnimatedSection } from './Animated'
import { SectionHeading } from './UI'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const fallbackTestimonials = [
  { content: 'MBX Solution has made our entire billing process smooth and hassle-free. Their weekly meetings and consistent communication keep everything aligned and running efficiently.', name: 'Anna Boguslavsky', role: 'Home Health Agency' },
  { content: 'MBX Solution offers a complete, under-one-roof solution for coding QA, and billing. Their team is always responsive to our queries, and our practice operations have become much smoother.', name: 'Jerry M, Owner', role: 'Home Health Agency' },
  { content: 'Our experience with MBX Solution has been excellent. Their proactive communication, efficient billing processes, and reliable follow-ups have made a noticeable difference in our operations.', name: 'Good News, CEO', role: 'Pain Management' },
  { content: 'MBX Solution helped us resolve all our outstanding claims efficiently. Partnering with them was the best decision, and the results have been absolutely worth it.', name: 'Jazzmyn Cook, Owner', role: 'Hospice' },
]

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials)
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    fetch(`${API}/api/testimonials`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setTestimonials(data.map((t) => ({ content: t.content, name: t.name, role: t.role || '', rating: t.rating || 5 })))
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (paused || testimonials.length < 2) return
    const id = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(id)
  }, [paused, testimonials.length])

  const safeActive = Math.min(active, testimonials.length - 1)

  const go = (dir) => setActive((a) => (a + dir + testimonials.length) % testimonials.length)

  return (
    <section className="py-28 lg:py-36 bg-mbx-white">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Real feedback from healthcare organizations that trust MBX Solutions with their revenue cycle."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto max-w-4xl">
            {loading ? (
              <div className="flex justify-center py-16">
                <div className="inline-block size-8 border-4 border-mbx-teal border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div
                className="relative rounded-2xl border border-mbx-border bg-mbx-surface p-8 lg:p-12"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="absolute top-8 left-8 text-6xl text-mbx-teal/10 font-serif leading-none">"</div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-5 pl-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} viewBox="0 0 20 20" fill="currentColor" className={`size-5 ${s < (testimonials[safeActive]?.rating || 5) ? 'text-mbx-teal' : 'text-mbx-border'}`}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.958z" />
                      </svg>
                    ))}
                  </div>
                  <motion.p
                    key={safeActive}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg md:text-xl text-mbx-navy leading-relaxed mb-8 pl-4"
                  >
                    {testimonials[safeActive]?.content || testimonials[0]?.content}
                  </motion.p>
                  <div className="flex items-center justify-between gap-4 pl-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-mbx-teal/10 text-mbx-teal font-bold text-lg">
                        {(testimonials[safeActive]?.name || 'M').charAt(0)}
                      </div>
                      <div>
                        <p className="font-extrabold text-mbx-navy">{testimonials[safeActive]?.name}</p>
                        <p className="text-sm text-mbx-text-muted">{testimonials[safeActive]?.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => go(-1)}
                        aria-label="Previous testimonial"
                        className="flex size-10 items-center justify-center rounded-full border border-mbx-border bg-mbx-white text-mbx-navy transition-all hover:border-mbx-teal hover:text-mbx-teal"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={() => go(1)}
                        aria-label="Next testimonial"
                        className="flex size-10 items-center justify-center rounded-full border border-mbx-border bg-mbx-white text-mbx-navy transition-all hover:border-mbx-teal hover:text-mbx-teal"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`size-2.5 rounded-full transition-all duration-300 ${
                    safeActive === i ? 'bg-mbx-teal w-8' : 'bg-mbx-border hover:bg-mbx-teal/30'
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 rounded-full border border-mbx-navy/20 bg-mbx-white px-7 py-3.5 text-sm font-extrabold text-mbx-navy transition-all duration-300 hover:border-mbx-teal hover:text-mbx-teal"
              >
                View All Testimonials
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}