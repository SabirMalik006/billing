import { useState } from 'react'
import { Mail, Phone, Clock, MessageSquare, Send, CheckCircle, MapPin } from 'lucide-react'
import { AnimatedSection } from '../components/Animated'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', practitionerName: '',
    services: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', phone: '', email: '', practitionerName: '', services: '', message: '' })
  }

  const inputClass = "w-full rounded-xl border border-mbx-border bg-mbx-surface px-5 py-3.5 text-sm text-mbx-navy outline-none transition-all focus:border-mbx-teal focus:ring-2 focus:ring-mbx-teal/10 placeholder:text-mbx-text-muted/50 font-medium"
  const selectClass = "w-full rounded-xl border border-mbx-border bg-mbx-surface px-5 py-3.5 text-sm text-mbx-navy outline-none transition-all focus:border-mbx-teal focus:ring-2 focus:ring-mbx-teal/10 appearance-none font-medium"

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-mbx-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mbx-navy-dark via-mbx-navy to-mbx-navy-light" />
          <div className="hero-grid absolute inset-0" />
          <div className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full bg-mbx-teal/5 blur-[150px]" />
        </div>
        <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <AnimatedSection>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-mbx-teal/30 bg-mbx-teal/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-mbx-teal">
              Contact
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              Let's Find What's Leaving<br />
              <span className="text-mbx-teal">Your Revenue Behind.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
              Whether you're looking to strengthen home health billing, improve hospice revenue
              performance, or support your growing organization — we're ready to listen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-24 bg-mbx-surface">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2">
              <h2 className="mb-8 text-2xl font-extrabold text-mbx-navy">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-mbx-teal/10 text-mbx-teal">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-mbx-navy">Phone</p>
                    <a href="tel:+18883706494" className="text-sm text-mbx-text-muted hover:text-mbx-teal transition-colors">888-370-6494</a>
                    <p className="text-xs text-mbx-text-muted mt-0.5">559-777-7919</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-mbx-teal/10 text-mbx-teal">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-mbx-navy">Email</p>
                    <a href="mailto:info@mbxsol.com" className="text-sm text-mbx-text-muted hover:text-mbx-teal transition-colors">info@mbxsol.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-mbx-teal/10 text-mbx-teal">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-mbx-navy">Hours</p>
                    <p className="text-sm text-mbx-text-muted">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-mbx-teal/10 text-mbx-teal">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-mbx-navy">Address</p>
                    <p className="text-sm text-mbx-text-muted">2209 Keltrip Ct<br />Silver Spring, MD 20906</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-mbx-teal/10 text-mbx-teal">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-mbx-navy">Response Time</p>
                    <p className="text-sm text-mbx-text-muted">We respond to inquiries within 24 business hours.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.15}>
              <form onSubmit={handleSubmit} className="rounded-2xl border border-mbx-border bg-mbx-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-extrabold text-mbx-navy">Schedule Your Free Audit</h2>

                {submitted && (
                  <div className="mb-6 rounded-xl bg-green-50 border border-green-200 px-5 py-3 text-sm text-green-700 font-medium flex items-center gap-2">
                    <CheckCircle size={16} /> Thank you. We'll get back to you within 24 business hours.
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-mbx-navy">Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-mbx-navy">Phone *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-mbx-navy">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@organization.com" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-mbx-navy">Practitioner Name</label>
                    <input type="text" name="practitionerName" value={formData.practitionerName} onChange={handleChange} className={inputClass} placeholder="Practitioner name" />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block text-sm font-bold text-mbx-navy">Services</label>
                  <div className="relative">
                    <select name="services" value={formData.services} onChange={handleChange} className={selectClass}>
                      <option value="">Select a service</option>
                      <option value="medical-billing">Medical Billing Services</option>
                      <option value="home-health-hospice">Home Health & Hospice Billing</option>
                      <option value="coding-qa">Medical Coding & QA Service</option>
                      <option value="credentialing">Credentialing</option>
                      <option value="ar-recovery">Account Receivable Recovery</option>
                      <option value="hospital-billing">Hospital Billing</option>
                      <option value="free-audit">Free Audit Recovery</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block text-sm font-bold text-mbx-navy">Message *</label>
                  <textarea
                    name="message" required rows={5} value={formData.message} onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your organization and how we can help..."
                  />
                </div>

                <p className="mt-3 text-xs text-mbx-text-muted">
                  By submitting this form, you agree to receive SMS messages from MBX Solutions. Message frequency may vary. Msg & data rates may apply. Reply STOP to opt out. View our <a href="#" className="text-mbx-teal hover:underline">Privacy Policy</a>.
                </p>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-mbx-teal px-8 py-4 text-base font-bold text-mbx-white transition-all duration-300 hover:bg-mbx-teal-dark hover:shadow-lg hover:shadow-mbx-teal/20 hover:-translate-y-0.5 sm:w-auto"
                >
                  <Send size={18} /> Schedule Your Free Audit
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
