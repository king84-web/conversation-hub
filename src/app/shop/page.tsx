import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Shop() {
  const whatsappUrl = 'https://wa.me/250798697053?text=Hi!%20I%27d%20like%20to%20order%20the%20Conversation%20Hub%20Question%20Cards.%20How%20much%20is%20it%20and%20how%20long%20before%20I%20receive%20them?'

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section 
          className="text-white py-16 relative"
          style={{
            backgroundImage: 'url(/images/hero-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-down" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Shop</h1>
            <p className="text-gray-300 animate-fade-in-up" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Explore our conversation cards and connect deeper</p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Product */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Product Image - Purpose & Dreams Deck</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6">Conversation Hub Question Cards</h2>

                  <div className="mb-6">
                    <h3 className="font-bold mb-3">What's Inside the Box:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>A deck of Conversation Hub question cards</li>
                      <li>Cards grouped by depth (light, reflective, deep)</li>
                      <li>A simple instruction guide on how to use the cards</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-3">About the Cards:</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Conversation Hub Cards are thoughtfully curated question cards created to spark intentional, honest, and meaningful conversations. Each card invites you to reflect, share openly, and listen without judgment.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      The questions range from light and reflective to deep and thought-provoking, making the cards suitable for different settings and emotional depths.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-3">How to Use:</h3>
                    <ol className="list-decimal list-inside text-gray-600 space-y-2">
                      <li>Gather with one or more people in a comfortable space</li>
                      <li>Shuffle the cards and pick one at random</li>
                      <li>Read the question out loud</li>
                      <li>Take turns answering — or allow one person to respond</li>
                      <li>Listen actively without interrupting or judging</li>
                      <li>Reflect together or move to the next card</li>
                    </ol>
                    <p className="text-gray-600 mt-4 text-sm italic">
                      There are no right or wrong answers. The purpose is connection, not perfection.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-3">Perfect For:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Personal reflection</li>
                      <li>Friend gatherings</li>
                      <li>Couples' conversations</li>
                      <li>Church or faith-based groups</li>
                      <li>Workshops and retreats</li>
                    </ul>
                  </div>

                  <p className="text-3xl font-bold text-accent mb-8">Price: TBD RWF</p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white px-8 py-4 rounded font-bold hover:bg-green-600 transition"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Coming Soon Section */}
            <div className="bg-secondary p-12 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">More Decks Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're working on additional conversation card decks. Join our community to be notified when they launch.
              </p>
              <Link
                href="/try-cards"
                className="inline-block bg-primary text-white px-8 py-3 rounded font-bold hover:bg-opacity-90 transition"
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
