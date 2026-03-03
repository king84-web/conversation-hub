"use client"

import { useState } from 'react'

interface Props {
  onAdd: (title: string, content: string, image?: string) => void
}

export default function PromoForm({ onAdd }: Props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(title, content, image || undefined)
    setTitle('')
    setContent('')
    setImage('')
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Promo title"
        required
        className="w-full px-3 py-2 border rounded"
      />

      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Promo content"
        required
        className="w-full px-3 py-2 border rounded h-24"
      />

      <input
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="Image URL (optional)"
        className="w-full px-3 py-2 border rounded"
      />

      <button className="bg-accent text-primary px-4 py-2 rounded font-semibold">Add Promo</button>
    </form>
  )
}
