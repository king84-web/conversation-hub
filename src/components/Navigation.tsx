'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="Conversation Hub Logo"
              width={150}
              height={60}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-accent transition">
              Home
            </Link>
            <Link href="/shop" className="hover:text-accent transition">
              Shop
            </Link>
            <Link href="/about" className="hover:text-accent transition">
              About
            </Link>
            <Link href="/try-cards" className="hover:text-accent transition">
              Try the Cards
            </Link>
            <Link href="/community" className="hover:text-accent transition">
              Community/Events
            </Link>
            <Link href="/join-team" className="hover:text-accent transition">
              Join the Team
            </Link>
            <Link href="/contact" className="hover:text-accent transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-accent">
              Home
            </Link>
            <Link href="/shop" className="block py-2 hover:text-accent">
              Shop
            </Link>
            <Link href="/about" className="block py-2 hover:text-accent">
              About
            </Link>
            <Link href="/try-cards" className="block py-2 hover:text-accent">
              Try the Cards
            </Link>
            <Link href="/community" className="block py-2 hover:text-accent">
              Community/Events
            </Link>
            <Link href="/join-team" className="block py-2 hover:text-accent">
              Join the Team
            </Link>
            <Link href="/contact" className="block py-2 hover:text-accent">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
