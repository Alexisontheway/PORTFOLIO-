import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolioData';

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-primary-500/50 to-transparent hidden md:block" />

      <div className="glass-card p-6 sm:p-8 md:ml-16 relative">
        {/* Timeline dot */}
        <div className="absolute -left-[2.35rem] top-8 hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-surface-50 dark:bg-surface-950 border-2 border-primary-500">
          <div className="w-2 h-2 rounded-full bg-primary-500" />
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <h3 className="font-heading text-xl font-bold text-slate-800 dark:text-white">
              {exp.role}
            </h3>
            <p className="text-primary-500 font-medium mt-0.5">{exp.company}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary-500/10 text-primary-500 text-sm font-medium">
              <Calendar size={14} />
              {exp.period}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 text-sm">
              <MapPin size={14} />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          {exp.description}
        </p>

        {/* Achievements */}
        <div className="mt-5 space-y-3">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
            Key Achievements
          </h4>
          <ul className="space-y-2.5">
            {exp.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
              >
                <ChevronRight
                  size={16}
                  className="mt-0.5 text-primary-500 flex-shrink-0"
                />
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/[0.02] to-transparent dark:via-accent-500/[0.03]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Where I've applied my skills professionally"
        />

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
