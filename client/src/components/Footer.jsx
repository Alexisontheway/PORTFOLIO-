import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-neon/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border border-neon flex items-center justify-center text-neon font-mono font-bold text-[10px]">
            P
          </div>
          <span className="text-gray-600 text-xs font-mono">
            © {new Date().getFullYear()} {personalInfo.name}
          </span>
        </div>
        <span className="text-gray-700 text-xs font-mono">
          Designed & Built with <span className="text-neon">precision</span>
        </span>
      </div>
    </footer>
  );
}