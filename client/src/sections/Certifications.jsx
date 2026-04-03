import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolioData';

function CertCard({ cert, index }) {
  const Icon = cert.icon || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card p-6 group hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Icon with gradient */}
      <div
        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cert.color} mb-4`}
      >
        <Icon size={24} className="text-white" />
      </div>

      <h3 className="font-heading text-lg font-semibold text-slate-800 dark:text-white leading-snug">
        {cert.title}
      </h3>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-slate-400">
          {cert.year}
        </span>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Validated expertise from leading institutions"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
