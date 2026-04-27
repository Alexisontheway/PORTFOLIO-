import SectionHeading from '../components/SectionHeading';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="05" title="Education" />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="border border-neon/10 bg-dark-800/20 p-8 hover:border-neon/25 transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 border border-neon/30 flex items-center justify-center text-neon text-lg group-hover:bg-neon group-hover:text-dark-900 transition-all duration-300">
                  🎓
                </span>
                <div>
                  <span className="text-[10px] font-mono text-neon/50 uppercase tracking-widest">
                    {edu.type}
                  </span>
                </div>
              </div>

              <h3 className="text-white font-bold text-lg">{edu.degree}</h3>
              <p className="text-neon/60 font-mono text-sm mt-1">{edu.field}</p>
              <p className="text-gray-500 text-sm mt-3">{edu.institution}, {edu.location}</p>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-neon/5">
                <span className="text-gray-600 text-xs font-mono">{edu.period}</span>
                <span className="text-neon text-xs font-mono border border-neon/20 px-3 py-1">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}