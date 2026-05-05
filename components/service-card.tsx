'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import * as Icons from 'lucide-react'

interface ServiceCardProps {
  service: {
    id: number
    title: string
    description: string
    price: number
    icon: string
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] || Icons.Star

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <div className="text-lg font-bold text-primary">${service.price}</div>
        </div>
        <CardTitle className="text-lg">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  )
}
