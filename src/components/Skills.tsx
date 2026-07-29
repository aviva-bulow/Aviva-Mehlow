import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Skills</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold tracking-wide text-purple-600 uppercase dark:text-purple-400">
              {group.title}
            </h3>
            <ul className="mt-3 space-y-1.5 text-neutral-600 dark:text-neutral-400">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
