'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                SP
              </div>
              <span className="font-semibold text-lg text-foreground">SmartPath Vans</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for unforgettable van adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary text-sm">Home</Link><br />
              <Link href="/fleet" className="text-muted-foreground hover:text-primary text-sm">Fleet</Link><br />
              <Link href="/services" className="text-muted-foreground hover:text-primary text-sm">Services</Link><br />
              <Link href="/booking" className="text-muted-foreground hover:text-primary text-sm">Booking</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary text-sm">About Us</Link><br />
              <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm">Contact</Link><br />
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</Link><br />
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm">Terms & Conditions</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">info@smartpath.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">123 Adventure Road, CA 94000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 SmartPath Vans. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
