export interface Project {
  name: string
  description: string
  tools: string[]
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    name: 'Job Finder',
    description:
      'Automated pipeline that finds climate/renewable sector job openings and rates fit against an anonymized resume using the Claude API. Discovers company boards from public directories, dedupes and filters postings, scores fit with reasoning, and delivers a digest — fully automated on a daily/weekly GitHub Actions schedule with a mocked test suite (70+ tests) requiring no live secrets.',
    tools: ['Python', 'Claude API', 'SQLite', 'GitHub Actions', 'pytest', 'Google Sheets API'],
    githubUrl: 'https://github.com/aviva-bulow/job_finder',
  },
  {
    name: 'This Portfolio Site',
    description:
      'This site — a Vite + React + TypeScript single-page app styled with Tailwind CSS, deployed via GitHub Actions to GitHub Pages, with a validated contact form built on a custom React hook.',
    tools: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Actions'],
    githubUrl: 'https://github.com/aviva-bulow/Aviva-Mehlow',
    liveUrl: 'https://aviva-bulow.github.io/Aviva-Mehlow/',
  },
  {
    name: 'Printhead Cleaner',
    description:
      "A cron job that keeps my EcoTank's print heads from clogging by generating a colorful kids' activity page and printing it every two weeks. Uses ISO-week parity to get a true 14-day cadence from a weekly cron trigger, and a hidden CMYK swatch strip to guarantee every ink channel actually fires, even on scenes with a mixed color palette.",
    tools: ['Python', 'Pillow', 'Bash', 'cron', 'CUPS'],
    githubUrl: 'https://github.com/A-B-Software/printhead-cleaner',
  },
]
