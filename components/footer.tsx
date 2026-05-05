'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-white border-t border-border">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-bold text-lg">ColdTrans UAE</span>
            </div>
            <p className="text-white/80 text-sm">
              Professional cold transport and refrigerated logistics solutions across UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="text-white/70 hover:text-white text-sm transition">Home</Link><br />
              <Link href="/fleet" className="text-white/70 hover:text-white text-sm transition">Fleet</Link><br />
              <Link href="/services" className="text-white/70 hover:text-white text-sm transition">Services</Link><br />
              <Link href="/booking" className="text-white/70 hover:text-white text-sm transition">Booking</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="text-white/70 hover:text-white text-sm transition">About Us</Link><br />
              <Link href="/contact" className="text-white/70 hover:text-white text-sm transition">Contact</Link><br />
              <Link href="#" className="text-white/70 hover:text-white text-sm transition">Privacy Policy</Link><br />
              <Link href="#" className="text-white/70 hover:text-white text-sm transition">Terms & Conditions</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 text-white/60 mt-0.5" />
                <span className="text-white/80">+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 text-white/60 mt-0.5" />
                <span className="text-white/80">info@coldtrans.ae</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-white/60 mt-0.5" />
                <span className="text-white/80">Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2024 ColdTrans UAE. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-white transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
