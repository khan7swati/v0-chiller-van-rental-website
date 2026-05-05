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
    <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-slate-900 transition-all">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-slate-700 mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-200 flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-slate-900">{testimonial.name}</p>
          <p className="text-xs text-slate-600">Verified Client</p>
        </div>
      </div>
    </div>
  )
}
