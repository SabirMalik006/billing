import { Link } from 'react-router-dom'

export default function SectionAuditCTA() {
  return (
    <section className="py-8 lg:py-12 bg-mbx-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[28px] md:text-[34px] font-extrabold leading-tight mb-2">
              <span className="text-[#29ABE2]">Request Your Free</span>{' '}
              <span className="text-[#0B3D66]">RCM Audit Report</span>
            </h2>
            {/* Orange underline */}
            <div className="w-[50px] h-[3px] bg-[#F5A623] mb-6 mx-auto lg:mx-0" />
            <p className="text-[15px] leading-[1.6] text-mbx-text-muted mb-8 max-w-lg mx-auto lg:mx-0">
              Ready to take the first step toward optimizing your revenue cycle? We conduct a thorough analysis of your billing processes. Get a free optimized audit report now.
            </p>
            <Link
              to="/connect-us"
              className="inline-flex items-center justify-center rounded-[5px] bg-[#0B3D66] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#082A4A] hover:shadow-lg min-h-[48px]"
            >
              Get Free Audit
            </Link>
          </div>

          {/* Right: 3 device illustration */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none mt-12 lg:mt-20">
            <div className="relative h-[350px] lg:h-[400px]">
              {/* Laptop (center, back) */}
              <div className="absolute left-1/2 top-4 -translate-x-1/2 w-[280px] lg:w-[320px]">
                <div className="rounded-t-xl bg-[#0B3D66] p-1.5 shadow-xl">
                  <div className="rounded-t-lg bg-white overflow-hidden">
                    <div className="bg-[#E8F4FD] px-3 py-1.5 flex items-center gap-1.5">
                      <div className="size-1.5 rounded-full bg-red-400" />
                      <div className="size-1.5 rounded-full bg-yellow-400" />
                      <div className="size-1.5 rounded-full bg-green-400" />
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"
                      alt="RCM Matter Dashboard"
                      className="w-full h-[140px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="h-3 bg-gradient-to-b from-[#C0C0C0] to-[#A0A0A0] rounded-b-lg mx-4" />
                <div className="h-1.5 bg-[#B0B0B0] rounded-b mx-12" />
              </div>

              {/* Phone left */}
              <div className="absolute left-0 top-16 w-[110px] lg:w-[130px] rotate-[-8deg] z-10">
                <div className="rounded-xl bg-[#0B3D66] p-1 shadow-lg">
                  <div className="rounded-[10px] bg-white overflow-hidden">
                    <div className="bg-[#29ABE2] px-2 py-1">
                      <div className="size-1 rounded-full bg-white/40 mx-auto" />
                    </div>
                    <div className="p-2">
                      <p className="text-[6px] font-bold text-[#0B3D66] mb-1">Make Payment Online</p>
                      <p className="text-[5px] text-mbx-text-muted">Safely With RCM Matter</p>
                      <div className="mt-1.5 h-3 bg-[#E8F4FD] rounded" />
                      <div className="mt-1 h-3 bg-[#29ABE2]/20 rounded w-3/4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone right */}
              <div className="absolute right-0 top-20 w-[110px] lg:w-[130px] rotate-[8deg] z-10">
                <div className="rounded-xl bg-[#0B3D66] p-1 shadow-lg">
                  <div className="rounded-[10px] bg-white overflow-hidden">
                    <div className="bg-[#F5A623] px-2 py-1">
                      <div className="size-1 rounded-full bg-white/40 mx-auto" />
                    </div>
                    <div className="p-2">
                      <p className="text-[6px] font-bold text-[#0B3D66] mb-1">Payment Posting</p>
                      <p className="text-[5px] text-mbx-text-muted">Solutions</p>
                      <div className="mt-1.5 space-y-1">
                        <div className="h-2 bg-[#E8F4FD] rounded" />
                        <div className="h-2 bg-[#29ABE2]/15 rounded w-4/5" />
                        <div className="h-2 bg-[#E8F4FD] rounded w-3/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
