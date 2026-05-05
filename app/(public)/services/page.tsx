import { services } from '@/lib/data'
import { ServiceCard } from '@/components/service-card'

export const metadata = {
  title: 'Services | ColdTrans UAE',
  description: 'Cold transport services for food delivery, pharmaceutical logistics, catering, and event refrigeration. Temperature-controlled solutions across UAE.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Cold chain solutions</h1>
          <p className="text-xl text-slate-700 max-w-2xl">
            Tailored cold transport services for food, pharmaceuticals, catering, and events. Available 24/7 across all UAE emirates with real-time monitoring.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12 text-center">Our services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Food Delivery */}
            <div className="p-8 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-900 transition">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Food Delivery Transport</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Reliable cold chain solutions for restaurants, supermarkets, and food suppliers. Maintains optimal temperatures across all UAE emirates for daily deliveries.
              </p>
              <p className="text-sm text-slate-500 font-medium">Standard on all vehicles</p>
            </div>

            {/* Pharmaceutical */}
            <div className="p-8 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-900 transition">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Pharmaceutical Logistics</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Temperature-controlled transport for medicines and vaccines. Fully compliant with pharmaceutical cold chain regulations and industry standards.
              </p>
              <p className="text-sm text-slate-500 font-medium">Standard on all vehicles</p>
            </div>

            {/* Catering */}
            <div className="p-8 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-900 transition">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Catering & Events</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Full refrigeration solutions for weddings, conferences, and corporate events. Multiple van coordination available for large-scale events.
              </p>
              <p className="text-sm text-slate-500 font-medium">Standard on all vehicles</p>
            </div>

            {/* Frozen Goods */}
            <div className="p-8 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-900 transition">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Frozen Goods Transport</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Specialized deep-freezer transport for ice cream, frozen desserts, and frozen food products. Maintains ultra-low temperatures for product integrity.
              </p>
              <p className="text-sm text-slate-500 font-medium">Standard on all vehicles</p>
            </div>

            {/* 24/7 Emergency */}
            <div className="p-8 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-900 transition">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">24/7 Emergency Service</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Rapid same-day delivery available around the clock for critical shipments, emergencies, and urgent pharmaceutical needs.</p>
              <p className="text-sm text-primary font-semibold">Included with all vans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Why Choose ColdTrans for Your Logistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">✓</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Real-Time Monitoring</h3>
              <p className="text-muted-foreground">24/7 GPS tracking and temperature alerts sent to your phone for complete peace of mind.</p>
            </div>

            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">✓</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Professional & Reliable</h3>
              <p className="text-muted-foreground">AED certified vans with professional drivers. Trusted by food and pharma businesses across UAE.</p>
            </div>

            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">✓</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">All equipment and services meet our high quality standards.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
