'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      console.log('Contact form submitted:', formData)
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. Our team will respond within 1 hour.',
      })

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Get in touch</h1>
          <p className="text-xl text-slate-700 max-w-2xl">
            Need cold transport solutions? Contact our team for quotes, inquiries, or 24/7 support. We respond within one hour.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone</h3>
                <p className="text-slate-700">+971 4 XXX XXXX</p>
                <p className="text-slate-500 text-sm mt-1">Available 24/7</p>
              </div>

              <div>
                <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-700">info@coldtrans.ae</p>
                <p className="text-slate-500 text-sm mt-1">Response within 1 hour</p>
              </div>

              <div>
                <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Location</h3>
                <p className="text-slate-700">Dubai, United Arab Emirates</p>
                <p className="text-slate-500 text-sm mt-1">Serving all emirates</p>
              </div>

              <div>
                <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Hours</h3>
                <p className="text-slate-700">24 Hours</p>
                <p className="text-slate-500 text-sm mt-1">Every day of the week</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-10 rounded-lg border-2 border-slate-200">
                <h2 className="text-2xl font-semibold text-slate-900 mb-8">Send us a message</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@company.com"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white text-slate-900"
                  >
                    <option value="">Select a service</option>
                    <option value="food-delivery">Food Delivery Transport</option>
                    <option value="pharma">Pharmaceutical Logistics</option>
                    <option value="catering">Catering & Events</option>
                    <option value="frozen-goods">Frozen Goods Transport</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your cold transport needs..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white text-slate-900 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 font-medium flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-slate-600 text-center">
                  We typically respond within 1 hour during business hours. For urgent requests, please call us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12 text-center">Service areas</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah', 'All Emirates'].map((emirate) => (
              <div key={emirate} className="p-6 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-900 transition">
                <p className="font-semibold text-slate-900">{emirate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
