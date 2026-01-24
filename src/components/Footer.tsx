'use client'

import Link from 'next/link'

export default function Footer() {
  const whatsappUrl = 'https://wa.me/250798697053'

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Conversation Hub</h3>
            <p className="text-sm text-gray-400">
              Better conversations start with better questions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
              <li><Link href="/shop" className="hover:text-accent transition">Shop</Link></li>
              <li><Link href="/about" className="hover:text-accent transition">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/community" className="hover:text-accent transition">Events</Link></li>
              <li><Link href="/join-team" className="hover:text-accent transition">Join Team</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                  WhatsApp: +250798697053
                </a>
              </li>
              <li><a href="mailto:info@conversationhub.com" className="hover:text-accent transition">Email</a></li>
              <li><a href="#" className="hover:text-accent transition">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Conversation Hub. All rights reserved.</p>
          <p className="mt-2">Developed by: <span className="text-accent">Solomon Kamara</span></p>
        </div>
      </div>
    </footer>
  )
}
