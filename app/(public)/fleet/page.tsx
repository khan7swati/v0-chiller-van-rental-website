import { vans } from '@/lib/data'
import { VanCard } from '@/components/van-card'

export const metadata = {
  title: 'Our Fleet | ColdTrans UAE',
  description: 'Browse our chiller and freezer van fleet. 1-ton to 8-ton capacity with temperatures from -25°C to +5°C for food, pharma, and catering transport.',
}

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Our refrigerated fleet</h1>
          <p className="text-xl text-slate-700 max-w-2xl">
            Professional temperature-controlled vehicles for food, pharmaceutical, and catering logistics. Available across all UAE emirates with 24/7 support.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vans.map((van) => (
              <VanCard key={van.id} van={van} />
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12">Vehicle specifications</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Vehicle</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Capacity</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Temperature Range</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Volume</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Type</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Daily Rate</th>
                </tr>
              </thead>
              <tbody>
                {vans.map((van) => (
                  <tr key={van.id} className="border-b border-slate-200 hover:bg-white transition">
                    <td className="py-4 px-4 font-medium text-slate-900">{van.name}</td>
                    <td className="py-4 px-4 text-slate-700">{van.specs.capacity}</td>
                    <td className="py-4 px-4 text-slate-700">{van.specs.temperature}</td>
                    <td className="py-4 px-4 text-slate-700">{van.specs.volume || 'N/A'}</td>
                    <td className="py-4 px-4 text-slate-700">{van.specs.type}</td>
                    <td className="py-4 px-4 font-semibold text-slate-900">AED {van.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12 text-center">What's included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900 pb-4 border-b-2 border-slate-300">All vehicles include</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900 flex-shrink-0 mt-1.5" />
                  <span>Precision temperature control and monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900 flex-shrink-0 mt-1.5" />
                  <span>Insulated cargo area with hygienic interior</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900 flex-shrink-0 mt-1.5" />
                  <span>Digital temperature display and alarms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900 flex-shrink-0 mt-1.5" />
                  <span>Backup power system for uninterrupted operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900 flex-shrink-0 mt-1.5" />
                  <span>Professional maintenance and regular servicing</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900 pb-4 border-b-2 border-slate-300">Advanced technology</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900 flex-shrink-0 mt-1.5" />
                  <span>Real-time GPS tracking and route optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900 flex-shrink-0 mt-1.5" />
                  <span>Automated temperature alerts via SMS/Email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900 flex-shrink-0 mt-1.5" />
                  <span>24/7 remote monitoring capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900 flex-shrink-0 mt-1.5" />
                  <span>Comprehensive insurance coverage included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900 flex-shrink-0 mt-1.5" />
                  <span>24/7 roadside assistance and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
