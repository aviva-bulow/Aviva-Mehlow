import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-lg border border-neutral-200 p-5 dark:border-neutral-800"
          >
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              {project.name}
            </h3>
            <p className="mt-2 flex-1 text-sm text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm font-medium">
              <a href={project.githubUrl} className="text-purple-600 hover:underline dark:text-purple-400">
                GitHub
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} className="text-purple-600 hover:underline dark:text-purple-400">
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
