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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={van.image}
          alt={van.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          AED {van.price}/day
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{van.name}</CardTitle>
        <CardDescription>{van.type}</CardDescription>
        <p className="text-sm text-foreground mt-2">{van.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 pb-4 border-b border-border">
          <div className="text-center">
            <div className="flex justify-center mb-1">
              <Box className="h-4 w-4 text-primary" />
            </div>
            <p className="text-xs font-semibold">{van.specs.capacity}</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-1">
              <Thermometer className="h-4 w-4 text-primary" />
            </div>
            <p className="text-xs font-semibold">{van.specs.temperature}</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-1">
              <Snowflake className="h-4 w-4 text-primary" />
            </div>
            <p className="text-xs font-semibold">{van.specs.type}</p>
          </div>
        </div>

        {/* Features */}
        <div>
          <p className="text-sm font-semibold mb-2">Features:</p>
          <ul className="text-xs text-muted-foreground space-y-1">
            {van.features.slice(0, 4).map((feature, idx) => (
              <li key={idx}>✓ {feature}</li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link href={`/booking?van=${van.id}`} className="w-full block">
          <Button className="w-full">View Details & Book</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
