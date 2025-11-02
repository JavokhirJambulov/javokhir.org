import { SITE } from '@/lib/site'
import Image from 'next/image'

export default function HomePage() {
  return (
    <section className="space-y-8">
      {/* Hero */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-5">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/10 shadow-sm">
        <Image
              src="/me.jpg"
              alt="Javokhir"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Javokhir</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Software Engineer · Android &amp; Web
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-3">
              <i className="bi bi-geo-alt-fill text-base" aria-hidden="true" />
              <a
                href="https://maps.app.goo.gl/u5eHMVtprkmSRiFH9"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-dotted hover:decoration-solid"
              >
                Seoul, South Korea
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <p className="text-gray-700 dark:text-gray-300 max-w-prose pl-4">
        Software Engineer building reliable Web and Android Solutions.
      </p>


     {/* Contact Bar */}
     <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 p-4 backdrop-blur"
      >
        <div className="flex items-center gap-2 text-sm">
          <i className="bi bi-envelope text-base text-gray-600 dark:text-gray-400" aria-hidden="true" />
          <a
            className="underline underline-offset-2 decoration-dotted hover:decoration-solid"
            href={`mailto:${SITE.email}`}
          >
            {SITE.email}
          </a>
        </div>

        <div className="flex items-center gap-4 text-2xl">
          <a
            href={SITE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bi bi-github text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            aria-label="GitHub"
            title="GitHub"
          />
          <a
            href={SITE.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bi bi-linkedin text-gray-700 hover:text-[#0077B5] dark:text-gray-300"
            aria-label="LinkedIn"
            title="LinkedIn"
          />
        </div>
      </div>
    </section>
  )
}
