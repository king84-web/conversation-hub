import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Community() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Community & Events</h1>
            <p className="text-gray-300">Connect with others and host conversations</p>
          </div>
        </section>

        {/* Upcoming Experiences Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Experiences</h2>
            <div className="bg-secondary p-12 rounded-lg text-center">
              <p className="text-gray-600 text-lg">
                Exciting community experiences are coming soon! Check back for details on our upcoming events and gatherings.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Card Testing Sessions</h2>
            <p className="text-center text-gray-600 mb-8">
              Gallery and photos from community testing sessions coming soon.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Photo {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">What People Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent">
                <p className="text-gray-600 mb-4 italic">
                  "[Testimonial from beta tester to be added]"
                </p>
                <p className="font-bold">- Beta Tester Name</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent">
                <p className="text-gray-600 mb-4 italic">
                  "[Testimonial from beta tester to be added]"
                </p>
                <p className="font-bold">- Beta Tester Name</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent">
                <p className="text-gray-600 mb-4 italic">
                  "[Testimonial from beta tester to be added]"
                </p>
                <p className="font-bold">- Beta Tester Name</p>
              </div>
            </div>
          </div>
        </section>

        {/* Host a Conversation Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Host a Conversation</h2>
            <p className="text-center text-gray-600 mb-12">
              Interested in hosting a Conversation Hub experience at your event? Let's connect!
            </p>

            <form className="space-y-4 bg-white p-8 rounded-lg shadow-md">
              <div>
                <label className="block mb-2 font-semibold">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+250 7XX XXX XXX"
                  className="w-full px-4 py-3 rounded border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Event Type</label>
                <input
                  type="text"
                  placeholder="e.g., Wedding, Corporate Event, Community Gathering"
                  className="w-full px-4 py-3 rounded border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Event Details</label>
                <textarea
                  placeholder="Tell us about your event and how you'd like to use the cards"
                  rows={5}
                  className="w-full px-4 py-3 rounded border border-gray-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded font-bold hover:bg-opacity-90 transition"
              >
                Submit Event Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
