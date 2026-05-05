'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { vans, testimonials, bookingSteps } from '@/lib/data'
import { VanCard } from '@/components/van-card'
import { TestimonialCard } from '@/components/testimonial-card'
import { AnimatedSection } from '@/components/animated-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground text-pretty">
                    Your Freedom Starts Here
                  </h1>
                  <p className="text-xl text-muted-foreground text-pretty">
                    Experience the ultimate van life with SmartPath. Premium vans, unforgettable adventures.
                  </p>
                </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/booking">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book Your Van <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/fleet">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Our Fleet
                  </Button>
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div>
                  <p className="font-bold text-lg text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Travelers</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-primary">4 Vans</p>
                  <p className="text-sm text-muted-foreground">Premium Fleet</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
              </div>
            </AnimatedSection>

            {/* Right - Hero Image */}
            <div className="relative h-96 md:h-full hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-2xl" />
              <div className="absolute inset-4 rounded-xl bg-gradient-to-b from-primary/30 to-transparent flex items-end justify-center overflow-hidden">
                <div className="w-4/5 h-3/4 bg-background rounded-lg shadow-2xl flex items-center justify-center">
                  <span className="text-muted-foreground">Van Adventure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Pick-up Location</p>
                <p className="font-semibold">Select Location</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Dates</p>
                <p className="font-semibold">Check Availability</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Users className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Travelers</p>
                <p className="font-semibold">2-6 People</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vans Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Premium Fleet</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From cozy compact vans to luxurious full-size retreats, we have the perfect van for your adventure.
              </p>
            </div>
          </AnimatedSection>

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

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Booking your perfect van adventure is quick and easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0">
            {bookingSteps.map((step, idx) => (
              <div key={step.step} className="relative">
                <div className="text-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {idx < bookingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Travelers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real adventurers who trusted SmartPath with their journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-y border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready for Your Adventure?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose your perfect van and start creating memories that will last a lifetime.
          </p>
          <Link href="/booking">
            <Button size="lg">
              Book Your Van Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
