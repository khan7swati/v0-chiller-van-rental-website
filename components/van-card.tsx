'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Snowflake, Thermometer, Box } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface VanCardProps {
  van: {
    id: number
    name: string
    type: string
    price: number
    capacity: number
    temperatureRange: string
    image: string
    description: string
    features: string[]
    specs: {
      capacity: string
      temperature: string
      type: string
      fuelType: string
    }
  }
}

export function VanCard({ van }: VanCardProps) {
  return (
    <div className="border-2 border-slate-200 rounded-lg overflow-hidden hover:border-slate-900 transition-all group bg-white">
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={van.image}
          alt={van.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold">
          AED {van.price}/day
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-slate-900 mb-2">{van.name}</h3>
        <p className="text-slate-600 text-sm mb-4">{van.type}</p>
        <p className="text-slate-700 mb-4 leading-relaxed">{van.description}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 py-4 border-t border-b border-slate-200 mb-4">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Box className="h-5 w-5 text-slate-900" />
            </div>
            <p className="text-xs font-semibold text-slate-900">{van.specs.capacity}</p>
            <p className="text-xs text-slate-600">Capacity</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Thermometer className="h-5 w-5 text-slate-900" />
            </div>
            <p className="text-xs font-semibold text-slate-900">{van.specs.temperature}</p>
            <p className="text-xs text-slate-600">Temperature</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Snowflake className="h-5 w-5 text-slate-900" />
            </div>
            <p className="text-xs font-semibold text-slate-900">{van.specs.type}</p>
            <p className="text-xs text-slate-600">Type</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-slate-900 mb-3">Includes:</p>
          <ul className="text-sm text-slate-700 space-y-2">
            {van.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-slate-900 font-bold mt-0.5">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link href={`/booking?van=${van.id}`} className="w-full block">
          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg transition-colors">
            Request Quote
          </button>
        </Link>
      </div>
    </div>
  )
}
