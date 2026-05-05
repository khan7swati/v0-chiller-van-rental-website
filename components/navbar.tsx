'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif font-bold text-2xl text-slate-900">ColdTrans</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/fleet" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            Fleet
          </Link>
          <Link href="/services" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link href="/booking">
            <Button size="sm" className="hidden sm:inline-flex bg-slate-900 hover:bg-slate-800 text-white">
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
