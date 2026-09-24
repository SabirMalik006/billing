import { Link } from 'react-router-dom'
import { ArrowRight, Users } from 'lucide-react'
import { motion, MotionConfig } from 'framer-motion'
import { AnimatedSection } from '../components/Animated'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/teamData'

const featured = teamMembers.slice(0, 8)

const offsets = ['lg:mt-0', 'lg:mt-8', 'lg:mt-4', 'lg:mt-12', 'lg:mt-0', 'lg:mt-8', 'lg:mt-4', 'lg:mt-12']

export default function TeamSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-[#F5FAFD]" />
        <div className="absolute -top-20 -left-32 h-[500px] w-[500px] rounded-full bg-[#4486BF]/15 blur-[140px]" />
        <div className="absolute -bottom-24 -right-24 h-[480px] w-[480px] rounded-full bg-[#8FC5E8]/30 blur-[140px]" />
        <div className="absolute top-1/3 right-1/3 h-[300px] w-[300px] rounded-full bg-white/70 blur-[120px]" />

        <div className="container mx-auto relative z-10">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16 xl:gap-24 items-center">
            <AnimatedSection className="lg:sticky lg:top-36">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-white/80 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-mbx-teal">
                <Users size={13} /> Our People
              </span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-mbx-navy leading-[1.05] md:text-5xl">
                Meet the people behind{' '}
                <span className="text-mbx-teal">exceptional service.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mbx-text-muted">
                A dedicated team of professionals ready to support your organization with experience,
                communication and personal attention.
              </p>

              <div className="mt-10 rounded-2xl border border-mbx-teal/15 bg-gradient-to-br from-white via-[#F3FAFF] to-[#E4F4FC] p-8 shadow-[0_20px_50px_-20px_rgba(11,35,72,0.25)]">
                <p className="text-6xl md:text-7xl font-extrabold tracking-tight text-mbx-navy leading-none">
                  130<span className="text-mbx-teal">+</span>
                </p>
                <p className="mt-3 text-lg font-extrabold text-mbx-navy">
                  Dedicated Assistant Managers
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mbx-text-muted">
                  Available for direct communication whenever you need them — without unnecessary
                  delays or long hold times.
                </p>
                <Link
                  to="/team"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-mbx-teal px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-mbx-teal-dark hover:shadow-lg hover:shadow-mbx-teal/25"
                >
                  Meet Our Full Team <ArrowRight size={15} />
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {featured.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={offsets[i % offsets.length] + (i >= 6 ? ' hidden lg:block' : '')}
                >
                  <TeamCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}