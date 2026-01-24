import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  const whatsappUrl = 'https://wa.me/250798697053?text=Hi!%20I%27d%20like%20to%20order%20the%20Conversation%20Hub%20cards'

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section 
          className="text-white py-20 md:py-32 relative"
          style={{
            backgroundImage: 'url(/images/hero-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Better conversations start with better questions.
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in-up" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              Conversation Hub creates tools and spaces that help people connect deeply, offline and online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in">
              <Link
                href="/shop"
                className="bg-accent text-primary px-8 py-4 rounded font-bold hover:bg-opacity-90 transition animate-pulse-hover"
              >
                Shop the Cards
              </Link>
              <Link
                href="/try-cards"
                className="bg-white text-primary px-8 py-4 rounded font-bold hover:bg-gray-100 transition animate-pulse-hover"
              >
                Try the Cards
              </Link>
            </div>
          </div>
        </section>

        {/* What is Conversation Hub Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What is Conversation Hub?</h2>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Conversation Hub is a conversation tool designed to help people connect more deeply through meaningful questions. It creates safe spaces for honest dialogue, reflection, and understanding — whether among friends, couples, families, or small groups.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In a world full of noise and surface-level interactions, Conversation Hub helps people slow down, listen, and have conversations that actually matter.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">💭</div>
                <h3 className="text-xl font-bold mb-4">Personal Reflection</h3>
                <p className="text-gray-600">
                  Use the cards for introspection and understanding yourself better.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold mb-4">Deeper Connections</h3>
                <p className="text-gray-600">
                  Create meaningful moments with loved ones through intentional conversations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="text-xl font-bold mb-4">Safe Spaces</h3>
                <p className="text-gray-600">
                  Foster environments where people feel heard, understood, and accepted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Product Image</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Conversation Hub Question Cards</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Conversation Hub Cards are thoughtfully curated question cards created to spark intentional, honest, and meaningful conversations. Each card invites you to reflect, share openly, and listen without judgment.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The questions range from light and reflective to deep and thought-provoking, making the cards suitable for different settings and emotional depths.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-3">What's in the Box:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>A deck of Conversation Hub question cards</li>
                    <li>Cards grouped by depth (light, reflective, deep)</li>
                    <li>A simple instruction guide on how to use the cards</li>
                  </ul>
                </div>

                <p className="text-3xl font-bold text-accent mb-6">Price: TBD RWF</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-primary px-8 py-4 rounded font-bold hover:bg-opacity-90 transition"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Email Signup Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg mb-8">
              Want to try the cards before official launch? Join our community and get early access.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded text-primary"
                required
              />
              <button
                type="submit"
                className="bg-accent text-primary px-8 py-3 rounded font-bold hover:bg-opacity-90 transition"
              >
                Join Now
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
