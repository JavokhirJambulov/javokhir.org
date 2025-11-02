export default function PostMeta({ date, readingTime }: { date: string; readingTime: string }) {
  const d = new Date(date)
  const formatted = d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
  return (
    <span className="text-sm text-gray-600 dark:text-gray-400">{formatted} · {readingTime}</span>
  )
}
