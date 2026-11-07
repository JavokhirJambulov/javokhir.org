import Image from 'next/image'
import { projects } from '@/lib/projects'

export default function ProjectList({ items }: { items: typeof projects }) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2">
      {items.map(project => (
        <li key={project.name} className="space-y-3">
          <div className="relative h-64 overflow-hidden rounded-xl border border-black/5 bg-gray-50 dark:border-white/10 dark:bg-white/5">
            <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 639px) 100vw, 304px" className="object-contain p-3" />
          </div>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{project.description}</p>
          <ul className="flex flex-wrap gap-4" aria-label={`${project.name} links`}>
            {project.links.map(link => (
              <li key={link.href}><a href={link.href} className="nav-link underline underline-offset-4">{link.label}<span className="sr-only"> for {project.name}</span></a></li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
