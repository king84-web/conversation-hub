"use client"

import { useState, useEffect } from 'react'

interface Props {
  onUpdate: (data: { primaryColor?: string; sponsor?: string; heroImage?: string }) => void
  current?: any
}

export default function SettingsForm({ onUpdate, current }: Props) {
  const [primaryColor, setPrimaryColor] = useState('')
  const [sponsor, setSponsor] = useState('')
  const [heroImage, setHeroImage] = useState('')

  useEffect(() => {
    if (current) {
      if (current.primaryColor) setPrimaryColor(current.primaryColor)
      if (current.sponsor) setSponsor(current.sponsor)
      if (current.heroImage) setHeroImage(current.heroImage)
    }
  }, [current])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate({ primaryColor: primaryColor || undefined, sponsor: sponsor || undefined, heroImage: heroImage || undefined })
  }

  return (
    <form onSubmit={submit} className="space-y-3 max-w-md">
      <div>
        <label className="block text-sm font-semibold mb-1">Primary Color</label>
        <input
          value={primaryColor}
          onChange={e => setPrimaryColor(e.target.value)}
          placeholder="#06B6D4 or teal-500"
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Sponsor</label>
        <input
          value={sponsor}
          onChange={e => setSponsor(e.target.value)}
          placeholder="Sponsor name or short HTML"
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Hero Image URL</label>
        <input
          value={heroImage}
          onChange={e => setHeroImage(e.target.value)}
          placeholder="/images/hero.jpg or https://..."
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <button className="bg-accent text-primary px-4 py-2 rounded font-semibold">Update Settings</button>
    </form>
  )
}
