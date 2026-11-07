import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { SITE } from '@/lib/site'

const skills = [
  { area: 'Web', tools: 'TypeScript, JavaScript, React.js, Next.js, Vite, TailwindCSS' },
  { area: 'Mobile', tools: 'Kotlin, Android, Jetpack Compose, Coroutines, Room, Scala, Scaloid, MVVM architecture' },
  { area: 'Backend & cloud', tools: 'Scala, Akka/Pekko HTTP, AWS (S3, DynamoDB, SQS, EC2, CloudWatch, CloudFront CDN), Google Cloud, CloudFlare, In-Memory Cache Caffeine' },
  { area: 'AI', tools: 'ONNX, ExecuTorch, PTE' },
  { area: 'Tools & testing', tools: 'Git, Terraform, Nginx, ScalaTest, JUnit, Perfetto, LeakCanary, Mockito' }
]

export default function HomePage() {
  const posts = getAllPosts().slice(0, 2)

  return (
    <div className="space-y-14">
      <section aria-labelledby="intro-title" className="space-y-6">
        <div className="flex items-center gap-5">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10 sm:h-32 sm:w-32">
            <Image src="/me.jpg" alt="Javokhir Jambulov" fill sizes="(max-width: 639px) 96px, 128px" className="object-cover" priority />
          </div>
          <div>
            <h1 id="intro-title" className="text-2xl font-bold tracking-tight sm:text-3xl">{SITE.author}</h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Software engineer · Full stack &amp; Mobile &amp; AI</p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Seoul, South Korea</p>
          </div>
        </div>
        <div className="space-y-3 leading-relaxed text-gray-700 dark:text-gray-300">
          <p>Hi, I’m Javokhir. I like building websites, apps, and tools that real people use to make their day a little easier. I’m currently at OnSquare, working on <a href="https://soundcorset.com/" className="underline underline-offset-4">Soundcorset</a>, a music app with around 600,000 daily users.</p>
          <p>I enjoy taking projects from zero to one: shaping an idea, building it, shipping it, and improving it with feedback. I also build my own products, including <a href="https://typez.app/" className="underline underline-offset-4">Typez</a> and <a href="https://pawmo.pages.dev/" className="underline underline-offset-4">Pawmo</a>.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
          <a href="/Javokhir-Jambulov-Resume.pdf" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">Download résumé<span className="sr-only"> (PDF, opens in a new tab)</span></a>
          <a href={`mailto:${SITE.email}`} className="nav-link underline underline-offset-4">Email me</a>
          <a href={SITE.socials.github} className="nav-link underline underline-offset-4">GitHub</a>
          <a href={SITE.socials.linkedin} className="nav-link underline underline-offset-4">LinkedIn</a>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-title" className="space-y-5">
        <h2 id="experience-title" className="text-xl font-semibold">Experience</h2>
        <div className="flex flex-col justify-between gap-1 sm:flex-row">
          <div>
            <h3 className="font-semibold">Software Engineer · OnSquare</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400"><a href="https://soundcorset.com/" className="underline underline-offset-4">Soundcorset</a> · Music practice &amp; social media platform</p>
          </div>
          <p className="shrink-0 text-sm text-gray-500 dark:text-gray-400"><time dateTime="2024-08">Aug 2024</time> – Present</p>
        </div>
        <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <li><strong className="font-medium text-gray-900 dark:text-gray-100">Web.</strong> Modernized JavaScript/jQuery to TypeScript and Vite, and built a complete client-side drawing system for sheet music.</li>
          <li><strong className="font-medium text-gray-900 dark:text-gray-100">Backend &amp; cloud.</strong> Built AWS-backed services, including an asynchronous music-evaluation pipeline with ONNX. Used Google Cloud for error logging and observability.</li>
          <li><strong className="font-medium text-gray-900 dark:text-gray-100">Android.</strong> Owned development end to end, from new features and refactoring to releases and maintenance, including on-device inference with a PTE model.</li>
        </ul>
      </section>

      <section id="skills" aria-labelledby="skills-title" className="space-y-5">
        <h2 id="skills-title" className="text-xl font-semibold">Skills</h2>
        <dl className="space-y-3 text-sm leading-relaxed">
          {skills.map(skill => (
            <div key={skill.area}>
              <dt className="inline font-medium">{skill.area}: </dt>
              <dd className="inline text-gray-700 dark:text-gray-300">{skill.tools}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="writing-title" className="space-y-5">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="writing-title" className="text-xl font-semibold">Writing</h2>
          <Link href="/posts" className="nav-link underline underline-offset-4">All posts →</Link>
        </div>
        <ul className="space-y-4">
          {posts.map(post => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="text-sm font-medium underline underline-offset-4">{post.frontmatter.title}</Link>
              <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{post.frontmatter.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="space-y-3 border-t border-black/10 pt-6 dark:border-white/10">
        <h2 id="contact-title" className="text-xl font-semibold">Get in touch</h2>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">Have a project, an opportunity, or a technical question? <a href={`mailto:${SITE.email}`} className="break-words underline underline-offset-4">{SITE.email}</a></p>
      </section>
    </div>
  )
}
