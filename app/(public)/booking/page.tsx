'use client'

import { Suspense } from 'react'
import { BookingFormWrapper } from '@/components/booking-form-wrapper'

function BookingPageContent() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Request Your Quote</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Fill out the form below to get an instant quote for your refrigerated van rental. Our team will confirm availability and pricing within 1 hour.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <Suspense fallback={<div className="h-96 bg-muted rounded-lg animate-pulse" />}>
            <BookingFormWrapper />
          </Suspense>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Rental FAQs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">How soon can I get a vehicle?</h3>
              <p className="text-muted-foreground">We offer 24-hour rental availability. For emergency requests, contact us directly for same-day solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">We accept bank transfers, credit cards, and corporate invoicing for business customers.</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Is insurance included?</h3>
              <p className="text-muted-foreground">Yes, comprehensive insurance is included with all short-term rentals. Full coverage with minimal excess.</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Can I modify my rental?</h3>
              <p className="text-muted-foreground">Absolutely! Contact our team to extend, modify dates, or switch vehicle sizes anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function BookingPage() {
  return <BookingPageContent />
}
