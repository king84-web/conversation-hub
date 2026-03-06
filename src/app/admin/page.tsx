'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Toast from '@/components/Toast'

interface User {
  id: string
  name: string
  secretKey: string
  createdAt: string
}

interface Message {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
  type: 'inquiry' | 'feedback' | 'feedback-form'
  status: 'unread' | 'read'
}

interface AdminStats {
  totalUsers: number
  totalMessages: number
  unreadMessages: number
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminPassword, setAdminPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'messages' | 'content'>('overview')
  const [users, setUsers] = useState<User[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [stats, setStats] = useState<AdminStats>({ totalUsers: 0, totalMessages: 0, unreadMessages: 0 })
  const [adminToken, setAdminToken] = useState('')
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [newUserName, setNewUserName] = useState('')
  const [showAddUserForm, setShowAddUserForm] = useState(false)

  // Load admin token from localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken')
    if (savedToken) {
      setIsAuthenticated(true)
      setAdminToken(savedToken)
      loadDashboardData(savedToken)
    }
  }, [])

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setLoginError('')

    try {
      const response = await fetch('/api/auth/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: adminPassword })
      })

      const data = await response.json()

      if (!response.ok) {
        setLoginError(data.error || 'Login failed')
        setLoading(false)
        return
      }

      const token = data.adminToken
      setAdminToken(token)
      setIsAuthenticated(true)
      setAdminPassword('')
      localStorage.setItem('adminToken', token)
      
      loadDashboardData(token)
      setToast({ message: 'Admin login successful!', type: 'success' })
    } catch (err) {
      setLoginError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  const loadDashboardData = async (token: string) => {
    try {
      const [statsRes, usersRes, messagesRes] = await Promise.all([
        fetch('/api/admin?action=stats', { headers: { 'x-admin-token': token } }),
        fetch('/api/admin?action=users', { headers: { 'x-admin-token': token } }),
        fetch('/api/admin?action=messages', { headers: { 'x-admin-token': token } })
      ])

      if (statsRes.ok) setStats(await statsRes.json().then(d => d.data || {}))
      if (usersRes.ok) setUsers(await usersRes.json().then(d => d.data || []))
      if (messagesRes.ok) setMessages(await messagesRes.json().then(d => d.data || []))
    } catch (error) {
      console.error('Error loading dashboard data:', error)
    }
    setLoading(false)
  }

  const addUser = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newUserName.trim()) return

    setLoading(true)
    try {
      const response = await fetch('/api/admin?action=add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        },
        body: JSON.stringify({ name: newUserName })
      })

      const data = await response.json()

      if (!response.ok) {
        setToast({ message: data.error || 'Failed to add user', type: 'error' })
        setLoading(false)
        return
      }

      setUsers([data.data, ...users])
      setNewUserName('')
      setShowAddUserForm(false)
      setToast({ message: `User "${newUserName}" added! Secret key: ${data.data.secretKey}`, type: 'success' })
    } catch (error) {
      setToast({ message: 'An error occurred', type: 'error' })
    }
    setLoading(false)
  }

  const deleteUser = async (userId: string, userName: string) => {
    if (!confirm(`Are you sure you want to delete user "${userName}"?`)) return

    setLoading(true)
    try {
      const response = await fetch('/api/admin?action=delete-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        },
        body: JSON.stringify({ userId })
      })

      if (!response.ok) {
        setToast({ message: 'Failed to delete user', type: 'error' })
        setLoading(false)
        return
      }

      setUsers(users.filter(u => u.id !== userId))
      setToast({ message: `User "${userName}" deleted`, type: 'success' })
    } catch (error) {
      setToast({ message: 'An error occurred', type: 'error' })
    }
    setLoading(false)
  }

  const resetUserKey = async (userId: string, userName: string) => {
    if (!confirm(`Reset secret key for "${userName}"?`)) return

    setLoading(true)
    try {
      const response = await fetch('/api/admin?action=reset-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        },
        body: JSON.stringify({ userId })
      })

      const data = await response.json()

      if (!response.ok) {
        setToast({ message: 'Failed to reset key', type: 'error' })
        setLoading(false)
        return
      }

      setUsers(users.map(u => u.id === userId ? data.data : u))
      setToast({ message: `New secret key: ${data.data.secretKey}`, type: 'success' })
    } catch (error) {
      setToast({ message: 'An error occurred', type: 'error' })
    }
    setLoading(false)
  }

  const markMessageRead = async (messageId: string) => {
    try {
      const response = await fetch('/api/admin?action=mark-read', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        },
        body: JSON.stringify({ id: messageId })
      })

      if (response.ok) {
        setMessages(messages.map(m => m.id === messageId ? { ...m, status: 'read' } : m))
      }
    } catch (error) {
      console.error('Error marking message as read:', error)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setAdminToken('')
    setAdminPassword('')
    localStorage.removeItem('adminToken')
    setToast({ message: 'Logged out', type: 'success' })
  }

  if (!isAuthenticated) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold mb-2 text-center">Admin Dashboard</h1>
              <p className="text-gray-600 text-center mb-8">Secure access only</p>

              {loginError && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleAdminLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Admin Password</label>
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-primary px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition disabled:opacity-50"
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {toast && (
            <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
          )}

          <div className="bg-white rounded-lg shadow-md">
            {/* Header */}
            <div className="border-b p-6 flex justify-between items-center">
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b flex-wrap">
              {(['overview', 'users', 'messages', 'content'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-semibold transition ${
                    activeTab === tab
                      ? 'bg-accent text-primary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <p className="text-gray-600 text-sm">Total Users</p>
                      <p className="text-3xl font-bold mt-2">{stats.totalUsers}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <p className="text-gray-600 text-sm">Total Messages</p>
                      <p className="text-3xl font-bold mt-2">{stats.totalMessages}</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                      <p className="text-gray-600 text-sm">Unread Messages</p>
                      <p className="text-3xl font-bold mt-2">{stats.unreadMessages}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Users Tab */}
              {activeTab === 'users' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Users Management</h2>
                    <button
                      onClick={() => setShowAddUserForm(!showAddUserForm)}
                      className="bg-accent text-primary px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition"
                    >
                      {showAddUserForm ? 'Cancel' : '+ Add User'}
                    </button>
                  </div>

                  {showAddUserForm && (
                    <form onSubmit={addUser} className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">User Name</label>
                        <input
                          type="text"
                          value={newUserName}
                          onChange={(e) => setNewUserName(e.target.value)}
                          placeholder="Enter user's name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-accent text-primary px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
                      >
                        {loading ? 'Adding...' : 'Add User'}
                      </button>
                    </form>
                  )}

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100 border-b">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold">Name</th>
                          <th className="px-4 py-3 text-left font-semibold">Secret Key</th>
                          <th className="px-4 py-3 text-left font-semibold">Created</th>
                          <th className="px-4 py-3 text-left font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map(user => {
                          const createdDate = user.createdAt ? new Date(user.createdAt) : null
                          const isValidDate = createdDate && !isNaN(createdDate.getTime())
                          return (
                          <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold">{user.name}</td>
                            <td className="px-4 py-3">
                              <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">{user.secretKey || '-'}</code>
                            </td>
                            <td className="px-4 py-3 text-xs text-gray-500">
                              {isValidDate ? createdDate.toLocaleDateString() : 'Unknown'}
                            </td>
                            <td className="px-4 py-3 space-x-2">
                              <button
                                onClick={() => resetUserKey(user.id, user.name)}
                                disabled={loading}
                                className="text-blue-600 hover:underline text-xs font-semibold disabled:opacity-50"
                              >
                                Reset Key
                              </button>
                              <button
                                onClick={() => deleteUser(user.id, user.name)}
                                disabled={loading}
                                className="text-red-600 hover:underline text-xs font-semibold disabled:opacity-50"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        )
                        })}
                      </tbody>
                    </table>
                    {users.length === 0 && (
                      <p className="text-center text-gray-500 py-8">No users yet</p>
                    )}
                  </div>
                </div>
              )}

              {/* Messages Tab */}
              {activeTab === 'messages' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Messages ({stats.unreadMessages} unread)</h2>
                  <div className="space-y-4">
                    {messages.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">No messages</p>
                    ) : (
                      messages.map(msg => (
                        <div
                          key={msg.id}
                          className={`p-4 rounded-lg border ${
                            msg.status === 'unread' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                          }`}
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <p className="font-semibold">{msg.name}</p>
                              <p className="text-sm text-gray-500">{msg.email}</p>
                              <p className="font-bold mt-2">{msg.subject}</p>
                              <p className="text-gray-700 mt-2">{msg.message}</p>
                              <p className="text-xs text-gray-500 mt-2">
                                {new Date(msg.createdAt).toLocaleString()}
                              </p>
                            </div>
                            {msg.status === 'unread' && (
                              <button
                                onClick={() => markMessageRead(msg.id)}
                                className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold hover:bg-blue-600 whitespace-nowrap"
                              >
                                Mark Read
                              </button>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Content Tab */}
              {activeTab === 'content' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Content Management</h2>
                  <p className="text-gray-600">Content management features coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
