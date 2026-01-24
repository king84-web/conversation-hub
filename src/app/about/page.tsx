import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {
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
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-down" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>About Us</h1>
            <p className="text-gray-300 animate-fade-in-up" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Discover the story behind Conversation Hub</p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Conversation Hub was born from a deep desire to help people connect authentically in a world full of noise and surface-level interactions. We believe that transformation often begins with one good conversation — where people feel truly heard, understood, and valued.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is simple: to create tools and spaces that help people have conversations that actually matter. Whether it's with a partner, family member, friend, or community, Conversation Hub provides the framework for meaningful dialogue.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              "To help people listen actively, share openly, and connect deeply."
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet the Founder</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Stephine's Photo</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Stephine Smith</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Stephine is a community builder and administrator passionate about helping people discover their potential and build meaningful relationships.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With experience in administration, quality management, and faith-based community work, Stephine created Conversation Hub out of a deep desire to see people connect authentically, have honest conversations, and feel truly heard.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Stephine believes that transformation often begins with one good conversation. Her vision is to create a world where meaningful dialogue is accessible to everyone — in friendships, families, faith communities, and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Presence</h3>
                <p className="text-gray-600">
                  [Description of the Presence value to be provided]
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Curiosity</h3>
                <p className="text-gray-600">
                  [Description of the Curiosity value to be provided]
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Human Connection</h3>
                <p className="text-gray-600">
                  [Description of the Human Connection value to be provided]
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
