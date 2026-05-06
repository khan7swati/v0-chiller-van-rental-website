'use client'

import { useSearchParams } from 'next/navigation'
import { BookingForm } from '@/components/booking-form'

export function BookingFormWrapper() {
  const searchParams = useSearchParams()
  const vanId = searchParams.get('van')

  return <BookingForm defaultVanId={vanId || undefined} />
}
