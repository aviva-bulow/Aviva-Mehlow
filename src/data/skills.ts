export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Python (expert)', 'JavaScript / TypeScript / React', 'C (MPI, OpenMP)', 'Java', 'R', 'SQL'],
  },
  {
    title: 'Engineering',
    items: [
      'Object-oriented design',
      'Unit testing (pytest, unittest)',
      'Continuous integration (GitHub Actions, CircleCI, Bitbucket Pipelines)',
      'Complexity analysis',
      'Parallel computing',
      '3rd-party & LLM API integration',
    ],
  },
  {
    title: 'AI-assisted development',
    items: ['Claude Code / agentic development', 'Structured outputs', 'Prompt caching', 'Cost optimization'],
  },
  {
    title: 'Mathematics & science',
    items: ['Probability & statistics', 'Algorithm analysis', 'Graph theory', 'Computational modeling', 'Data visualization'],
  },
  {
    title: 'Leadership',
    items: ['Team management', 'Cross-functional collaboration', 'Equitable, skills-based hiring', 'Mentorship'],
  },
]
