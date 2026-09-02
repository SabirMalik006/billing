import { Link } from 'react-router-dom'

function LogoCircle({ children, className = '' }) {
  return (
    <div className={`w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full border-[1.5px] border-[#BFE0F5] flex items-center justify-center bg-white px-1.5 sm:px-2.5 shrink-0 ${className}`}>
      {children}
    </div>
  )
}

export default function SectionEHRLogos() {
  return (
    <section className="py-14 lg:py-20 bg-mbx-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-5 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-[34px] font-bold text-[#0B2F4E] relative inline-block pb-[14px] mb-2">
          EHR Softwares
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-[#F5A623]" />
        </h2>
        <p className="text-sm sm:text-[15px] text-[#6b7280] max-w-[650px] mx-auto mt-[18px] mb-[40px] lg:mb-[55px]">
          We possess extensive experience in handling over 50+ of the most prominent EHR systems in various industries.
        </p>

        {/* ── Desktop: 3-column cluster ── */}
        <div className="hidden lg:flex items-center justify-center gap-[50px] max-w-[1000px] mx-auto">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-[22px]">
            <div className="flex gap-[22px] justify-center">
              <LogoCircle>
                <span className="font-bold text-[12px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#4472C4' }}>
                  <span style={{ color: '#E8A33D' }}>&#9650;</span>AdvancedMD
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[12px] tracking-[-0.2px] text-center leading-[1.1] italic" style={{ color: '#29ABE2' }}>
                  CareCloud<sup className="not-italic text-[7px]">&#174;</sup>
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[12px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#2F8F3F' }}>
                  &#9992; Cerner
                </span>
              </LogoCircle>
            </div>
            <div className="flex gap-[22px] justify-center ml-[50px]">
              <LogoCircle>
                <span className="font-bold text-[12px] tracking-[-0.2px] text-center leading-[1.1] italic" style={{ color: '#4472C4' }}>
                  Collaborate<b className="not-italic">MD</b>
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[12px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#2E75B6' }}>
                  &#9679; Comtron
                </span>
              </LogoCircle>
            </div>
            <div className="flex gap-[22px] justify-center">
              <LogoCircle>
                <span className="font-bold text-[12px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#6C63FF' }}>
                  &#128330; Dovetail
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-extrabold text-[18px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#C8102E' }}>
                  Epic
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[12px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#333' }}>
                  (<span style={{ color: '#2E9E4D' }}>&#9679;</span>) inSync
                </span>
              </LogoCircle>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="w-[180px] h-[180px] shrink-0 flex items-center justify-center">
            <img
              src="/WhatsApp Image 2026-09-02 at 2.16.59 PM.jpeg"
              alt="RCM Matter EHR"
              className="w-[160px] h-[160px] object-contain rounded-full"
              loading="lazy"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-[22px]">
            <div className="flex gap-[22px] justify-center">
              <LogoCircle>
                <span className="font-bold text-[12px] tracking-[-0.2px] text-center leading-[1]" style={{ color: '#0B2F4E' }}>
                  NEXT<br />STEP<small className="block font-medium text-[7px] tracking-[1px] text-[#7a99b3] mt-0.5">SOLUTIONS</small>
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[11px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#0B2F4E' }}>
                  &#9700; Prime<br /><small className="text-[7px]">CLINICAL SYSTEMS</small>
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[12px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#444' }}>
                  dr<span className="font-normal">chrono</span>
                </span>
              </LogoCircle>
            </div>
            <div className="flex gap-[22px] justify-center mr-[50px]">
              <LogoCircle>
                <span className="font-extrabold text-[16px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#1a1a1a' }}>
                  <span style={{ color: '#E8A33D' }}>e</span>MDs
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[10px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#444' }}>
                  eClinicalWorks
                </span>
              </LogoCircle>
            </div>
            <div className="flex gap-[22px] justify-center">
              <LogoCircle>
                <span className="font-bold text-[16px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#F5871F' }}>
                  kareo
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[14px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#6C63FF' }}>
                  |)| webpt
                </span>
              </LogoCircle>
              <LogoCircle>
                <span className="font-bold text-[9px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#7CB342' }}>
                  athenahealth
                </span>
              </LogoCircle>
            </div>
          </div>
        </div>

        {/* ── Mobile/Tablet: stacked layout ── */}
        <div className="lg:hidden">
          {/* Center image */}
          <div className="flex justify-center mb-8">
            <img
              src="/WhatsApp Image 2026-09-02 at 2.16.59 PM.jpeg"
              alt="RCM Matter EHR"
              className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] object-contain rounded-full"
              loading="lazy"
            />
          </div>

          {/* All logos in wrapping grid */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-[500px] mx-auto">
            {/* AdvancedMD */}
            <LogoCircle>
              <span className="font-bold text-[9px] sm:text-[10px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#4472C4' }}>
                <span style={{ color: '#E8A33D' }}>&#9650;</span>AdvancedMD
              </span>
            </LogoCircle>
            {/* CareCloud */}
            <LogoCircle>
              <span className="font-bold text-[9px] sm:text-[10px] tracking-[-0.2px] text-center leading-[1.1] italic" style={{ color: '#29ABE2' }}>
                CareCloud<sup className="not-italic text-[6px]">&#174;</sup>
              </span>
            </LogoCircle>
            {/* Cerner */}
            <LogoCircle>
              <span className="font-bold text-[9px] sm:text-[10px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#2F8F3F' }}>
                &#9992; Cerner
              </span>
            </LogoCircle>
            {/* CollaborateMD */}
            <LogoCircle>
              <span className="font-bold text-[9px] sm:text-[10px] tracking-[-0.2px] text-center leading-[1.1] italic" style={{ color: '#4472C4' }}>
                Collaborate<b className="not-italic">MD</b>
              </span>
            </LogoCircle>
            {/* Comtron */}
            <LogoCircle>
              <span className="font-bold text-[9px] sm:text-[10px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#2E75B6' }}>
                &#9679; Comtron
              </span>
            </LogoCircle>
            {/* Dovetail */}
            <LogoCircle>
              <span className="font-bold text-[9px] sm:text-[10px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#6C63FF' }}>
                &#128330; Dovetail
              </span>
            </LogoCircle>
            {/* Epic */}
            <LogoCircle>
              <span className="font-extrabold text-[14px] sm:text-[16px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#C8102E' }}>
                Epic
              </span>
            </LogoCircle>
            {/* inSync */}
            <LogoCircle>
              <span className="font-bold text-[9px] sm:text-[10px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#333' }}>
                (<span style={{ color: '#2E9E4D' }}>&#9679;</span>) inSync
              </span>
            </LogoCircle>
            {/* NextStep */}
            <LogoCircle>
              <span className="font-bold text-[9px] sm:text-[10px] tracking-[-0.2px] text-center leading-[1]" style={{ color: '#0B2F4E' }}>
                NEXT<small className="block font-medium text-[6px] tracking-[0.5px] text-[#7a99b3]">STEP</small>
              </span>
            </LogoCircle>
            {/* Prime */}
            <LogoCircle>
              <span className="font-bold text-[9px] sm:text-[10px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#0B2F4E' }}>
                Prime<br /><small className="text-[6px]">CLINICAL</small>
              </span>
            </LogoCircle>
            {/* dr chrono */}
            <LogoCircle>
              <span className="font-bold text-[9px] sm:text-[10px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#444' }}>
                dr<span className="font-normal">chrono</span>
              </span>
            </LogoCircle>
            {/* eMDs */}
            <LogoCircle>
              <span className="font-extrabold text-[12px] sm:text-[14px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#1a1a1a' }}>
                <span style={{ color: '#E8A33D' }}>e</span>MDs
              </span>
            </LogoCircle>
            {/* eClinicalWorks */}
            <LogoCircle>
              <span className="font-bold text-[8px] sm:text-[9px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#444' }}>
                eClinicalWorks
              </span>
            </LogoCircle>
            {/* kareo */}
            <LogoCircle>
              <span className="font-bold text-[12px] sm:text-[14px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#F5871F' }}>
                kareo
              </span>
            </LogoCircle>
            {/* webpt */}
            <LogoCircle>
              <span className="font-bold text-[11px] sm:text-[13px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#6C63FF' }}>
                |)| webpt
              </span>
            </LogoCircle>
            {/* athenahealth */}
            <LogoCircle>
              <span className="font-bold text-[8px] sm:text-[9px] tracking-[-0.2px] text-center leading-[1.1]" style={{ color: '#7CB342' }}>
                athenahealth
              </span>
            </LogoCircle>
          </div>
        </div>

        {/* Button */}
        <Link
          to="#"
          className="inline-block mt-10 lg:mt-[50px] bg-[#0B2F4E] text-white font-semibold text-[13px] sm:text-[14px] px-[24px] sm:px-[30px] py-[12px] sm:py-[14px] rounded-[4px] no-underline transition-all duration-300 hover:bg-[#082A4A] hover:shadow-lg"
        >
          Explore Software
        </Link>
      </div>
    </section>
  )
}
