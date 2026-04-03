import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/portfolioData';

function SkillCategory({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="glass-card p-8"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-primary-500">
          <Icon size={22} />
        </div>
        <h3 className="font-heading text-xl font-semibold text-slate-800 dark:text-white">
          {category.title}
        </h3>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.04, duration: 0.3 }}
            className="skill-badge"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.02] to-transparent dark:via-primary-500/[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and methodologies I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
