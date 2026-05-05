'use client'

import Link from 'next/link'
import { ArrowRight, Zap, Users, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { vans, testimonials } from '@/lib/data'
import { VanCard } from '@/components/van-card'
import { TestimonialCard } from '@/components/testimonial-card'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-pretty">
              Short-term refrigerated vehicle rental
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Our fleet is ready to go! Rent for short periods starting at 24 hours, with no commitment. For emergencies, breakdowns or peak periods, we&apos;re here to help.
            </p>
            <div className="inline-block">
              <h3 className="text-lg font-semibold text-foreground mb-4">Full Service hire</h3>
              <p className="text-muted-foreground mb-6">
                Enjoy a comprehensive service that covers all safety, maintenance and repair work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Quote Form Section */}
      <section className="py-16 md:py-20 bg-card border-t border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Get your Quote</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Departure & Return */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Departure</label>
              <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground">
                <option>Start of rental period</option>
                <option>08:00</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
              </select>
            </div>

            {/* Return Date */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Return</label>
              <input type="date" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground" />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Duration</label>
              <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground">
                <option>Select duration</option>
                <option>1 to 30 days</option>
                <option>1 to 12 months</option>
                <option>Over 12 months</option>
              </select>
            </div>

            {/* Request Quote Button */}
            <div className="flex items-end">
              <Link href="/booking" className="w-full">
                <Button size="lg" className="w-full">
                  Request a quote
                </Button>
              </Link>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground">For business customers</p>
        </div>
      </section>

      {/* Our Range Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our range of refrigerated vehicles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vans.map((van) => (
              <VanCard key={van.id} van={van} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/fleet">
              <Button variant="outline" size="lg">
                See All Vans <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white border-t border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why rent from ColdTrans UAE?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Specialized Cold Transport</h3>
              <p className="text-sm text-muted-foreground">
                100% focused on refrigerated logistics with expertise across food, pharma, and catering sectors.
              </p>
            </div>

            <div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">500+ Experts</h3>
              <p className="text-sm text-muted-foreground">
                Trained professionals delivering best-in-class service and support for all your transport needs.
              </p>
            </div>

            <div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">24/7 Network Coverage</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive support across all UAE emirates with rapid response for emergencies and peak periods.
              </p>
            </div>

            <div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Sustainable Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Modern fleet with eco-friendly technology and commitment to green cold transport initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">What Our Business Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ColdTrans UAE also offers…</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            The network to promptly respond to your needs, 24-hour assistance, innovation in sustainable solutions, and dedicated support for your logistics challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="bg-white text-foreground hover:bg-white/90">
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
