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
    { label: 'Projects Built', value: '10+' },
    { label: 'Tech Stacks', value: '8+' },
    { label: 'Automation Flows', value: '15+' },
    { label: 'Lines of Code', value: '50K+' },
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
    ],
  },
  {
    title: 'Operations & Automation',
    icon: Workflow,
    skills: [
      'CI/CD Pipelines',
      'Workflow Automation',
      'Data Cleaning & ETL',
      'Web Scraping',
      'Email Automation',
      'Lead Generation Systems',
      'Task Scheduling',
      'Process Optimization',
    ],
  },
  {
    title: 'Functional Skills',
    icon: Lightbulb,
    skills: [
      'System Architecture',
      'Problem Solving',
      'Technical Documentation',
      'Agile / Scrum',
      'Team Collaboration',
      'Project Management',
      'API Integration',
      'Security Best Practices',
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
    github: 'https://github.com/Alexisontheway',
    demo: null,
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
      'Configurable cleaning rules via YAML configs',
      'Detailed cleaning reports with before/after metrics',
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
    subtitle: 'AI-Powered Sales Intelligence',
    description:
      'An AI-driven sales copilot that automates company research and prospect analysis. Leverages AI models and LinkedIn data to generate actionable sales intelligence, enabling faster and more informed outreach strategies.',
    impact: 'Automated 70% of manual prospect research, delivering insights in seconds instead of hours.',
    techStack: ['Python', 'OpenAI API', 'Web Scraping', 'Data Analysis', 'REST API'],
    features: [
      'AI-powered company and prospect profiling',
      'LinkedIn data extraction and enrichment',
      'Automated competitive analysis reports',
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
];

export const experience = [
  {
    role: 'Web Development & Automation Intern',
    company: 'GAOTek Inc.',
    location: 'Remote — New York, USA',
    period: 'Jan 2025 – Present',
    type: 'Internship',
    description:
      'Driving automation initiatives and building systems that streamline lead generation, data workflows, and internal operations.',
    achievements: [
      'Designed and deployed automated lead generation systems, increasing qualified leads by 40%',
      'Built data validation pipelines that reduced manual processing time by 60%',
      'Developed workflow automation tools handling 500+ daily operations',
      'Implemented web scraping solutions for competitive market analysis',
      'Created standardized templates and SOPs for team productivity',
    ],
  },
];

export const certifications = [
  {
    title: 'CS50 — Introduction to Artificial Intelligence with Python',
    issuer: 'HarvardX (edX)',
    year: '2024',
    icon: Brain,
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'CS50 — Introduction to Programming with Python',
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
    institution: 'Narula Institute of Technology',
    location: 'Kolkata, India',
    period: '2023 – 2027 (Expected)',
    type: 'Undergraduate',
  },
  {
    degree: 'Diploma in Engineering',
    field: 'Computer Science & Technology',
    institution: 'Government Polytechnic Khutri',
    location: 'Khutri, India',
    period: '2020 – 2023',
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
