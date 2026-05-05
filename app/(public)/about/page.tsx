import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Heart, Users, MapPin, Zap } from 'lucide-react'

export const metadata = {
  title: 'About Us | SmartPath Vans',
  description: 'Learn about SmartPath Vans - your trusted partner for premium van rentals and unforgettable adventures.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About SmartPath Vans</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We&apos;re dedicated to making van life accessible to everyone. With quality vans and exceptional service, we make your adventure dreams a reality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                SmartPath Vans was founded in 2019 by a group of travel enthusiasts who wanted to make van life accessible and affordable for everyone. What started as a small fleet of 2 vans has grown to become a trusted name in the van rental industry.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We believe that the freedom of the open road should be within reach for all. That&apos;s why we focus on providing quality vans, transparent pricing, and exceptional customer service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we&apos;ve served over 500 happy travelers, and our mission remains the same: to help you create unforgettable memories on the road.
              </p>
            </div>

            <div className="relative h-96 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Heart className="h-16 w-16 mx-auto mb-4 opacity-30" />
                <p className="text-sm">Passion for adventures since 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Passion</h3>
                <p className="text-sm text-muted-foreground">We love what we do and it shows in every interaction with our customers.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality</h3>
                <p className="text-sm text-muted-foreground">Every van in our fleet is meticulously maintained to the highest standards.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">We build lasting relationships with our customers and fellow adventurers.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Adventure</h3>
                <p className="text-sm text-muted-foreground">We celebrate the spirit of exploration and discovery in every journey.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Why Choose SmartPath?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Well-Maintained Fleet</h3>
                <p className="text-muted-foreground">All vans undergo regular maintenance and detailed inspections before each rental.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">No hidden fees. Everything is clearly outlined so you know what to expect.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Our team is always available to help with any questions or issues during your rental.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Flexible Booking</h3>
                <p className="text-muted-foreground">Easy cancellation policy and flexible dates to match your travel plans.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Competitive Rates</h3>
                <p className="text-muted-foreground">Best prices in the market without compromising on quality or service.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Adventure Ready</h3>
                <p className="text-muted-foreground">All vans come equipped with everything you need for an amazing adventure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Happy Travelers</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">4</p>
              <p className="text-muted-foreground">Premium Vans</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">5★</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of happy travelers who have discovered the freedom of van life with SmartPath.
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
