export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
      <p className="text-sm font-medium tracking-wide text-purple-600 uppercase dark:text-purple-400">
        Software Engineer &amp; Technical Leader
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-neutral-900 sm:text-5xl dark:text-neutral-100">
        Aviva Bulow Mehlow
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
        I build scientifically rigorous systems that translate complex methodologies into
        reliable, scalable software — at the intersection of climate science, data systems, and
        engineering leadership.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
        <a
          href="#experience"
          className="rounded-md bg-purple-600 px-5 py-2.5 font-medium text-white hover:bg-purple-700"
        >
          View Experience
        </a>
        <a
          href="#contact"
          className="rounded-md border border-neutral-300 px-5 py-2.5 font-medium text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}
