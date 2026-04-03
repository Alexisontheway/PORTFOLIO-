import { motion } from 'framer-motion';
import { Heart, GitBranch, ExternalLink, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200/50 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <a href="#" className="font-heading text-xl font-bold gradient-text">
              Priyanshu Pramanik
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Full-Stack Developer & Systems Builder
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-white/[0.05] transition-all"
              aria-label="GitHub"
            >
              <GitBranch size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-white/[0.05] transition-all"
              aria-label="LinkedIn"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-white/[0.05] transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl border border-slate-200 dark:border-white/[0.08] text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-500/30 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-white/[0.06] text-center">
          <p className="text-sm text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Priyanshu Pramanik. Crafted with
            <Heart size={14} className="text-red-400 fill-red-400" />
            and clean code.
          </p>
        </div>
      </div>
    </footer>
  );
}
