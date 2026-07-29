import { useContactForm } from '../hooks/useContactForm'

const inputClasses =
  'mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100'

export function Contact() {
  const { values, errors, status, setField, handleSubmit } = useContactForm()

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Get in Touch</h2>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        Reach me directly at{' '}
        <a href="mailto:aviva@mehlow.dev" className="text-purple-600 hover:underline dark:text-purple-400">
          aviva@mehlow.dev
        </a>
        , on{' '}
        <a
          href="https://github.com/aviva-bulow"
          className="text-purple-600 hover:underline dark:text-purple-400"
        >
          GitHub
        </a>
        , or{' '}
        <a
          href="https://linkedin.com/in/aviva-bulow"
          className="text-purple-600 hover:underline dark:text-purple-400"
        >
          LinkedIn
        </a>
        , or send a message below.
      </p>

      {status === 'success' ? (
        <p className="mt-6 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
          Thanks — your message has been sent. I'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-6 max-w-lg space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={(event) => setField('name', event.target.value)}
              className={inputClasses}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={(event) => setField('email', event.target.value)}
              className={inputClasses}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              onChange={(event) => setField('message', event.target.value)}
              className={inputClasses}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
            )}
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-600 dark:text-red-400">
              Something went wrong sending your message — please email me directly instead.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-700 disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      )}
    </section>
  )
}
