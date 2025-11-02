import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.gray.900'),
            a: { textDecoration: 'none', borderBottom: '1px dotted currentColor' }
          }
        }
      })
    }
  },
  plugins: [typography],
}

export default config
