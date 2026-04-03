import { motion } from 'framer-motion';
import { MapPin, Calendar, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { aboutText, personalInfo } from '../data/portfolioData';

function StatCard({ label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
    >
      <div className="text-3xl font-heading font-bold gradient-text">{value}</div>
      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="The engineer behind the code"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="font-heading text-2xl font-bold text-slate-800 dark:text-white">
              {aboutText.headline}
            </h3>

            {aboutText.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                {para}
              </p>
            ))}

            {/* Location & Availability */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] text-sm text-slate-600 dark:text-slate-400">
                <MapPin size={16} className="text-primary-500" />
                {personalInfo.location}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] text-sm text-slate-600 dark:text-slate-400">
                <Zap size={16} className="text-amber-500" />
                Available for hire
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {aboutText.highlights.map((stat, i) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                delay={0.1 * i}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
