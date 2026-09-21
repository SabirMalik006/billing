import { AnimatedSection } from '../components/Animated'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-mbx-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
          <div className="hero-grid absolute inset-0" />
        </div>
        <div className="container mx-auto relative z-10 pt-64 pb-20 md:pt-56 lg:pt-44 lg:pb-28">
          <AnimatedSection>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-white/80">
              Contact Us
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              Have a <span className="text-[#4486BF]">Question?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              Send us a message. Our team will get back to you promptly with the right solution for your practice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-28 lg:py-36 bg-mbx-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-mbx-navy mb-4">
                  Send us a message
                </h2>
                <p className="text-lg text-mbx-text-muted">
                  Have a question about our services? Send us your inquiry and our team will get back to you promptly.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="shadow-xl shadow-mbx-navy/5">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}