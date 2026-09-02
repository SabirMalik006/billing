import { Link } from 'react-router-dom'

function LogoCircle({ children, className = '' }) {
  return (
    <div className={`w-[100px] h-[100px] rounded-full border-[1.5px] border-[#BFE0F5] flex items-center justify-center bg-white px-2.5 shrink-0 ${className}`}>
      {children}
    </div>
  )
}

export default function SectionEHRLogos() {
  return (
    <section className="py-16 lg:py-20 bg-mbx-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-5 text-center">
        {/* Heading */}
        <h2 className="text-[34px] font-bold text-[#0B2F4E] relative inline-block pb-[14px] mb-2">
          EHR Softwares
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-[#F5A623]" />
        </h2>
        <p className="text-[15px] text-[#6b7280] max-w-[650px] mx-auto mt-[18px] mb-[55px]">
          We possess extensive experience in handling over 50+ of the most prominent EHR systems in various industries.
        </p>

        {/* Cluster */}
        <div className="flex items-center justify-center gap-[60px] flex-nowrap max-w-[900px] mx-auto">

          {/* ── LEFT SIDE ── */}
          <div className="flex flex-col gap-[26px]">
            {/* Row 1 */}
            <div className="flex gap-[26px] justify-center">
              <LogoCircle>
                <span className="font-bold text-[13px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#4472C4' }}>
                  <span style={{ color: '#E8A33D' }}>&#9650;</span>AdvancedMD
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[13px] tracking-[-0.2px] text-center leading-[1.1] italic" style={{ color: '#29ABE2' }}>
                  CareCloud<sup className="not-italic text-[8px]">&#174;</sup>
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[13px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#2F8F3F' }}>
                  &#9992; Cerner
                </span>
              </LogoCircle>
            </div>
            {/* Row 2 — offset */}
            <div className="flex gap-[26px] justify-center ml-[60px]">
              <LogoCircle>
                <span className="font-bold text-[13px] tracking-[-0.2px] text-center leading-[1.1] italic" style={{ color: '#4472C4' }}>
                  Collaborate<b className="not-italic">MD</b>
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[13px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#2E75B6' }}>
                  &#9679; Comtron
                </span>
              </LogoCircle>
            </div>
            {/* Row 3 */}
            <div className="flex gap-[26px] justify-center">
              <LogoCircle>
                <span className="font-bold text-[13px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#6C63FF' }}>
                  &#128330; Dovetail
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-extrabold text-[20px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#C8102E' }}>
                  Epic
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[13px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#333' }}>
                  (<span style={{ color: '#2E9E4D' }}>&#9679;</span>) inSync
                </span>
              </LogoCircle>
            </div>
          </div>

          {/* ── CENTER MARK (RCM Matter Logo) ── */}
          <div className="w-[170px] h-[170px] shrink-0 flex items-center justify-center">
            <img
              src="https://rcmmatter.com/_next/static/media/RCM%20Matter%20Symbol.4610dd4a.svg"
              alt="RCM Matter"
              className="w-[140px] h-[140px] object-contain"
              loading="lazy"
            />
          </div>

          {/* ── RIGHT SIDE ── */}
          <div className="flex flex-col gap-[26px]">
            {/* Row 1 */}
            <div className="flex gap-[26px] justify-center">
              <LogoCircle>
                <span className="font-bold text-[14px] tracking-[-0.2px] text-center leading-[1]" style={{ color: '#0B2F4E' }}>
                  NEXT<br />STEP<small className="block font-medium text-[8px] tracking-[1px] text-[#7a99b3] mt-0.5">SOLUTIONS</small>
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[13px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#0B2F4E' }}>
                  &#9700; Prime<br /><small className="text-[8px]">CLINICAL SYSTEMS</small>
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[14px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#444' }}>
                  dr<span className="font-normal">chrono</span>
                </span>
              </LogoCircle>
            </div>
            {/* Row 2 — offset */}
            <div className="flex gap-[26px] justify-center mr-[60px]">
              <LogoCircle>
                <span className="font-extrabold text-[18px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#1a1a1a' }}>
                  <span style={{ color: '#E8A33D' }}>e</span>MDs
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[11.5px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#444' }}>
                  eClinicalWorks
                </span>
              </LogoCircle>
            </div>
            {/* Row 3 */}
            <div className="flex gap-[26px] justify-center">
              <LogoCircle>
                <span className="font-bold text-[18px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#F5871F' }}>
                  kareo
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[16px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#6C63FF' }}>
                  |)| webpt
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[11px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#7CB342' }}>
                  athenahealth
                </span>
              </LogoCircle>
            </div>
          </div>
        </div>

        {/* Button */}
        <Link
          to="#"
          className="inline-block mt-[50px] bg-[#0B2F4E] text-white font-semibold text-[14px] px-[30px] py-[14px] rounded-[4px] no-underline transition-all duration-300 hover:bg-[#082A4A] hover:shadow-lg"
        >
          Explore Software
        </Link>
      </div>

      {/* Mobile: wrap layout */}
      <style>{`
        @media (max-width: 900px) {
          .flex.flex-col.gap-\\[26px\\] { flex-wrap: wrap; }
        }
      `}</style>
    </section>
  )
}
