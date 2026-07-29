const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold text-neutral-900 dark:text-neutral-100">
          Aviva Bulow Mehlow
        </a>
        <ul className="hidden gap-6 text-sm text-neutral-600 sm:flex dark:text-neutral-400">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-neutral-900 dark:hover:text-neutral-100">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
