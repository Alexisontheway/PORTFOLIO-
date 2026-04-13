import {
  Code2,
  Server,
  Database,
  Brain,
  Cloud,
  GitBranch,
  Terminal,
  Layers,
  Workflow,
  BarChart3,
  Shield,
  Zap,
  Users,
  MessageSquare,
  Target,
  Lightbulb,
} from 'lucide-react';

export const personalInfo = {
  name: 'Priyanshu Pramanik',
  title: 'Full-Stack Developer & Systems Builder',
  tagline: 'I build scalable web applications, automation pipelines, and AI-powered tools that solve real problems.',
  location: 'Kolkata, India',
  email: 'priyanshualex@gmail.com',
  phone: '+91 6204058150',
  linkedin: 'https://linkedin.com/in/priyanshu-pramanik-422124245',
  github: 'https://github.com/Alexisontheway',
  resumeUrl: '/resume.pdf',
};

export const aboutText = {
  headline: 'Engineering solutions that actually work.',
  paragraphs: [
    "I'm a Computer Science undergraduate with a sharp focus on building end-to-end systems — from pixel-perfect frontends to resilient backends and automated workflows. I don't just write code; I architect solutions that scale.",
    "My work spans full-stack web development, intelligent data processing, and workflow automation. I've built tools that clean messy datasets, automate lead generation, and streamline repetitive operations — all with a focus on reliability and maintainability.",
    "I thrive at the intersection of engineering and problem-solving: designing systems that are clean, performant, and production-ready from day one.",
  ],
  highlights: [
    { label: 'Projects Built', value: '5+' },
    { label: 'Tech Stacks', value: '8+' },
    { label: 'Automation Flows', value: '15+' },
    { label: 'Lines of Code', value: '10K+' },
  ],
};

export const skillCategories = [
  {
    title: 'Technical Skills',
    icon: Code2,
    skills: [
      'JavaScript / TypeScript',
      'React.js',
      'Node.js / Express',
      'Python',
      'PostgreSQL / MongoDB',
      'REST API Design',
      'HTML5 / CSS3 / Tailwind',
      'Git & GitHub',
      'MVC Architecture',
      'Algorithms & Data Structures',
      'SQL Security',
      'MS Excel',
    ],
  },
  {
    title: 'Operations & Automation',
    icon: Workflow,
    skills: [
      'Workflow Design',
      'Process Automation',
      'Lead Generation',
      'SaaS Tool Integration (Apollo, Clay, Thunderbird)',
      'Data Cleaning & ETL',
      'Structured Data Handling',
      'Business Process Optimization',
      'Email Campaign Automation',
    ],
  },
  {
    title: 'Functional Skills',
    icon: Lightbulb,
    skills: [
      'System Architecture',
      'Problem Solving',
      'Technical Documentation',
      'Business Process Mapping',
      'Requirements Gathering',
      'API Integration',
      'Stakeholder Communication',
      'Cross-functional Collaboration',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Daily Task App',
    subtitle: 'Full-Stack Productivity Platform',
    description:
      'A comprehensive task management application built with a modern full-stack architecture. Features real-time updates, priority-based organization, deadline tracking, and a clean dashboard interface designed for daily productivity workflows.',
    impact: 'Designed with scalable MVC architecture handling 1000+ tasks with sub-second response times.',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST API', 'JWT Auth'],
    features: [
      'Priority-based task organization with smart sorting',
      'Real-time status updates and progress tracking',
      'Secure authentication with JWT tokens',
      'RESTful API with input validation and error handling',
      'Responsive UI with dark/light mode support',
    ],
    github: 'https://github.com/Alexisontheway/Daily-Task-App',
    demo: 'https://donotdothethings.netlify.app/',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Intelligent Data Cleaning Tool',
    subtitle: 'Automated Data Pipeline',
    description:
      'An automated pipeline that ingests raw datasets, identifies inconsistencies, removes duplicates, validates formats, and outputs clean, analysis-ready data. Built to handle messy real-world data at scale with detailed reporting.',
    impact: 'Reduced manual data cleaning time by 85% across datasets with 10K+ records.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Regex', 'CSV/Excel Processing'],
    features: [
      'Automated duplicate detection and removal',
      'Format validation for emails, phones, and dates',
      'Business-rule validation checks for schema consistency',
      'Structured Excel reports for stakeholder review',
      'Batch processing for large-scale datasets',
    ],
    github: 'https://github.com/Alexisontheway',
    demo: null,
    featured: true,
    category: 'automation',
  },
  {
    id: 3,
    title: 'AnalyseThis',
    subtitle: 'AI-Powered Research & Reporting Assistant',
    description:
      'A multi-source aggregation tool that organizes research findings into traceable, structured reports with proper sourcing and formatting. Leverages AI models to generate actionable intelligence for faster and more informed decision-making.',
    impact: 'Automated 70% of manual prospect research, delivering insights in seconds instead of hours.',
    techStack: ['Python', 'OpenAI API', 'Web Scraping', 'Data Analysis', 'REST API'],
    features: [
      'Multi-source data aggregation and enrichment',
      'AI-powered company and prospect profiling',
      'Traceable structured reports with proper sourcing',
      'Natural language query interface',
      'Export-ready intelligence summaries',
    ],
    github: 'https://github.com/Alexisontheway',
    demo: null,
    featured: true,
    category: 'ai',
  },
  {
    id: 4,
    title: 'AI-Assisted Automation Toolkit',
    subtitle: 'Reusable Workflow Engine',
    description:
      'A modular Python toolkit designed for building scalable automation workflows. Includes pre-built modules for email automation, data processing, scheduling, and API integration — architected for extensibility and reuse across projects.',
    impact: 'Powers 15+ automated workflows with 99.5% uptime reliability.',
    techStack: ['Python', 'Shell Scripting', 'SMTP', 'Cron', 'REST APIs'],
    features: [
      'Plug-and-play automation modules',
      'Email notification engine with templating',
      'Scheduled task execution with error recovery',
      'API integration framework with retry logic',
      'Comprehensive logging and monitoring',
    ],
    github: 'https://github.com/Alexisontheway',
    demo: null,
    featured: false,
    category: 'automation',
  },
  {
  id: 5,
  title: 'Movie Search Web App',
  subtitle: 'React Movie Discovery Platform',
  description:
    'A responsive movie discovery application built with React that allows users to search, explore, and view detailed information about movies using real-time API integration.',

  impact:
    'Built a real-time movie search system with API integration, improving user interaction through instant search results and optimized rendering.',

  techStack: ['React', 'JavaScript', 'CSS', 'REST API'],

  features: [
    'Real-time movie search with API integration',
    'Dynamic rendering of movie details and posters',
    'Responsive UI for seamless experience across devices',
    'Efficient state management using React hooks',
    'Clean and intuitive user interface design',
  ],

  github: 'https://github.com/Alexisontheway/movie_website',
  demo: 'https://69d9cc672ba1e673dc7648fb--iwanttowatch.netlify.app/',

  featured: true,
  category: 'frontend',
}
];

export const experience = [
  {
    role: 'Technical Intern (AI & Technical Writing Operations)',
    company: 'GAOTek Inc.',
    location: 'Remote — Kolkata, India',
    period: 'August 2025 – November 2025',
    type: 'Internship',
    description:
      'Handled AI-assisted technical writing, product documentation, and lead generation operations across automation and SaaS workflows.',
    achievements: [
      'Documented 120+ products (4–5 daily) with detailed specifications, supplier links, and feature descriptions into a standardized internal database',
      'Designed a repeatable product documentation workflow that reduced manual entry errors and improved data organization',
      'Generated 100+ qualified leads daily using Apollo and Clay, maintaining database accuracy for follow-up',
      'Built and executed automated email outreach campaigns using Apollo and Thunderbird for scalable lead engagement',
      'Integrated multiple SaaS tools (Apollo, Clay, Thunderbird) to create a unified lead generation pipeline',
    ],
  },
];

export const certifications = [
  {
    title: "CS50's Introduction to Artificial Intelligence with Python",
    issuer: 'HarvardX (edX)',
    year: '2024',
    icon: Brain,
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: "CS50's Introduction to Programming with Python",
    issuer: 'HarvardX (edX)',
    year: '2024',
    icon: Code2,
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    title: 'Software Engineering',
    issuer: 'NPTEL (IIT Kharagpur)',
    year: '2024',
    icon: Layers,
    color: 'from-orange-500 to-red-500',
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'Swami Vivekananda University',
    location: 'Kolkata, India',
    period: '2024 – 2027 (Expected)',
    grade: 'CGPA: 8.17 / 10',
    type: 'Undergraduate',
  },
  {
    degree: 'Diploma in Engineering',
    field: 'Computer Science & Technology',
    institution: 'Government Polytechnic Khutri',
    location: 'Khutri, India',
    period: '2021 – 2024',
    grade: 'Distinction',
    type: 'Diploma',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
