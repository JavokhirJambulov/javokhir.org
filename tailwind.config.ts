import type { Config } from 'tailwindcss'
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.gray.900'),
            a: { textDecoration: 'none', borderBottom: '1px dotted currentColor' }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config
