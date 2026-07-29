export interface Experience {
  role: string
  org: string
  orgNote?: string
  dates: string
  highlights: string[]
  tools?: string[]
}

export const experience: Experience[] = [
  {
    role: 'Founding Partner and CEO',
    org: 'Terrene Solutions',
    orgNote: 'Contracting: building custom software for climate tech companies',
    dates: 'Jan 2026 – Present',
    highlights: [
      'Built custom stratification software for Carbon Friendly to support historically informed stratified random sampling.',
      "Assisted climate tech companies in assessing and understanding Verra's proposed changes to the VM0042.V2 methodology.",
      'Formed a contracting company with another software engineer and a soil scientist to build custom scientific software for climate tech companies.',
      'Responsible for company formation logistics: billing, bank account, founding documents.',
      'Networked and solicited new contracts; managed client relationships and built trust.',
    ],
  },
  {
    role: 'Head of Software and Sr. Software Engineer',
    org: 'Yard Stick PBC',
    orgNote: 'Soil carbon monitoring via novel spectroscopic soil probes',
    dates: 'Mar 2023 – Dec 2025',
    highlights: [
      'Maintained and expanded sample planning and carbon stock estimation software.',
      'Collaborated with data scientists to implement novel methods of estimating uncertainty in spectral stocks.',
      "Created equivalent soil mass based carbon stock estimation software to align with Verra's VM0042.V2 methodology.",
      'Led a team of 3 engineers building a full data platform on AWS and Postgres spanning client management, field sampling data collection, lab integration pipelines, and QA/QC.',
      'Assisted in hiring for Data Scientist and Soil Scientist roles; led cross-team projects including the "Pursue Justice" committee.',
      'Built an equitable, skills-based hiring process to improve justice across the company.',
    ],
    tools: ['Python', 'Pandas', 'SciPy', 'NumPy', 'DeepNote', 'GitHub Actions', 'AWS', 'PostgreSQL'],
  },
  {
    role: 'Head of Software and Lead Software Engineer',
    org: 'Sigray',
    orgNote: 'Developer and manufacturer of cutting-edge X-ray systems',
    dates: 'Jan 2020 – Feb 2023',
    highlights: [
      'Created and maintained desktop apps for data analysis and supervisory control/data acquisition of X-ray machines.',
      'Collaborated with physicists to build X-ray fluorescence interpretation software (peak fitting, element/compound identification, artifact correction) integrated with Jupyter notebooks.',
      'Architected projects and complex features; mentored junior engineers.',
      'Worked on mission-critical software for multiple multi-million dollar contracts.',
      'Set up testing standards and continuous integration.',
      'Led a team of 7 software engineers across 3 production lines.',
      'Designed an equitable, skills-based hiring process and hired all but two software engineers at Sigray.',
    ],
    tools: ['Python', 'Multiprocessing', 'SciPy', 'PySide', 'NumPy', 'Jupyter', 'FastAPI', 'Bitbucket Pipelines'],
  },
  {
    role: 'Software Developer and Founder',
    org: 'SaltSlate',
    orgNote: 'Stealth-stage startup',
    dates: '2019 – Jan 2020',
    highlights: [
      "Developed a recipe mutation engine enabling scaling, detailed analysis, and efficient scheduling of the user's time.",
      'Built an importer using natural language processing to extract and extrapolate recipe information.',
      '18k lines of code, including 6.5k lines of tests with 74% coverage.',
    ],
    tools: ['Python', 'SQLite', 'CircleCI', 'spaCy'],
  },
  {
    role: 'Software Developer and Researcher',
    org: 'MSU Denver',
    orgNote: 'Advisor: Andrew Bonham',
    dates: '2014 – 2016',
    highlights: [
      'Created software that designs DNA/aptamer biosensors adhering to user specifications.',
      'Invented efficient methods for biosensor design and heuristic analysis, 480x faster than the previous method.',
    ],
    tools: ['Python', 'multiprocessing'],
  },
]
