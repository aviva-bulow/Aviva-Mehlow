import { experience } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Experience</h2>
      <div className="mt-8 space-y-10">
        {experience.map((job) => (
          <article key={`${job.org}-${job.dates}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                {job.role} · {job.org}
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-500">{job.dates}</span>
            </div>
            {job.orgNote && (
              <p className="mt-0.5 text-sm text-neutral-500 italic dark:text-neutral-500">
                {job.orgNote}
              </p>
            )}
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-neutral-600 dark:text-neutral-400">
              {job.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {job.tools && (
              <div className="mt-3 flex flex-wrap gap-2">
                {job.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
