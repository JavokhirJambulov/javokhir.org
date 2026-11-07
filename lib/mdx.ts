import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

export async function renderMDX(source: string) {
  return compileMDX({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          [rehypePrettyCode, {
            theme: 'github-dark',
            keepBackground: false
          }]
        ]
      }
    }
  })
}
