'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
            ❄️
          </div>
          <span className="hidden sm:inline font-semibold text-lg text-foreground">ColdTrans UAE</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/">
            <Button variant="ghost" size="sm">Home</Button>
          </Link>
          <Link href="/fleet">
            <Button variant="ghost" size="sm">Fleet</Button>
          </Link>
          <Link href="/services">
            <Button variant="ghost" size="sm">Services</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" size="sm">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="sm">Contact</Button>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
          <Link href="/booking" className="ml-2">
            <Button size="sm">Book Now</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
