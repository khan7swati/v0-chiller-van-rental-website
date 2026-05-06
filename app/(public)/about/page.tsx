import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Award, Users, Globe } from 'lucide-react'

export const metadata = {
  title: 'About Us | ColdTrans UAE',
  description: 'Learn about ColdTrans UAE - your trusted partner for professional cold chain logistics and refrigerated transport solutions.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">About ColdTrans UAE</h1>
          <p className="text-xl text-slate-700 max-w-2xl">
            Your trusted partner for professional cold chain logistics and temperature-controlled transport solutions across the UAE.
          </p>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Our mission</h2>
              <p className="text-slate-700 mb-4 leading-relaxed text-lg">
                ColdTrans UAE is committed to delivering excellence in cold chain logistics. We serve food delivery companies, pharmaceutical businesses, and catering services across the UAE with reliability, professionalism, and innovation.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed text-lg">
                We understand that maintaining proper temperature is critical for food safety and pharmaceutical integrity. Our modern fleet, advanced monitoring systems, and highly trained professionals ensure your perishable goods arrive safely and at the perfect temperature.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                With thousands of successful deliveries and a reputation for excellence, we&apos;re the cold chain partner you can depend on.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Reliability & Trust</h3>
                <p className="text-slate-700">On-time deliveries and consistent temperature maintenance across all UAE emirates.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Innovation</h3>
                <p className="text-slate-700">Advanced monitoring systems and real-time tracking for complete transparency.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Excellence</h3>
                <p className="text-slate-700">Professional team with AED certification and adherence to cold chain standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-16 text-center">Our core values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Reliability",
                description: "Consistent performance and on-time service you can depend on every time."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Quality",
                description: "Premium vehicles and advanced systems for guaranteed performance."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Professionalism",
                description: "Expert team trained in cold chain best practices and safety."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Coverage",
                description: "24/7 network support across all UAE emirates with rapid response."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mb-6 text-slate-900">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-16 text-center">Why partner with us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Modern Fleet", desc: "Well-maintained refrigerated vehicles with advanced temperature control systems." },
              { title: "AED Certified", desc: "Fully compliant with food and pharmaceutical transport regulations." },
              { title: "24/7 Available", desc: "Round-the-clock support and emergency response across all emirates." },
              { title: "Real-Time Tracking", desc: "GPS tracking and temperature monitoring for complete transparency." },
              { title: "Expert Team", desc: "Professional drivers trained in cold chain best practices." },
              { title: "Flexible Solutions", desc: "Customized packages for food, pharma, and catering needs." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-3">500+</p>
              <p className="text-white/80 text-lg">Business Clients</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-3">10k+</p>
              <p className="text-white/80 text-lg">Deliveries Monthly</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-3">4.9★</p>
              <p className="text-white/80 text-lg">Average Rating</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-3">24/7</p>
              <p className="text-white/80 text-lg">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Ready to partner with us?</h2>
          <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto">
            Contact our team to discuss your cold chain logistics requirements and find the perfect solution for your business.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg">
              Request a Quote <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
