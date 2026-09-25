import { useLayoutEffect, useRef, useState } from 'react'
import { AnimatedSection } from './Animated'
import { SectionHeading, PrimaryButton } from './UI'
import { SOFTWARE_PARTNERS } from '../data/softwarePartners'

/**
 * Typographic wordmarks for software brands where an official logo asset
 * is not available in /public. Each entry preserves the brand's own
 * capitalization / visual treatment instead of inventing a fake logo.
 */
const WORDMARKS = {
  advancedmd: (
    <span className="whitespace-nowrap font-extrabold text-[15px] sm:text-[16px] leading-[1.15] tracking-tight" style={{ color: '#4472C4' }}>
      <span style={{ color: '#E8A33D' }}>&#9650;</span>AdvancedMD
    </span>
  ),
  carecloud: (
    <span className="whitespace-nowrap font-extrabold text-[15px] sm:text-[16px] leading-[1.15] tracking-tight italic" style={{ color: '#29ABE2' }}>
      CareCloud<sup className="not-italic text-[9px]">&#174;</sup>
    </span>
  ),
  cerner: (
    <span className="whitespace-nowrap font-extrabold text-[15px] sm:text-[16px] leading-[1.15] tracking-tight" style={{ color: '#2F8F3F' }}>
      &#9992; Cerner
    </span>
  ),
  collaboratemd: (
    <span className="whitespace-nowrap font-extrabold text-[15px] sm:text-[16px] leading-[1.15] tracking-tight italic" style={{ color: '#4472C4' }}>
      Collaborate<span className="not-italic font-black">MD</span>
    </span>
  ),
  comtron: (
    <span className="whitespace-nowrap font-extrabold text-[15px] sm:text-[16px] leading-[1.15] tracking-tight" style={{ color: '#2E75B6' }}>
      <span className="text-[12px] align-middle">&#9679;</span> Comtron
    </span>
  ),
  dovetail: (
    <span className="whitespace-nowrap font-extrabold text-[15px] sm:text-[16px] leading-[1.15] tracking-tight" style={{ color: '#6C63FF' }}>
      <span className="text-[14px]">&#128330;</span> Dovetail
    </span>
  ),
  epic: (
    <span className="whitespace-nowrap font-black text-[20px] sm:text-[22px] leading-[1.15] tracking-tight" style={{ color: '#C8102E' }}>
      Epic
    </span>
  ),
  insync: (
    <span className="whitespace-nowrap font-extrabold text-[15px] sm:text-[16px] leading-[1.15] tracking-tight" style={{ color: '#333333' }}>
      (<span className="text-[12px]" style={{ color: '#2E9E4D' }}>&#9679;</span>) inSync
    </span>
  ),
  nextstep: (
    <span className="font-extrabold text-[15px] sm:text-[16px] leading-[1.05] tracking-tight text-center" style={{ color: '#0B2F4E' }}>
      NEXT<br />STEP
      <small className="mt-1 block font-semibold text-[8px] tracking-[2px]" style={{ color: '#7A99B3' }}>SOLUTIONS</small>
    </span>
  ),
  primeclinical: (
    <span className="font-extrabold text-[15px] sm:text-[16px] leading-[1.05] tracking-tight text-center" style={{ color: '#0B2F4E' }}>
      Prime
      <small className="block font-bold text-[8px] tracking-[1.5px] mt-1" style={{ color: '#5A6B82' }}>CLINICAL SYSTEMS</small>
    </span>
  ),
  drchrono: (
    <span className="whitespace-nowrap font-extrabold text-[15px] sm:text-[16px] leading-[1.15] tracking-tight" style={{ color: '#444444' }}>
      dr<span className="font-normal">chrono</span>
    </span>
  ),
  emds: (
    <span className="whitespace-nowrap font-black text-[18px] sm:text-[19px] leading-[1.15] tracking-tight" style={{ color: '#1A1A1A' }}>
      <span style={{ color: '#E8A33D' }}>e</span>MDs
    </span>
  ),
  eclinicalworks: (
    <span className="whitespace-nowrap font-extrabold text-[13px] sm:text-[14px] leading-[1.15] tracking-tight" style={{ color: '#444444' }}>
      eClinicalWorks
    </span>
  ),
  kareo: (
    <span className="whitespace-nowrap font-extrabold text-[17px] sm:text-[18px] leading-[1.15] tracking-tight" style={{ color: '#F5871F' }}>
      kareo
    </span>
  ),
  webpt: (
    <span className="whitespace-nowrap font-extrabold text-[15px] sm:text-[16px] leading-[1.15] tracking-tight" style={{ color: '#6C63FF' }}>
      |)| webpt
    </span>
  ),
  athenahealth: (
    <span className="whitespace-nowrap font-extrabold text-[13px] sm:text-[14px] leading-[1.15] tracking-tight" style={{ color: '#7CB342' }}>
      athenahealth
    </span>
  ),
}

function SoftwareCard({ partner }) {
  return (
    <div className="mr-4 flex h-[112px] w-[230px] shrink-0 items-center justify-center rounded-2xl border border-mbx-border bg-white px-6 shadow-[0_4px_14px_rgba(11,35,72,0.07)] transition-all duration-300 hover:border-mbx-teal/40 hover:shadow-lg hover:shadow-mbx-navy/10 sm:mr-5 sm:h-[132px] sm:w-[260px]">
      {partner.image ? (
        <img
          src={partner.image}
          alt={partner.alt}
          loading="lazy"
          className="max-h-[60px] max-w-[160px] object-contain sm:max-h-[72px]"
        />
      ) : (
        <div className="flex items-center justify-center">
          {WORDMARKS[partner.id] ?? (
            <span className="font-extrabold text-[15px] text-mbx-navy">{partner.name}</span>
          )}
        </div>
      )}
    </div>
  )
}

/**
 * One infinite smooth-scrolling marquee row (classic duplicated-strip CSS
 * marquee).
 *
 * The partner list is repeated an even number of times — enough to cover the
 * viewport at least twice — and the strip animates translateX by exactly -50%
 * of its own width, i.e. a whole number of copies. Cards are identical across
 * copies, so the wrap-around is invisible and the loop never ends.
 *
 * direction="right" → cards flow left→right (marquee-left keyframes)
 * direction="left"  → cards flow right→left (marquee-right keyframes)
 */
function MarqueeRow({ partners, direction = 'left', duration = 40 }) {
  const copyRef = useRef(null)
  const [copies, setCopies] = useState(2)

  useLayoutEffect(() => {
    const update = () => {
      const w = copyRef.current?.offsetWidth ?? 0
      if (w > 0) setCopies(Math.max(2, 2 * Math.ceil(window.innerWidth / w)))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div className="marquee-mask marquee-hover-pause overflow-hidden">
      <div
        className="marquee-strip flex w-max"
        style={{
          animation: `${direction === 'right' ? 'marquee-left' : 'marquee-right'} ${duration}s linear infinite`,
        }}
      >
        {Array.from({ length: copies }).map((_, copy) => (
          <div ref={copy === 0 ? copyRef : undefined} key={copy} className="flex">
            {partners.map((partner) => (
              <SoftwareCard key={partner.id} partner={partner} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SectionEHRLogos() {
  const ROW_SPLIT = 9 // first row gets the first 9, second row the rest

  return (
    <section className="bg-mbx-surface py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto">
        {/* Heading + description */}
        <AnimatedSection>
          <SectionHeading
            title="EHR Softwares"
            subtitle="At MBX Solutions, we possess extensive experience in handling over 50+ of the most prominent EHR systems in various industries."
          />
        </AnimatedSection>

        {/* Two infinite marquee rows — top: left→right, bottom: right→left */}
        <AnimatedSection delay={0.1}>
          <div className="mt-4 flex flex-col gap-4 sm:gap-5">
            <MarqueeRow
              partners={SOFTWARE_PARTNERS.slice(0, ROW_SPLIT)}
              direction="right"
              duration={46}
            />
            <MarqueeRow
              partners={SOFTWARE_PARTNERS.slice(ROW_SPLIT)}
              direction="left"
              duration={42}
            />
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.15}>
          <div className="mt-12 text-center lg:mt-14">
            <PrimaryButton to="/software" size="lg">Explore Software</PrimaryButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
