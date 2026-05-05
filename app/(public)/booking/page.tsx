'use client'

import { useSearchParams } from 'next/navigation'
import { BookingForm } from '@/components/booking-form'

export default function BookingPage() {
  const searchParams = useSearchParams()
  const vanId = searchParams.get('van')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Book Your Adventure</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete the form below to reserve your van. We'll confirm your booking and provide all the details you need.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <BookingForm defaultVanId={vanId || undefined} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Booking FAQs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">How soon will I get confirmation?</h3>
              <p className="text-muted-foreground">You'll receive confirmation within 24 hours. Our team will contact you via email or phone to finalize details.</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">We accept all major credit cards, PayPal, and bank transfers for larger bookings.</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Is a deposit required?</h3>
              <p className="text-muted-foreground">Yes, a 30% deposit is required to secure your booking. The remainder is due upon pick-up.</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Can I modify my booking?</h3>
              <p className="text-muted-foreground">Absolutely! Contact us before your rental date and we'll make any changes needed.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
