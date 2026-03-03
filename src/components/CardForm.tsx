"use client"

import { useState } from 'react'

interface Props {
  onAdd: (name: string, description: string, categories: string[]) => void
}

export default function CardForm({ onAdd }: Props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const cats = categories.split(',').map(c => c.trim()).filter(Boolean)
    onAdd(name, description, cats)
    setName('')
    setDescription('')
    setCategories('')
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Card name"
        required
        className="w-full px-3 py-2 border rounded"
      />

      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Short description"
        required
        className="w-full px-3 py-2 border rounded h-24"
      />

      <input
        value={categories}
        onChange={e => setCategories(e.target.value)}
        placeholder="Categories (comma separated)"
        className="w-full px-3 py-2 border rounded"
      />

      <button className="bg-accent text-primary px-4 py-2 rounded font-semibold">Add Card</button>
    </form>
  )
}
