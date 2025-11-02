import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SITE } from '@/lib/site'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: '%s · Javokhir'
  },
  icons: {
    icon: '/favicon.ico'
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: 'javokhir.org',
    images: ['/og.png'],
    type: 'website'
  },
  twitter: { card: 'summary_large_image', title: SITE.title, description: SITE.description }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Place external styles here — <head> is the correct location */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex-grow">
            <div className="container">
              <Header />
              <main className="py-10">{children}</main>
            </div>
          </div>
          <Footer/>
          <Analytics mode='production' />
        </ThemeProvider>
      </body>
    </html>
  )
}
