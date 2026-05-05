'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-lg text-foreground">ColdTrans UAE</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/fleet" className="text-sm font-medium text-foreground hover:text-primary">
            Fleet
          </Link>
          <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link href="/booking">
            <Button size="sm" className="hidden sm:inline-flex">Request a quote</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
