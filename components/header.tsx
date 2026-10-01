'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/theme-toggle'
import ResumeMenu from '@/components/resume-menu'

const nav = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between py-8">
      <Link href="/" className="flex items-center font-semibold">javokhir.org</Link>
      <nav className="flex items-center gap-3 sm:gap-5 mt-3 sm:mt-0">
        {nav.map(i => (
          <Link key={i.href} href={i.href} className={`nav-link ${pathname === i.href ? 'underline' : ''}`}>{i.label}</Link>
        ))}
        <ResumeMenu />
        <ThemeToggle />
      </nav>
    </header>
  )
}
