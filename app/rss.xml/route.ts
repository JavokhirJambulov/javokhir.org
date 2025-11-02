import { NextResponse } from 'next/server'
import { SITE } from '@/lib/site'
import { getAllPosts } from '@/lib/posts'

export async function GET() {
  const items = getAllPosts().map(p => `
    <item>
      <title><![CDATA[${p.frontmatter.title}]]></title>
      <link>${SITE.url}/posts/${p.slug}</link>
      <guid>${SITE.url}/posts/${p.slug}</guid>
      <pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.frontmatter.description ?? ''}]]></description>
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>${SITE.title}</title>
      <link>${SITE.url}</link>
      <description>${SITE.description}</description>
      ${items}
    </channel>
  </rss>`

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/rss+xml' } })
}
