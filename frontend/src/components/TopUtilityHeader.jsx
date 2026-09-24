import { Link } from 'react-router-dom'
import { Mail, Phone, Clock, ShieldCheck, ArrowRight } from 'lucide-react'

const announceContainer = 'container mx-auto flex'
const iconProps = { size: 13, strokeWidth: 2 }

export function TopAnnouncementBar() {
  return (
      <div className="border-b border-white/10 bg-[#4486BF] text-white">
      <div
        className={`${announceContainer} flex-col items-center justify-center gap-1.5 py-0.5 text-center lg:h-[42px] lg:flex-row lg:justify-start lg:gap-4 lg:py-0.5 lg:text-left`}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:gap-3">
          <span className="whitespace-nowrap rounded-[6px] border border-white/30 bg-white/15 px-2.5 py-1 text-[12px] font-semibold leading-none tracking-wide text-white">
            Limited Availability
          </span>
          <p className="text-[13px] font-medium leading-snug text-white/85 md:text-[13.5px]">
            Stop Losing Revenue! <span className="font-bold text-white">Get a FREE Billing Audit</span> for Your Home
            Health, Home Care &amp; Hospice Agency.
          </p>
        </div>

         <Link
           to="/services#free-audit"
           className="group flex items-center gap-1 whitespace-nowrap text-[13px] font-bold text-white underline-offset-4 hover:underline md:text-[13.5px]"
         >
           Claim Free Audit
           <ArrowRight size={14} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
         </Link>
      </div>
    </div>
  )
}

function Divider({ className = '' }) {
  return <span aria-hidden="true" className={`inline-block h-3.5 w-px bg-white/10 ${className}`} />
}

export function TopContactBar() {
  return (
    <div className="bg-[#4486BF] text-white">
      <div
        className={`${announceContainer} flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 md:justify-start lg:h-[42px] lg:flex-nowrap lg:py-0.5`}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[12.5px] leading-none lg:flex-nowrap">
           <a
             href="mailto:info@mbxsol.com"
             className="flex items-center gap-1.5 text-white/85 transition-colors hover:text-white"
           >
             <Mail className="text-white/70" {...iconProps} />
             info@mbxsol.com
           </a>

          <Divider className="hidden sm:inline-block" />

          <span className="hidden text-white/45 sm:inline">Need Help? Call Us:</span>
           <a
             href="tel:+18883706494"
             className="flex items-center gap-1.5 text-white/90 transition-colors hover:text-white"
           >
             <Phone className="text-white/70" {...iconProps} />
             <span className="font-semibold">888-370-6494</span>
           </a>

          <span aria-hidden="true" className="font-light text-white/25">|</span>

          <a href="tel:+15597777919" className="text-white/70 transition-colors hover:text-white">
            559-777-7919
          </a>

          <Divider className="hidden lg:inline-block" />

           <span className="hidden items-center gap-1.5 text-white/75 lg:flex">
             <Clock className="text-white/70" {...iconProps} />
             24/7 Expert Billing Support
           </span>

           <Divider className="hidden xl:inline-block" />

           <span className="hidden items-center gap-1.5 text-white/75 xl:flex">
             <ShieldCheck className="text-white/70" {...iconProps} />
             Consent
           </span>
        </div>

        <Link
           to="/connect-us"
           className="inline-flex h-[26px] items-center rounded-[5px] bg-white px-3.5 text-[12px] font-bold text-[#4486BF] transition-colors hover:bg-[#EAF6FF]"
         >
           Get Free Quote
         </Link>
      </div>
    </div>
  )
}

export default function TopUtilityHeader({ className = '' }) {
  return (
    <div className={className}>
      <TopAnnouncementBar />
      <TopContactBar />
    </div>
  )
}