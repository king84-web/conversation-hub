import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function TryCards() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Try the Cards</h1>
            <p className="text-gray-300">Get early access before official launch</p>
          </div>
        </section>

        {/* Early Access Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Early Access Program</h2>

            <div className="bg-secondary p-12 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4">About the Program</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                [Details about the early access program to be provided by Stephine. This section will explain what early access participants can expect.]
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
                <h3 className="font-bold mb-3">✨ Benefit 1</h3>
                <p className="text-gray-600 text-sm">
                  [Benefit description to be added]
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
                <h3 className="font-bold mb-3">✨ Benefit 2</h3>
                <p className="text-gray-600 text-sm">
                  [Benefit description to be added]
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
                <h3 className="font-bold mb-3">✨ Benefit 3</h3>
                <p className="text-gray-600 text-sm">
                  [Benefit description to be added]
                </p>
              </div>
            </div>

            {/* Signup Form */}
            <div className="bg-gradient-to-r from-primary to-gray-800 text-white p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Sign Up for Early Access</h3>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 font-semibold">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded text-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded text-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Phone Number (WhatsApp)</label>
                  <input
                    type="tel"
                    placeholder="+250 7XX XXX XXX"
                    className="w-full px-4 py-3 rounded text-primary"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">How did you hear about us?</label>
                  <select className="w-full px-4 py-3 rounded text-primary">
                    <option>Select an option</option>
                    <option>Friend/Family</option>
                    <option>Social Media</option>
                    <option>Instagram</option>
                    <option>Google Search</option>
                    <option>Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-primary px-6 py-3 rounded font-bold hover:bg-opacity-90 transition"
                >
                  Join the Early Access Program
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-8 bg-secondary rounded-lg">
              <h4 className="font-bold mb-4">What Happens Next?</h4>
              <ol className="space-y-3 text-gray-600 list-decimal list-inside">
                <li>We'll review your application</li>
                <li>Selected participants will receive the cards</li>
                <li>You'll join our feedback sessions</li>
                <li>Get exclusive early-bird pricing and community access</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
