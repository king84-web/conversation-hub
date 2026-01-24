import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AdminDashboard() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-12">Admin Dashboard</h1>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-sm mb-2">Total Orders</p>
              <p className="text-3xl font-bold">—</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-sm mb-2">Total Revenue</p>
              <p className="text-3xl font-bold">— RWF</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-sm mb-2">New Subscribers</p>
              <p className="text-3xl font-bold">—</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-sm mb-2">Pending Orders</p>
              <p className="text-3xl font-bold">—</p>
            </div>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Orders Management</h2>
              <p className="text-gray-600 mb-4">View, filter, and manage all customer orders</p>
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                View Orders
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Email Subscribers</h2>
              <p className="text-gray-600 mb-4">Manage subscribers and send campaigns</p>
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                View Subscribers
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Products</h2>
              <p className="text-gray-600 mb-4">Add, edit, and manage products</p>
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                Manage Products
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Team Applications</h2>
              <p className="text-gray-600 mb-4">Review and manage job applications</p>
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                View Applications
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Analytics</h2>
              <p className="text-gray-600 mb-4">View sales and traffic analytics</p>
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                View Analytics
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Settings</h2>
              <p className="text-gray-600 mb-4">Configure integrations and settings</p>
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                Settings
              </button>
            </div>
          </div>

          {/* Implementation Notes */}
          <div className="bg-accent text-primary p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold mb-4">⚙️ Dashboard Features (Ready for Implementation)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Orders management with status updates</li>
              <li>Email campaign management</li>
              <li>Product inventory tracking</li>
              <li>Analytics and reporting</li>
              <li>Team application reviews</li>
              <li>Settings and integrations</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
