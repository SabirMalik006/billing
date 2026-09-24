import { useEffect, useRef, useState } from 'react'
import { FileText, TrendingDown, TrendingUp, Clock, Users, AlertTriangle, Settings, Headset, Award, BarChart3 } from 'lucide-react'

const stats = [
  { icon: FileText, number: 98.5, suffix: '%', label: 'Claim Acceptance Rate' },
  { icon: TrendingDown, number: 30, suffix: '%', label: 'Reduction in Denials' },
  { icon: TrendingUp, number: 30, suffix: '%', label: 'Increase in Revenue' },
  { icon: Clock, number: 5, suffix: '-Days', label: 'Turnaround Time' },
  { icon: Users, number: 99, suffix: '%', label: 'Client Satisfaction Rate' },
  { icon: AlertTriangle, number: 100, suffix: '%', label: 'Reduction in Billing Errors' },
  { icon: Headset, number: 24, suffix: '/7', label: 'Expert Billing Support' },
  { icon: Settings, number: 70, suffix: '%', label: 'Faster Credentialing Process' },
  { icon: Award, number: 15, suffix: '+', label: 'Years of Billing Experience' },
  { icon: BarChart3, number: 33, suffix: '%', label: 'Reduction In A/R' },
]

function CountUp({ target, suffix, delay = 0 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setCount(target); return }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.35 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  useEffect(() => {
    if (!started) return
    let frame = 0
    let start = 0
    let timer = 0
    const duration = 2800
    const step = (timestamp) => {
      if (!start) start = timestamp
      const raw = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - raw, 3)
      setCount(Math.round(eased * target * 10) / 10)
      if (raw < 1) frame = requestAnimationFrame(step)
    }
    timer = setTimeout(() => { frame = requestAnimationFrame(step) }, delay)
    return () => { clearTimeout(timer); cancelAnimationFrame(frame) }
  }, [started, target, delay])

  const text = count % 1 === 0 ? count : count.toFixed(1)
  return <span ref={ref}>{text}{suffix}</span>
}

export default function SectionStatsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-[#EDEDED] overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[34px] font-extrabold text-[#0B3D66] leading-tight mb-3">
            Our Proven Success in{' '}
            <span className="font-normal">Revenue Cycle Management</span>
          </h2>
          {/* Orange underline */}
          <div className="w-[60px] h-[3px] bg-[#F5A623] mx-auto mb-5" />
          <p className="text-[15px] text-mbx-text-muted max-w-2xl mx-auto leading-relaxed">
            Our expertise ensures that the vast majority of claims are accepted on the first submission, reflecting our commitment to excellence and resulting in high client satisfaction rates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center opacity-0 animate-fade-in-up" style={{ animationDelay: `${idx * 60}ms`, animationFillMode: 'forwards' }}>
              <div className="mb-3 flex size-[70px] items-center justify-center rounded-full bg-[#1B4F8C] text-white">
                <stat.icon size={28} />
              </div>
              <p className="text-[32px] font-extrabold text-[#0B3D66] leading-none mb-1">
                <CountUp target={stat.number} suffix={stat.suffix} delay={(idx % 5) * 140} />
              </p>
              <p className="text-[13px] text-mbx-text-muted leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
