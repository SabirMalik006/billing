import { useEffect, useRef, useState } from 'react'
import { FileText, TrendingDown, TrendingUp, Clock, Users, AlertTriangle, UserCheck, Settings, Diamond, BarChart3 } from 'lucide-react'

const stats = [
  { icon: FileText, number: 98, suffix: '%', label: 'Claim Acceptance Rate' },
  { icon: TrendingDown, number: 30, suffix: '%', label: 'Reduction in Denials' },
  { icon: TrendingUp, number: 20, suffix: '%', label: 'Increase in Revenue' },
  { icon: Clock, number: 5, suffix: '-Days', label: 'Turnaround Time' },
  { icon: Users, number: 95, suffix: '%', label: 'Client Satisfaction Rate' },
  { icon: AlertTriangle, number: 90, suffix: '%', label: 'Reduction in Billing Errors' },
  { icon: UserCheck, number: 99, suffix: '%', label: 'Customer Retention' },
  { icon: Settings, number: 70, suffix: '%', label: 'Faster Credentialing Process' },
  { icon: Diamond, number: 10, suffix: '-15%', label: 'Value Of Claims Processed In 2023' },
  { icon: BarChart3, number: 33, suffix: '%', label: 'Reduction In A/R' },
]

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setCount(target); return }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  useEffect(() => {
    if (!started) return
    let start = 0
    const duration = 2000
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target])

  return <span ref={ref}>{count}{suffix}</span>
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
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-3 flex size-[70px] items-center justify-center rounded-full bg-[#1B4F8C] text-white">
                <stat.icon size={28} />
              </div>
              <p className="text-[32px] font-extrabold text-[#0B3D66] leading-none mb-1">
                <CountUp target={stat.number} suffix={stat.suffix} />
              </p>
              <p className="text-[13px] text-mbx-text-muted leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
