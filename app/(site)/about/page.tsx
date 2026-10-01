export default function AboutPage() {
  return (
    <section className="space-y-4 max-w-prose">
      <h1 className="text-2xl font-bold">About</h1>
      <p>
        I’m a software engineer in Seoul focused on Android and Web developmet. I build reliable, sustainable and efficient systems.
      </p>
      <p>
        Recently, I’ve worked on Soundcorset’s web canvas drawing tools, IndexedDB ↔ AWS S3 sync, and modernizing Android billing and sign‑in flows.
      </p>
      <p>
        Résumés:{' '}
        <a className="nav-link underline" href="/Javokhir-Android-Engineer-Resume.pdf" target="_blank" rel="noopener noreferrer">Android Engineer</a>
        {' · '}
        <a className="nav-link underline" href="/Javokhir-Web-Engineer-Resume.pdf" target="_blank" rel="noopener noreferrer">Web Engineer</a>
      </p>
    </section>
  )
}
