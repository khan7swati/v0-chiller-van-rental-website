import { services } from '@/lib/data'
import { ServiceCard } from '@/components/service-card'

export const metadata = {
  title: 'Services | ColdTrans UAE',
  description: 'Cold transport services for food delivery, pharmaceutical logistics, catering, and event refrigeration. Temperature-controlled solutions across UAE.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Cold Transport Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Professional cold chain logistics solutions for food delivery, pharmaceuticals, catering, and event refrigeration. Real-time monitoring available on all services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our Cold Transport Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Food Delivery */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Food Delivery Transport</h3>
              <p className="text-muted-foreground mb-4">
                Reliable cold chain for restaurants, supermarkets, and food suppliers. Maintains optimal temperature for perishable goods across all UAE emirates. Ideal for daily deliveries.
              </p>
              <p className="text-sm text-primary font-semibold">Included with all vans</p>
            </div>

            {/* Pharmaceutical */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Pharmaceutical Logistics</h3>
              <p className="text-muted-foreground mb-4">
                Temperature-controlled transport for medicines, vaccines, and medical supplies. AED certified and fully compliant with pharmaceutical cold chain regulations.
              </p>
              <p className="text-sm text-primary font-semibold">Included with all vans</p>
            </div>

            {/* Catering */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Catering Event Services</h3>
              <p className="text-muted-foreground mb-4">
                Full event refrigeration solutions for weddings, conferences, and corporate events. Multiple van support available for large events with coordinated temperature management.
              </p>
              <p className="text-sm text-primary font-semibold">Included with all vans</p>
            </div>

            {/* Ice Cream */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Ice Cream & Frozen Goods</h3>
              <p className="text-muted-foreground mb-4">
                Specialized deep freezer transport for ice cream shops, frozen desserts, and frozen food products. Maintains ultra-low temperatures for product quality.
              </p>
              <p className="text-sm text-primary font-semibold">Included with all vans</p>
            </div>

            {/* 24/7 Emergency */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">24/7 Emergency Transport</h3>
              <p className="text-muted-foreground mb-4">
                Urgent same-day delivery available around the clock for critical shipments. Fast response times for perishable goods and emergency pharmaceutical needs.
              </p>
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
