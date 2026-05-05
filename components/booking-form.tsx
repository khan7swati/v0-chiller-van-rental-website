'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { vans, services } from '@/lib/data'

const bookingSchema = z.object({
  van_id: z.string().min(1, 'Please select a van'),
  start_date: z.string().min(1, 'Start date is required'),
  end_date: z.string().min(1, 'End date is required'),
  first_name: z.string().min(2, 'First name must be at least 2 characters'),
  last_name: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  selected_services: z.array(z.string()).default([]),
})

type BookingFormData = z.infer<typeof bookingSchema>

export function BookingForm({ defaultVanId }: { defaultVanId?: string }) {
  const { toast } = useToast()
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      van_id: defaultVanId || '',
      selected_services: [],
    },
  })

  const selectedVan = watch('van_id')
  const van = vans.find(v => v.id.toString() === selectedVan)

  const onSubmit = async (data: BookingFormData) => {
    const bookingData = {
      ...data,
      selected_services: selectedServices,
    }
    
    console.log('Booking submitted:', bookingData)
    
    toast({
      title: 'Booking Submitted!',
      description: 'Thank you for choosing SmartPath. Our team will contact you shortly to confirm your booking.',
    })
  }

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Step 1: Select Van */}
      <Card>
        <CardHeader>
          <CardTitle>Step 1: Select Your Van</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="van_id" className="block text-sm font-semibold mb-2">
              Choose a Van
            </label>
            <select
              id="van_id"
              {...register('van_id')}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            >
              <option value="">Select a van...</option>
              {vans.map(van => (
                <option key={van.id} value={van.id.toString()}>
                  {van.name} - ${van.price}/day
                </option>
              ))}
            </select>
            {errors.van_id && (
              <p className="text-sm text-destructive mt-1">{errors.van_id.message}</p>
            )}
          </div>

          {van && (
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">{van.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{van.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Capacity</p>
                  <p className="font-semibold">{van.capacity} guests</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Beds</p>
                  <p className="font-semibold">{van.beds}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Step 2: Select Dates */}
      <Card>
        <CardHeader>
          <CardTitle>Step 2: Select Dates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="start_date" className="block text-sm font-semibold mb-2">
                Start Date
              </label>
              <input
                id="start_date"
                type="date"
                {...register('start_date')}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
              {errors.start_date && (
                <p className="text-sm text-destructive mt-1">{errors.start_date.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="end_date" className="block text-sm font-semibold mb-2">
                End Date
              </label>
              <input
                id="end_date"
                type="date"
                {...register('end_date')}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
              {errors.end_date && (
                <p className="text-sm text-destructive mt-1">{errors.end_date.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Select Services */}
      <Card>
        <CardHeader>
          <CardTitle>Step 3: Add Services (Optional)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(service => (
              <div
                key={service.id}
                className="p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition"
                onClick={() => toggleService(service.id.toString())}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service.id.toString())}
                    onChange={() => toggleService(service.id.toString())}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{service.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                    <p className="text-sm font-semibold text-primary">${service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step 4: Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Step 4: Your Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-semibold mb-2">
                First Name
              </label>
              <input
                id="first_name"
                type="text"
                {...register('first_name')}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
              {errors.first_name && (
                <p className="text-sm text-destructive mt-1">{errors.first_name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="last_name" className="block text-sm font-semibold mb-2">
                Last Name
              </label>
              <input
                id="last_name"
                type="text"
                {...register('last_name')}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
              {errors.last_name && (
                <p className="text-sm text-destructive mt-1">{errors.last_name.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full">
        Complete Booking
      </Button>
    </form>
  )
}
