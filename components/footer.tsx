'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="font-serif font-bold text-2xl">ColdTrans</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional refrigerated logistics solutions for food, pharmaceutical, and catering businesses across the UAE.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Services</h3>
            <div className="space-y-3">
              <Link href="/fleet" className="text-white/70 hover:text-white text-sm transition block">Fleet</Link>
              <Link href="/services" className="text-white/70 hover:text-white text-sm transition block">Cold Solutions</Link>
              <Link href="/about" className="text-white/70 hover:text-white text-sm transition block">About</Link>
              <Link href="/contact" className="text-white/70 hover:text-white text-sm transition block">Contact</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Company</h3>
            <div className="space-y-3">
              <Link href="#" className="text-white/70 hover:text-white text-sm transition block">Privacy Policy</Link>
              <Link href="#" className="text-white/70 hover:text-white text-sm transition block">Terms of Service</Link>
              <Link href="#" className="text-white/70 hover:text-white text-sm transition block">Careers</Link>
              <Link href="#" className="text-white/70 hover:text-white text-sm transition block">Blog</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-white/50 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white/50 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">info@coldtrans.ae</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/50 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2024 ColdTrans UAE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
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
