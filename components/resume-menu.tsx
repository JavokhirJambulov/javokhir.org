'use client'

import { useRef } from 'react'

const resumes = [
  { href: '/Javokhir-Android-Engineer-Resume.pdf', label: 'Android Engineer' },
  { href: '/Javokhir-Web-Engineer-Resume.pdf', label: 'Web Engineer' },
]

export default function ResumeMenu() {
  const details = useRef<HTMLDetailsElement>(null)

  return (
    <details ref={details} className="relative group">
      <summary className="nav-link flex cursor-pointer list-none items-center gap-1 select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
        Resume
        <svg aria-hidden="true" className="h-3 w-3 transition-transform group-open:rotate-180" viewBox="0 0 12 12" fill="none">
          <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="absolute right-0 z-10 mt-2 w-44 rounded-lg border border-gray-200 bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-gray-900">
        {resumes.map(resume => (
          <a
            key={resume.href}
            href={resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
            onClick={() => { if (details.current) details.current.open = false }}
          >
            {resume.label}
          </a>
        ))}
      </div>
    </details>
  )
}
