'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/theme-toggle'

const nav = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="flex items-center justify-between py-8">
      <Link href="/" className="font-semibold">javokhir.org</Link>
      <nav className="flex items-center gap-5">
        {nav.map(i => (
          <Link key={i.href} href={i.href} className={`nav-link ${pathname === i.href ? 'underline' : ''}`}>{i.label}</Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  )
}
