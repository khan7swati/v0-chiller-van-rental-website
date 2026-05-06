'use client'

import { Suspense } from 'react'
import { BookingFormWrapper } from '@/components/booking-form-wrapper'

function BookingContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Request Your Quote</h1>
          <p className="text-xl text-slate-700 max-w-2xl">
            Fill out the form below to get an instant quote for your refrigerated van rental. Our team will confirm availability and pricing within 1 hour.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <Suspense fallback={<div className="h-96 bg-slate-200 rounded-lg animate-pulse" />}>
            <BookingFormWrapper />
          </Suspense>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12 text-center">Rental FAQs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">How soon can I get a vehicle?</h3>
              <p className="text-slate-700">We offer 24-hour rental availability. For emergency requests, contact us directly for same-day solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">What payment methods do you accept?</h3>
              <p className="text-slate-700">We accept bank transfers, credit cards, and corporate invoicing for business customers.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Is insurance included?</h3>
              <p className="text-slate-700">Yes, comprehensive insurance is included with all short-term rentals. Full coverage with minimal excess.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Can I modify my rental?</h3>
              <p className="text-slate-700">Absolutely! Contact our team to extend, modify dates, or switch vehicle sizes anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function BookingPage() {
  return <BookingContent />
}
