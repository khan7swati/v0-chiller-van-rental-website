'use client'

import Link from 'next/link'
import { ArrowRight, Zap, Users, Globe, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { vans, testimonials } from '@/lib/data'
import { VanCard } from '@/components/van-card'
import { TestimonialCard } from '@/components/testimonial-card'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight text-pretty">
              Professional refrigerated vehicle rental
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-12 text-pretty max-w-2xl mx-auto">
              Reliable cold chain solutions for food, pharmaceutical, and catering businesses across the UAE. Available 24/7 for emergencies and peak periods.
            </p>
            <Link href="/booking">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg">
                Request a Quote <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-16 text-center">Why choose ColdTrans UAE?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle2 className="h-8 w-8 text-slate-900" />,
                title: "Specialized Expertise",
                description: "100% focused on refrigerated logistics with deep expertise across food, pharma, and catering sectors."
              },
              {
                icon: <Zap className="h-8 w-8 text-slate-900" />,
                title: "24/7 Network",
                description: "Round-the-clock support across all UAE emirates with rapid response for emergencies."
              },
              {
                icon: <Users className="h-8 w-8 text-slate-900" />,
                title: "Professional Team",
                description: "Experienced drivers and support staff trained in cold chain best practices and safety standards."
              },
              {
                icon: <Globe className="h-8 w-8 text-slate-900" />,
                title: "Flexible Solutions",
                description: "Tailored rental packages starting from 24 hours with no long-term commitment required."
              }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-16 text-center">Our refrigerated fleet</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vans.map((van) => (
              <VanCard key={van.id} van={van} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/fleet">
              <Button variant="outline" size="lg" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
                View All Vehicles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-16 text-center">What our clients say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Contact our team for a personalized quote or to discuss your specific cold chain requirements.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90">
              Request a Quote <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
