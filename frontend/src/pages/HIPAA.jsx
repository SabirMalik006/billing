import { Shield } from 'lucide-react'

export default function HIPAA() {
  return (
    <section className="min-h-screen bg-mbx-surface pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-2xl bg-[#29ABE2]/10">
            <Shield size={40} className="text-[#29ABE2]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B3D66] leading-tight mb-4">
            HIPAA Compliance
          </h1>
          <div className="w-[60px] h-[3px] bg-[#F5A623] mx-auto mb-6" />
          <p className="text-lg text-mbx-text-muted max-w-2xl mx-auto leading-relaxed">
            MBX Solutions is committed to maintaining the highest standards of HIPAA compliance to protect patient health information.
          </p>
        </div>

        {/* Content placeholder */}
        <div className="rounded-2xl border border-[#DEE4EB] bg-white p-10 text-center">
          <p className="text-mbx-text-muted text-lg">
            HIPAA compliance details and policies will be added here.
          </p>
        </div>
      </div>
    </section>
  )
}
