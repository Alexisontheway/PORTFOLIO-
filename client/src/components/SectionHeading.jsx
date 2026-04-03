import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="section-heading">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mt-2">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
      </div>
    </motion.div>
  );
}
