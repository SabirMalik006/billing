import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react'
import { SectionHeader } from '../components/UI'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '', message: '', interest: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '', interest: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark-blue via-brand-blue to-brand-royal-blue py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-orange/20 px-4 py-1 text-sm font-semibold text-brand-orange">
              Contact Us
            </span>
            <h1 className="mb-6 text-4xl font-bold text-brand-white md:text-5xl">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-brand-blue-gray leading-relaxed">
              Ready to transform your organization? Reach out to our team and discover
              how SimiTree can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-brand-cream py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-brand-dark-blue">Get in Touch</h2>

              <div className="space-y-6">
                <a href="tel:8667464830" className="flex items-start gap-4 group">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark-blue">Phone</p>
                    <p className="text-gray-600">(866) 746-4830</p>
                  </div>
                </a>

                <a href="mailto:info@simitreehc.com" className="flex items-start gap-4 group">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark-blue">Email</p>
                    <p className="text-gray-600">info@simitreehc.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark-blue">Office</p>
                    <p className="text-gray-600">405 N Frederick Ave, Suite 200<br />Gaithersburg, MD 20877</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark-blue">Hours</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[10px] bg-white p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare size={20} className="text-brand-orange" />
                  <h3 className="font-bold text-brand-dark-blue">Quick Response</h3>
                </div>
                <p className="text-sm text-gray-600">
                  We typically respond to all inquiries within 24 hours during business days.
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="rounded-[10px] bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-brand-dark-blue">Send Us a Message</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-brand-dark-blue">First Name *</label>
                    <input
                      type="text" name="firstName" required
                      value={formData.firstName} onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-brand-dark-blue">Last Name *</label>
                    <input
                      type="text" name="lastName" required
                      value={formData.lastName} onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-brand-dark-blue">Email *</label>
                    <input
                      type="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-brand-dark-blue">Phone</label>
                    <input
                      type="tel" name="phone"
                      value={formData.phone} onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-1 block text-sm font-semibold text-brand-dark-blue">Company *</label>
                  <input
                    type="text" name="company" required
                    value={formData.company} onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition"
                    placeholder="Your Organization"
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-1 block text-sm font-semibold text-brand-dark-blue">Area of Interest</label>
                  <select
                    name="interest" value={formData.interest} onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="technology">Technology & AI</option>
                    <option value="rcm">Revenue Cycle Management</option>
                    <option value="coding">Coding & OASIS</option>
                    <option value="compliance">Compliance & Regulatory Risk</option>
                    <option value="consulting">Consulting</option>
                    <option value="billing">Billing Services</option>
                    <option value="analytics">Data Analytics</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="mb-1 block text-sm font-semibold text-brand-dark-blue">Message *</label>
                  <textarea
                    name="message" required rows={5}
                    value={formData.message} onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-3 text-base font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg sm:w-auto"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
