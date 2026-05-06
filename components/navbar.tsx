'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif font-bold text-2xl text-foreground">ColdTrans</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/fleet" className="text-sm font-medium text-foreground/70 hover:text-foreground transition">
            Fleet
          </Link>
          <Link href="/services" className="text-sm font-medium text-foreground/70 hover:text-foreground transition">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground/70 hover:text-foreground transition">
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
          <Link href="/booking">
            <Button size="sm" className="hidden sm:inline-flex">
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
