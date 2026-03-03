'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function SignUp() {
  const whatsappLink = 'https://wa.me/250798697053?text=Hi%20Stephine!%20I%27d%20like%20to%20access%20Conversation%20Hub.%20Please%20add%20me%20to%20the%20platform.'

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-2 text-center">Join Conversation Hub</h1>
            <p className="text-gray-600 text-center mb-12">
              Take the first step towards meaningful conversations
            </p>

            <div className="space-y-8">
              {/* How to Get Access */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">How to Get Access</h2>
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-primary font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Contact Stephine on WhatsApp</h3>
                      <p className="text-gray-600">Send her a message with your name and a brief introduction about yourself.</p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 bg-green-500 text-white px-6 py-2 rounded font-semibold hover:bg-green-600 transition"
                      >
                        📱 Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-primary font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Get Your Secret Key</h3>
                      <p className="text-gray-600">Once Stephine confirms your details, she'll provide you with a secret key and your access instructions.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-primary font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Login to Conversation Hub</h3>
                      <p className="text-gray-600">Use your name and the secret key provided to login and access all features.</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-primary font-bold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Start Your Journey</h3>
                      <p className="text-gray-600">Explore the Cards Hub, answer thought-provoking questions, and chat with Steph for deeper conversations.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-white border-2 border-green-500 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Message Stephine on WhatsApp with your name to request access.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition"
                >
                  📱 Open WhatsApp
                </a>
              </div>

              {/* Already Have Access */}
              <div className="text-center">
                <p className="text-gray-600 mb-4">Already have your secret key?</p>
                <Link 
                  href="/auth/login" 
                  className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
                >
                  Sign In Here
                </Link>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold mb-2">Secure & Private</h3>
              <p className="text-sm text-gray-600">Your conversations are confidential and secure</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-bold mb-2">Curated Community</h3>
              <p className="text-sm text-gray-600">Stephine personally approves each member</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold mb-2">AI Conversation Partner</h3>
              <p className="text-sm text-gray-600">Chat with Steph for deeper reflections</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
