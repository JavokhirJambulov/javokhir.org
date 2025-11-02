export default function ProjectsPage() {
  const projects = [
    {
      name: 'Soundcorset - Metronome & Tuner at  `Onsquare`',
      desc: 'Music education platform. \nUsed by over 30 million musicians worldwide.',
      tech: ['TypeScript', 'JavaScript',  'React', 'Kotlin', 'Scala', 'Jetpack Compose', 'AWS'],
      links: [{ label: 'Website', href: 'https://soundcorset.com/' }]
    },
    {
      name: 'Simple Notes',
      desc: 'Android notes app.',
      tech: ['Kotlin', 'Room Db', 'Jetpack', 'Admob', 'Google Play Billing'],
      links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.nemjava.takenotes' }]
    },
    {
      name: 'Pomodoro Timer',
      desc: 'Focus timer with Foreground Service, notification updates, and lifecycle‑safe ViewModel integration.',
      tech: ['Kotlin', 'Foreground Service', 'Coroutines'],
      links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=uz.javokhirjambulov.pomodoro' }, { label: 'Github', href: 'https://github.com/JavokhirJambulov/Pomodoro-App-Android' },  ]
    }
  ]

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul className="space-y-6">
        {projects.map(p => (
          <li key={p.name}>
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{p.desc}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{p.tech.join(', ')}</p>
            {p.links?.length ? (
              <p className="text-sm mt-3">
                {p.links.map((l, i) => (
                  <a key={i} href={l.href} className="nav-link underline mr-3">{l.label}</a>
                ))}
              </p>
            ) : null}
            <div className="h-px bg-gradient-to-r mt-5 from-transparent via-black to-transparent dark:via-gray-100" />
          </li>
        ))}
      </ul>
    </section>
  )
}
