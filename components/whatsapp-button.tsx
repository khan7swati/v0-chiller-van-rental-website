'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const phoneNumber = '15551234567'
  const message = 'Hi, I&apos;d like to inquire about van rentals!'

  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
