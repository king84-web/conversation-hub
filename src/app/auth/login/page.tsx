'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Login() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [secretKey, setSecretKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, secretKey })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Login failed')
        setLoading(false)
        return
      }

      // Store token in localStorage
      localStorage.setItem('authToken', data.token)
      localStorage.setItem('userId', data.userId)
      localStorage.setItem('userName', data.userName)
      
      // Redirect to cards
      router.push('/cards')
    } catch (err) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-2 text-center">Welcome</h1>
            <p className="text-gray-600 text-center mb-8">
              Sign in with your credentials to access Conversation Hub
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Secret Key</label>
                <input
                  type="password"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  placeholder="Enter your secret key"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-primary px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Don't have access yet?</p>
              <p className="mt-2">
                Contact Stephine via WhatsApp:{' '}
                <a
                  href="https://wa.me/250798697053?text=Hi!%20I%27d%20like%20to%20access%20Conversation%20Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline"
                >
                  +250798697053
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
