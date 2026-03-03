import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

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
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet the Founder</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Steph.jpg"
                  alt="Stephine Smith - Founder"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
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
                <p className="text-gray-600 mb-4">
                  We believe meaningful conversations require being fully present.
                </p>
                <p className="text-gray-600 mb-4">
                  Presence means slowing down, putting distractions aside, and giving people your full attention.
                </p>
                <p className="text-gray-600">
                  At Conversation Hub, we create tools that help people show up mentally, emotionally, and relationally — for real connection.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Curiosity</h3>
                <p className="text-gray-600 mb-4">
                  We value curiosity over assumptions.
                </p>
                <p className="text-gray-600 mb-4">
                  Curiosity invites us to ask thoughtful questions, listen openly, and seek understanding rather than quick answers.
                </p>
                <p className="text-gray-600">
                  Our cards are designed to spark curiosity that leads to deeper self-awareness and empathy toward others.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Human Connection</h3>
                <p className="text-gray-600 mb-4">
                  At the core of everything we do is human connection.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe honest conversations build trust, strengthen relationships, and remind people they are not alone.
                </p>
                <p className="text-gray-600">
                  Conversation Hub exists to help people connect beyond surface-level interactions and experience genuine, meaningful relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Why Join Conversation Hub?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Conversation Hub is more than cards or content — it's a movement to help people reconnect with themselves and with others in a meaningful way.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When you join Conversation Hub, you become part of a growing community that believes in slowing down, asking better questions, and creating spaces where people feel seen, heard, and valued.
            </p>
            
            <h3 className="text-2xl font-bold mb-6">By joining us, you will:</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start">
                <span className="text-accent mr-4 font-bold">●</span>
                <span>Be part of a purpose-driven project focused on real human connection</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-4 font-bold">●</span>
                <span>Help shape conversations that inspire growth, healing, and understanding</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-4 font-bold">●</span>
                <span>Gain hands-on experience in a creative, community-centered initiative</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-4 font-bold">●</span>
                <span>Collaborate with people who value presence, curiosity, and authenticity</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-4 font-bold">●</span>
                <span>Contribute to content, products, and experiences that impact lives beyond social media</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-4 font-bold">●</span>
                <span>Grow personally while helping others do the same</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed italic">
              Whether you're volunteering, interning, or working with us professionally, your voice, skills, and heart matter here.
            </p>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Opportunities to Get Involved</h2>
            
            {/* Volunteer Roles */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-primary">Volunteer Roles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3 text-primary">Community Engagement Volunteer</h4>
                  <p className="text-gray-600">
                    Help host conversations online and offline, welcome community members, and support events and product launches.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3 text-primary">Content & Conversation Facilitator</h4>
                  <p className="text-gray-600">
                    Support the creation and testing of conversation questions, guide small group discussions, and help refine card content.
                  </p>
                </div>
              </div>
            </div>

            {/* Internship Roles */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-primary">Internship Roles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3 text-primary">Social Media & Content Intern</h4>
                  <p className="text-gray-600">
                    Assist with creating reels, posts, captions, and storytelling content that shares the heart of Conversation Hub.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3 text-primary">Product & Research Intern</h4>
                  <p className="text-gray-600">
                    Help test the conversation cards, gather feedback, document insights, and support product improvement and development.
                  </p>
                </div>
              </div>
            </div>

            {/* Paid Roles */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Paid Roles (As We Grow)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3 text-primary">Creative Director / Brand Lead</h4>
                  <p className="text-gray-600">
                    Lead the visual identity, storytelling, campaigns, and creative direction across social media, website, and products.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3 text-primary">Operations & Partnerships Manager</h4>
                  <p className="text-gray-600">
                    Manage logistics, printing, distribution, partnerships, studio coordination, and support the growth of events and products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
