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
  pickup_location: z.string().min(3, 'Pickup location is required'),
  dropoff_location: z.string().min(3, 'Drop-off location is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  temperature_requirement: z.string().min(1, 'Temperature requirement is required'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(9, 'Phone number must be at least 9 digits'),
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
      title: 'Quote Request Submitted!',
      description: 'Thank you! Our team will contact you shortly with a quote and confirm your cold transport booking.',
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
          <CardTitle>Step 1: Select Your Chiller/Freezer Van</CardTitle>
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
                  {van.name} - {van.specs.capacity} - AED {van.price}/day
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
                  <p className="font-semibold">{van.specs.capacity}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Temperature</p>
                  <p className="font-semibold">{van.specs.temperature}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Step 2: Pickup & Dropoff Locations */}
      <Card>
        <CardHeader>
          <CardTitle>Step 2: Delivery Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="pickup_location" className="block text-sm font-semibold mb-2">
              Pickup Location
            </label>
            <input
              id="pickup_location"
              type="text"
              placeholder="Enter pickup location in UAE"
              {...register('pickup_location')}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
            {errors.pickup_location && (
              <p className="text-sm text-destructive mt-1">{errors.pickup_location.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="dropoff_location" className="block text-sm font-semibold mb-2">
              Drop-off Location
            </label>
            <input
              id="dropoff_location"
              type="text"
              placeholder="Enter drop-off location in UAE"
              {...register('dropoff_location')}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
            {errors.dropoff_location && (
              <p className="text-sm text-destructive mt-1">{errors.dropoff_location.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-semibold mb-2">
                Date Required
              </label>
              <input
                id="date"
                type="date"
                {...register('date')}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
              {errors.date && (
                <p className="text-sm text-destructive mt-1">{errors.date.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-semibold mb-2">
                Time Required
              </label>
              <input
                id="time"
                type="time"
                {...register('time')}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
              {errors.time && (
                <p className="text-sm text-destructive mt-1">{errors.time.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Temperature Requirement */}
      <Card>
        <CardHeader>
          <CardTitle>Step 3: Temperature Requirement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="temperature_requirement" className="block text-sm font-semibold mb-2">
              Required Temperature Range
            </label>
            <select
              id="temperature_requirement"
              {...register('temperature_requirement')}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            >
              <option value="">Select temperature range...</option>
              <option value="frozen">Frozen (-18°C to -25°C)</option>
              <option value="chilled">Chilled (-5°C to +5°C)</option>
              <option value="ambient">Ambient (+5°C to +15°C)</option>
            </select>
            {errors.temperature_requirement && (
              <p className="text-sm text-destructive mt-1">{errors.temperature_requirement.message}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Step 4: Select Services */}
      <Card>
        <CardHeader>
          <CardTitle>Step 4: Add Services (Optional)</CardTitle>
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

      {/* Step 5: Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Step 5: Your Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Company / Name
            </label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
            )}
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
        Request Quote & Book
      </Button>
    </form>
  )
}
