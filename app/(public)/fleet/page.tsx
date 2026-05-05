import { vans } from '@/lib/data'
import { VanCard } from '@/components/van-card'

export const metadata = {
  title: 'Our Fleet | ColdTrans UAE',
  description: 'Browse our chiller and freezer van fleet. 1-ton to 8-ton capacity with temperatures from -25°C to +5°C for food, pharma, and catering transport.',
}

export default function FleetPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Chiller & Freezer Fleet</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Professional refrigerated vans for food delivery, pharmaceutical transport, and catering logistics. All vans equipped with real-time temperature monitoring and GPS tracking across UAE.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vans.map((van) => (
              <VanCard key={van.id} van={van} />
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 md:py-28 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Van Specifications</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Van Model</th>
                  <th className="text-left py-4 px-4 font-semibold">Capacity</th>
                  <th className="text-left py-4 px-4 font-semibold">Temperature</th>
                  <th className="text-left py-4 px-4 font-semibold">Volume</th>
                  <th className="text-left py-4 px-4 font-semibold">Type</th>
                  <th className="text-left py-4 px-4 font-semibold">Price/Day</th>
                </tr>
              </thead>
              <tbody>
                {vans.map((van) => (
                  <tr key={van.id} className="border-b border-border hover:bg-muted/50 transition">
                    <td className="py-4 px-4 font-medium">{van.name}</td>
                    <td className="py-4 px-4">{van.specs.capacity}</td>
                    <td className="py-4 px-4">{van.specs.temperature}</td>
                    <td className="py-4 px-4">{van.specs.volume || 'N/A'}</td>
                    <td className="py-4 px-4">{van.specs.type}</td>
                    <td className="py-4 px-4 font-semibold text-primary">AED {van.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">What's Included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Standard Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Precision temperature control
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Insulated cargo area
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Digital temperature display
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Backup power system
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Professional maintenance
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Premium Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Real-time GPS tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Temperature SMS/Email alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  24/7 monitoring capability
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Full insurance coverage
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  24/7 roadside assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
