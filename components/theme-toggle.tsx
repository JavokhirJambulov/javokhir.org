'use client'
import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  // Match the server snapshot until hydration completes.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)

  const active = mounted ? resolvedTheme : undefined
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
