'use client'

import Link from 'next/link'
import { ArrowRight, Zap, Users, Globe, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { vans, testimonials } from '@/lib/data'
import { VanCard } from '@/components/van-card'
import { TestimonialCard } from '@/components/testimonial-card'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 dark:from-primary/20 dark:to-secondary/20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 dark:opacity-30 bg-gradient-to-br from-primary to-accent" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-15 dark:opacity-25 bg-gradient-to-tr from-secondary to-primary" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary dark:bg-primary/20 border border-primary/20 dark:border-primary/30">
                Cold Chain Solutions
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-8 leading-tight text-pretty">
              Enterprise Refrigerated Logistics
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 text-pretty max-w-3xl leading-relaxed">
              Precision temperature-controlled transport for food, pharmaceutical, and catering businesses. 24/7 availability with real-time monitoring and full compliance across the UAE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <Button size="lg" className="px-8 py-6 text-lg font-semibold">
                  Request a Quote <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold">
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-8 pt-12 border-t border-border/50">
              {[
                { number: '500+', label: 'Vehicles Fleet' },
                { number: '24/7', label: 'Availability' },
                { number: '100%', label: 'Compliant' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="features" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 text-center">Why choose ColdTrans UAE?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                title: "Specialized Expertise",
                description: "100% focused on refrigerated logistics with deep expertise across food, pharma, and catering sectors."
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "24/7 Network",
                description: "Round-the-clock support across all UAE emirates with rapid response for emergencies."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Professional Team",
                description: "Experienced drivers and support staff trained in cold chain best practices and safety standards."
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "Flexible Solutions",
                description: "Tailored rental packages starting from 24 hours with no long-term commitment required."
              }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 text-center">Our refrigerated fleet</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vans.map((van) => (
              <VanCard key={van.id} van={van} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/fleet">
              <Button variant="outline" size="lg">
                View All Vehicles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 text-center">What our clients say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10 dark:opacity-20" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Ready to get started?</h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
            Contact our team for a personalized quote or to discuss your specific cold chain requirements.
          </p>
          <Link href="/booking">
            <Button size="lg">
              Request a Quote <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
