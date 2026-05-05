'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    rating: number
    text: string
    image: string
  }
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        {/* Stars */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-foreground mb-4 leading-relaxed">&quot;{testimonial.text}&quot;</p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-sm">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">Verified Traveler</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
