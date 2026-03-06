import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TryCards() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="text-white py-16 md:py-24 relative min-h-96 flex items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-gray-900"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Try Our Conversation Cards</h1>
            <p className="text-xl md:text-2xl mb-4">Real questions. Real people. Real connection.</p>
            <p className="text-gray-300 text-lg mb-8">Experience meaningful conversations with our Cards</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cards"
                className="bg-accent text-primary px-8 py-4 rounded font-bold hover:bg-opacity-90 transition text-center"
              >
                👉 Try the Cards Now
              </Link>
              <Link
                href="/auth/signup"
                className="bg-white text-primary px-8 py-4 rounded font-bold hover:bg-gray-100 transition text-center"
              >
                👉 Sign Up to Try Them Live
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">How You Can Try Our Cards</h2>
            <p className="text-center text-gray-600 mb-12 text-lg font-semibold">4 Simple Steps</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="bg-secondary p-8 rounded-lg text-center">
                <div className="text-5xl font-bold text-accent mb-4">1</div>
                <h3 className="text-xl font-bold mb-4">Pick a Card</h3>
                <p className="text-gray-600">
                  Explore a few sample questions from our Purpose & Dreams deck.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-secondary p-8 rounded-lg text-center">
                <div className="text-5xl font-bold text-accent mb-4">2</div>
                <h3 className="text-xl font-bold mb-4">Answer Honestly</h3>
                <p className="text-gray-600">
                  No pressure. No right or wrong answers. Just you.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-secondary p-8 rounded-lg text-center">
                <div className="text-5xl font-bold text-accent mb-4">3</div>
                <h3 className="text-xl font-bold mb-4">Share or Reflect</h3>
                <p className="text-gray-600">
                  Use the cards with a friend, partner, family member — or journal on your own.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-secondary p-8 rounded-lg text-center">
                <div className="text-5xl font-bold text-accent mb-4">4</div>
                <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
                <p className="text-gray-600">
                  Sign up to get updates, live recordings, and early access to the full deck.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/cards"
                className="inline-block bg-accent text-primary px-8 py-4 rounded font-bold hover:bg-opacity-90 transition"
              >
                👉 Try Sample Questions
              </Link>
            </div>
          </div>
        </section>

        {/* Sample Questions Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">A Peek Inside the Cards</h2>
            <p className="text-center text-gray-600 mb-12">Sample Questions Preview</p>
            
            <div className="bg-white p-8 rounded-lg mb-8">
              <ul className="space-y-4 text-gray-700">
                <li className="text-lg">
                  <span className="text-accent font-bold">●</span> "What does a meaningful life look like to you right now?"
                </li>
                <li className="text-lg">
                  <span className="text-accent font-bold">●</span> "What dream have you postponed, and why?"
                </li>
                <li className="text-lg">
                  <span className="text-accent font-bold">●</span> "Who are you becoming in this season?"
                </li>
                <li className="text-lg">
                  <span className="text-accent font-bold">●</span> "What would you try if fear wasn't a factor?"
                </li>
              </ul>
              <p className="text-gray-600 mt-6 italic">These are just a few. The full deck goes deeper.</p>
            </div>

            <div className="text-center">
              <Link
                href="/auth/signup"
                className="inline-block bg-accent text-primary px-8 py-4 rounded font-bold hover:bg-opacity-90 transition"
              >
                👉 Get Full Access When We Launch
              </Link>
            </div>
          </div>
        </section>

        {/* Who These Cards Are For */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">These Cards Are For You If:</h2>
            
            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex items-start">
                <span className="text-accent font-bold text-2xl mr-4">✓</span>
                <span>You crave deeper conversations beyond small talk</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent font-bold text-2xl mr-4">✓</span>
                <span>You want to reconnect — with yourself or others</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent font-bold text-2xl mr-4">✓</span>
                <span>You're tired of being constantly online but still feeling disconnected</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent font-bold text-2xl mr-4">✓</span>
                <span>You enjoy reflection, growth, and intentional living</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent font-bold text-2xl mr-4">✓</span>
                <span>You value presence and human connection</span>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/cards"
                className="inline-block bg-accent text-primary px-8 py-4 rounded font-bold hover:bg-opacity-90 transition"
              >
                Try the Cards Live
              </Link>
            </div>
          </div>
        </section>
        {/* Community & Live Sessions */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Try the Cards Live</h2>
            <p className="text-center text-gray-600 mb-8 text-lg font-semibold">Community Angle</p>
            
            <div className="bg-white p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                From time to time, we invite selected people to join us for live recordings, small group conversations, and content creation sessions using the cards.
              </p>
              
              <h3 className="text-xl font-bold mb-6">What you'll get:</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">●</span>
                  <span>Try the cards in a real setting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">●</span>
                  <span>Be part of our recorded conversations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">●</span>
                  <span>Meet like-minded people</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">●</span>
                  <span>Help shape future decks</span>
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/auth/signup"
                  className="inline-block bg-accent text-primary px-8 py-4 rounded font-bold hover:bg-opacity-90 transition"
                >
                  👉 Apply to Try the Cards Live
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sign-Up Box */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary to-gray-800 text-white p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Stay in the Loop</h3>
              <p className="text-center mb-8 text-gray-200">
                Want early access, live sessions, and updates on our official launch?
              </p>
              
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
                  <label htmlFor="usage" className="block mb-2 font-semibold">How would you like to use the cards?</label>
                  <select id="usage" className="w-full px-4 py-3 rounded text-primary">
                    <option>Select an option</option>
                    <option>Personal reflection</option>
                    <option>With friends</option>
                    <option>Events & groups</option>
                    <option>Content creation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-primary px-6 py-3 rounded font-bold hover:bg-opacity-90 transition"
                >
                  👉 Sign Me Up
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Why We Created These Cards */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Why We Created These Cards</h2>
            
            <div className="bg-white p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Conversation Hub was created because we noticed how rare deep, honest conversations have become. These cards are an invitation to slow down, listen, and connect — again."
              </p>
              <p className="text-right text-accent font-bold mt-6">— Stephine, Founder</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">Ready to Start the Conversation?</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cards"
                className="bg-accent text-primary px-8 py-4 rounded font-bold hover:bg-opacity-90 transition text-center"
              >
                Try the Cards Now
              </Link>
              <Link
                href="/auth/signup"
                className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-opacity-90 transition text-center"
              >
                Join the Community
              </Link>
              <a
                href="https://wa.me/250798697053?text=Hi%20Steph,%20I'd%20like%20to%20learn%20more%20about%20Conversation%20Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white px-8 py-4 rounded font-bold hover:bg-gray-700 transition text-center"
              >
                Message Steph on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
