import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const letters = [
  {
    letter: 'R',
    text: 'Reducing overhead costs through efficient outsourcing can streamline your practice\'s financial health, allowing you to focus on patient care rather than administrative tasks.',
  },
  {
    letter: 'C',
    text: 'Choosing a reliable billing partner, such as our',
    link: { label: 'Outsourced Credentialing Services', path: '/services#credentialing' },
    textAfter: ', ensures compliance and maximizes revenue cycles. We are well-versed in coding updates, preventing costly mistakes and denials.',
  },
  {
    letter: 'M',
    text: 'Managing claims effectively with outsourced services improves patient satisfaction and accelerates payments. We ensure faster and more accurate claims processing with',
    link: { label: 'Insurance Eligibility Verification', path: '/services#insurance' },
    textAfter: ' services.',
  },
]

/* Animated ECG heartbeat line between two circles */
function HeartbeatLine({ direction = 'right' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="absolute top-1/2 -translate-y-1/2 z-0 hidden md:block"
      style={{
        left: direction === 'right' ? 'calc(33.33% - 10px)' : 'calc(66.66% - 10px)',
        width: 'calc(33.33% + 20px)',
      }}
    >
      <svg
        viewBox="0 0 300 60"
        fill="none"
        className="w-full h-[60px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Straight base line */}
        <motion.line
          x1="0" y1="30" x2="300" y2="30"
          stroke="#0B3D66"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        {/* Heartbeat pulse */}
        <motion.polyline
          points="100,30 120,30 130,10 145,50 160,5 175,50 190,30 200,30"
          stroke="#E53935"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
        />
        {/* Glow on the pulse */}
        <motion.polyline
          points="100,30 120,30 130,10 145,50 160,5 175,50 190,30 200,30"
          stroke="#E53935"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

/* Single animated letter badge + text */
function LetterCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center text-center relative z-10"
    >
      {/* Pulsing outer ring */}
      <motion.div
        className="mb-6 relative"
        animate={isInView ? { scale: [1, 1.08, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-[#29ABE2]/10 animate-ping" style={{ animationDuration: '3s' }} />
        {/* Circle badge */}
        <div className="relative flex size-[100px] items-center justify-center rounded-full border-[3px] border-[#0B3D66] bg-[#E8F4FD] shadow-lg shadow-[#0B3D66]/10">
          <span className="text-[42px] font-extrabold text-[#0B3D66]">{item.letter}</span>
        </div>
      </motion.div>

      {/* Vertical connector */}
      <motion.div
        className="w-[3px] h-8 bg-gradient-to-b from-[#0B3D66] to-[#29ABE2] mb-6 rounded-full"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.25 + 0.3 }}
        style={{ transformOrigin: 'top' }}
      />

      {/* Text card */}
      <motion.div
        className="bg-white rounded-xl p-5 shadow-md shadow-[#0B3D66]/5 border border-[#DEE4EB] max-w-[320px]"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.25 + 0.4 }}
      >
        <p className="text-[14px] leading-[1.7] text-mbx-text-muted">
          {item.text}
          {item.link && (
            <Link to={item.link.path} className="text-[#29ABE2] hover:text-[#0B3D66] font-bold transition-colors duration-300 underline decoration-dotted underline-offset-2">
              {' '}{item.link.label}{' '}
            </Link>
          )}
          {item.textAfter || ''}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function SectionRCMTimeline() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-mbx-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#1B6FA8] via-[#29ABE2] to-[#1B6FA8]" />

      <div className="container mx-auto pt-16">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold text-[#29ABE2] mb-2 tracking-wide uppercase">RCM Letter</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3D66] leading-tight mb-2">
            What Does <span className="text-[#29ABE2]">RCM</span> Stand For?
          </h2>
          <div className="w-[60px] h-[3px] bg-[#F5A623] mx-auto" />
        </motion.div>

        {/* Desktop: 3 columns with heartbeat lines */}
        <div className="hidden md:block max-w-5xl mx-auto relative min-h-[420px]">
          {/* Heartbeat lines layer - positioned between circles */}
          <HeartbeatLine direction="right" />
          <HeartbeatLine direction="left" />

          {/* Letter cards */}
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {letters.map((item, idx) => (
              <LetterCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>

        {/* Mobile: stacked with animated connectors */}
        <div className="md:hidden max-w-md mx-auto relative">
          {letters.map((item, idx) => (
            <div key={idx}>
              <LetterCard item={item} index={idx} />
              {/* Mobile connector between items */}
              {idx < letters.length - 1 && (
                <div className="flex justify-center my-4">
                  <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
                    <motion.line
                      x1="20" y1="0" x2="20" y2="50"
                      stroke="#0B3D66"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.6, delay: idx * 0.3 + 0.5 }}
                    />
                    <motion.polyline
                      points="12,25 20,15 28,25"
                      stroke="#E53935"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: idx * 0.3 + 0.8 }}
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
