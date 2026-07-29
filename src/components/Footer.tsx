export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-500">
      <p>© {new Date().getFullYear()} Aviva Bulow Mehlow. Built with React, TypeScript, and Tailwind CSS.</p>
      <a
        href="https://github.com/aviva-bulow/Aviva-Mehlow"
        className="mt-1 inline-block text-purple-600 hover:underline dark:text-purple-400"
      >
        View source on GitHub
      </a>
    </footer>
  )
}
