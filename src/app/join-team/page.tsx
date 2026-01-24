import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function JoinTeam() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Join the Team</h1>
            <p className="text-gray-300">Help us build meaningful conversations at scale</p>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Work with Conversation Hub?</h2>
            <div className="bg-secondary p-12 rounded-lg mb-8">
              <p className="text-gray-600 leading-relaxed">
                [Details about why someone should join the team to be provided by Stephine]
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-2xl mb-2">🎯</p>
                <h3 className="font-bold mb-2">Mission-Driven</h3>
                <p className="text-sm text-gray-600">Be part of a movement for human connection</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-2xl mb-2">🤝</p>
                <h3 className="font-bold mb-2">Collaborative</h3>
                <p className="text-sm text-gray-600">Work with passionate people who care</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-2xl mb-2">📈</p>
                <h3 className="font-bold mb-2">Growing</h3>
                <p className="text-sm text-gray-600">Help build something from the ground up</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Open Roles</h2>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Content Creator</h3>
                <p className="text-gray-600 mb-4">
                  Help us create compelling content and stories that inspire community.
                </p>
                <div className="flex gap-4">
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">Volunteer</span>
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">Internship</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Events Coordinator</h3>
                <p className="text-gray-600 mb-4">
                  Plan and execute community experiences and launch events.
                </p>
                <div className="flex gap-4">
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">Volunteer</span>
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">Internship</span>
                  <span className="bg-accent text-primary px-3 py-1 rounded text-sm">Paid</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Partnerships Manager</h3>
                <p className="text-gray-600 mb-4">
                  Build relationships with organizations and expand Conversation Hub's reach.
                </p>
                <div className="flex gap-4">
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">Volunteer</span>
                  <span className="bg-accent text-primary px-3 py-1 rounded text-sm">Paid</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Designer</h3>
                <p className="text-gray-600 mb-4">
                  Create visual experiences that embody our brand and values.
                </p>
                <div className="flex gap-4">
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">Volunteer</span>
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">Internship</span>
                  <span className="bg-accent text-primary px-3 py-1 rounded text-sm">Paid</span>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-12">
              Don't see your role? Send us a message - we're always open to talented individuals with a passion for meaningful connection.
            </p>
          </div>
        </section>

        {/* Application Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Apply Now</h2>

            <form className="bg-white p-8 rounded-lg shadow-md space-y-4">
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
                <label className="block mb-2 font-semibold">Which role interests you?</label>
                <select className="w-full px-4 py-3 rounded border border-gray-300" required>
                  <option>Select a role</option>
                  <option>Content Creator</option>
                  <option>Events Coordinator</option>
                  <option>Partnerships Manager</option>
                  <option>Designer</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold">Tell us about yourself</label>
                <textarea
                  placeholder="Your background, skills, and why you're interested in joining"
                  rows={5}
                  className="w-full px-4 py-3 rounded border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Portfolio or Links (optional)</label>
                <input
                  type="text"
                  placeholder="https://your-portfolio.com"
                  className="w-full px-4 py-3 rounded border border-gray-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded font-bold hover:bg-opacity-90 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
