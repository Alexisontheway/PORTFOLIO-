import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Open to opportunities
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
        >
          <span className="text-slate-800 dark:text-white">I build </span>
          <span className="gradient-text">systems</span>
          <br />
          <span className="text-slate-800 dark:text-white">that </span>
          <span className="gradient-text">scale.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-balance leading-relaxed"
        >
          Full-Stack Developer & Automation Engineer crafting scalable web applications,
          intelligent data pipelines, and AI-powered tools from Kolkata, India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="glow-btn text-base group"
          >
            <ExternalLink size={18} />
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="outline-btn text-base group"
          >
            <Send size={18} />
            Contact Me
          </a>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {['React', 'Node.js', 'Python', 'PostgreSQL', 'TypeScript', 'Docker'].map(
            (tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/60 dark:bg-white/[0.04] text-slate-500 dark:text-slate-500 border border-slate-200/50 dark:border-white/[0.06]"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
