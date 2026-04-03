import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, ChevronRight, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolioData';

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'automation', label: 'Automation' },
  { key: 'ai', label: 'AI & ML' },
];

function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card overflow-hidden group"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium">
            <Star size={12} className="fill-amber-500" />
            Featured
          </span>
        </div>
      )}

      {/* Top gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-accent-500 to-cyan-500" />

      <div className="p-6 sm:p-8">
        {/* Title & subtitle */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-800 dark:text-white pr-20">
          {project.title}
        </h3>
        <p className="text-sm text-primary-500 font-medium mt-1">{project.subtitle}</p>

        {/* Description */}
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Impact */}
        <div className="mt-4 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
            📈 {project.impact}
          </p>
        </div>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-500/5 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/10 dark:border-primary-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable features */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          <ChevronRight
            size={16}
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
          />
          {isExpanded ? 'Hide' : 'Show'} Key Features
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 space-y-2 overflow-hidden"
            >
              {project.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Links */}
        <div className="mt-6 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-200 dark:border-white/[0.08] hover:border-primary-300 dark:hover:border-primary-500/30 transition-all"
            >
              <Code size={16} />
              Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-lg transition-all"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications built with production-grade engineering"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.key
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.05]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
