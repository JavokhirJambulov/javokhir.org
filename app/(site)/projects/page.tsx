import Link from 'next/link'
import ProjectList from '@/components/project-list'
import { projects } from '@/lib/projects'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata(
  'Projects',
  'Independent products by Javokhir Jambulov: Typez, Pawmo, Simple Notes, and an open-source Pomodoro timer.',
  '/projects'
)

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">Independent products for everyday tasks, from better typing to focused work and keeping notes.</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">For my professional work on Soundcorset, see <Link href="/#experience" className="underline underline-offset-4">experience</Link>.</p>
      </div>
      <section aria-labelledby="independent-products-title">
        <h2 id="independent-products-title" className="sr-only">Independent products</h2>
        <ProjectList items={projects} />
      </section>
    </section>
  )
}
