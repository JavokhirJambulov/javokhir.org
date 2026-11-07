import type { Metadata } from 'next'

export const SITE = {
  title: 'Javokhir – Software Engineer',
  description: 'Software engineer in Seoul building web and mobile products, reliable Scala/AWS backend systems, and AI-powered features. Creator of Typez and Pawmo.',
  url: 'https://www.javokhir.org',
  author: 'Javokhir Jambulov',
  email: 'javokhirjambulov@gmail.com',
  socials: {
    github: 'https://github.com/JavokhirJambulov',
    linkedin: 'https://www.linkedin.com/in/javokhir-jambulov-4816361ab/'
  }
}

export function pageMetadata(title: string, description: string, path: string, type: 'website' | 'article' = 'website'): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName: 'javokhir.org',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: SITE.title }]
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] }
  }
}
