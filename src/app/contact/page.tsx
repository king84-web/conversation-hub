import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Contact() {
  const whatsappUrl = 'https://wa.me/250798697053'

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
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-down" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Contact Us</h1>
            <p className="text-gray-300 animate-fade-in-up" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>We'd love to hear from you</p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-lg"
                    >
                      +250 798 697 053
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Quick inquiries and orders</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a href="mailto:ssmithstephine@gmail.com" className="text-accent hover:underline">
                      ssmithstephine@gmail.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">For detailed inquiries</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Instagram</h3>
                    <a href="#" className="text-accent hover:underline">
                      @conversationhub_rw
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Follow for updates and inspiration</p>
                  </div>

                  <div className="bg-secondary p-6 rounded-lg mt-8">
                    <h4 className="font-bold mb-2">Response Time</h4>
                    <p className="text-gray-600 text-sm">
                      We typically respond to inquiries within 24-48 hours. For urgent matters, please reach out via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form className="space-y-4">
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
                    <label className="block mb-2 font-semibold">Phone Number (optional)</label>
                    <input
                      type="tel"
                      placeholder="+250 7XX XXX XXX"
                      className="w-full px-4 py-3 rounded border border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold">Message Type</label>
                    <select className="w-full px-4 py-3 rounded border border-gray-300" required>
                      <option>Select a topic</option>
                      <option>Product Inquiry</option>
                      <option>Partnership</option>
                      <option>Event Hosting</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold">Message</label>
                    <textarea
                      placeholder="Tell us what's on your mind"
                      rows={5}
                      className="w-full px-4 py-3 rounded border border-gray-300"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 rounded font-bold hover:bg-opacity-90 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Partner With Us Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Partner with Us</h2>
            <p className="text-center text-gray-600 mb-8">
              Interested in collaborating or becoming a business partner? We'd love to explore opportunities together.
            </p>

            <form className="bg-white p-8 rounded-lg shadow-md space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-semibold">Company/Organization Name</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 rounded border border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded border border-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded border border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Phone</label>
                  <input
                    type="tel"
                    placeholder="+250 7XX XXX XXX"
                    className="w-full px-4 py-3 rounded border border-gray-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-semibold">Partnership Type</label>
                <select className="w-full px-4 py-3 rounded border border-gray-300" required>
                  <option>Select partnership type</option>
                  <option>B2B Distribution</option>
                  <option>Event Sponsorship</option>
                  <option>Co-Creation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold">Partnership Details</label>
                <textarea
                  placeholder="Tell us about your partnership idea"
                  rows={4}
                  className="w-full px-4 py-3 rounded border border-gray-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-primary px-6 py-3 rounded font-bold hover:bg-opacity-90 transition"
              >
                Submit Partnership Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
