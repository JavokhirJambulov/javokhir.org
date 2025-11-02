'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const active = mounted ? (theme ?? resolvedTheme) : undefined
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(active === 'dark' ? 'light' : 'dark')}
      className="nav-link"
    >
      {mounted ?  active === 'dark' ? '☀️' : '🌙' : '…'}
    </button>
  )
}
