"use client"

import { useEffect } from 'react'

interface Props {
  message: string | null
  type?: 'success' | 'error' | 'info'
  onClose: () => void
}

export default function Toast({ message, type, onClose }: Props) {
  useEffect(() => {
    if (!message) return
    const t = setTimeout(onClose, 3000)
    return () => clearTimeout(t)
  }, [message, onClose])

  if (!message) return null

  const bgColor = type === 'error' ? 'bg-red-600 text-white' :
                  type === 'info' ? 'bg-blue-600 text-white' :
                  'bg-green-600 text-white'
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className={`${bgColor} px-4 py-2 rounded shadow-lg`}>{message}</div>
    </div>
  )
}
