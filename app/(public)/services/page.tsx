import { services } from '@/lib/data'
import { ServiceCard } from '@/components/service-card'

export const metadata = {
  title: 'Services | SmartPath Vans',
  description: 'Add-on services to enhance your van rental experience. Insurance, GPS, camping gear, and more.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Add-On Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Enhance your van rental experience with our premium add-on services designed to make your journey more comfortable and worry-free.
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Service Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Airport Service */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Airport Pickup & Dropoff</h3>
              <p className="text-muted-foreground mb-4">
                Skip the hassle of rental car shuttles. We'll pick you up from any major airport and deliver your van directly to you. Same service applies for drop-off.
              </p>
              <p className="text-sm text-primary font-semibold">$49 per trip</p>
            </div>

            {/* Insurance */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Insurance Coverage</h3>
              <p className="text-muted-foreground mb-4">
                Get peace of mind with our comprehensive insurance coverage. Includes collision damage waiver, liability coverage, and roadside assistance.
              </p>
              <p className="text-sm text-primary font-semibold">$19 per day</p>
            </div>

            {/* GPS */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">GPS Navigation System</h3>
              <p className="text-muted-foreground mb-4">
                Stay on course with our advanced GPS system featuring offline maps, voice navigation, and points of interest recommendations along your route.
              </p>
              <p className="text-sm text-primary font-semibold">$12 per day</p>
            </div>

            {/* Camping */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Camping Package</h3>
              <p className="text-muted-foreground mb-4">
                Everything you need for outdoor camping. Includes tent, sleeping bags, camping chairs, portable stove, and cooking utensils.
              </p>
              <p className="text-sm text-primary font-semibold">$79 per rental</p>
            </div>

            {/* Pet */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Pet Policy</h3>
              <p className="text-muted-foreground mb-4">
                Bring your furry friends on the adventure! Pet-friendly vans with extra cleaning included. Pets stay for free - we just ask for a small fee to cover cleaning.
              </p>
              <p className="text-sm text-primary font-semibold">$25 per pet</p>
            </div>

            {/* Extra Driver */}
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Extra Driver</h3>
              <p className="text-muted-foreground mb-4">
                Add additional drivers to share the driving duties. Each extra driver is fully insured and covered under our comprehensive insurance policy.
              </p>
              <p className="text-sm text-primary font-semibold">$15 per driver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Why Choose Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">✓</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">No hidden fees. All prices are clearly listed upfront.</p>
            </div>

            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">✓</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Easy Customization</h3>
              <p className="text-muted-foreground">Add or remove services anytime during the booking process.</p>
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
