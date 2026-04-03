import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/portfolioData';

function EducationCard({ edu, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="glass-card p-6 sm:p-8 relative overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/5 to-transparent rounded-bl-full" />

      <div className="relative flex items-start gap-4">
        <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-primary-500">
          <GraduationCap size={24} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-heading text-lg font-bold text-slate-800 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-primary-500 font-medium text-sm mt-0.5">{edu.field}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-slate-400 text-sm whitespace-nowrap">
              <Calendar size={14} />
              {edu.period}
            </span>
          </div>

          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            {edu.institution} — {edu.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.02] to-transparent dark:via-primary-500/[0.03]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="My academic foundation"
        />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <EducationCard key={edu.degree} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
