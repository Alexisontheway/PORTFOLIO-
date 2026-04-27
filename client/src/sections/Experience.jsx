import { Calendar, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="04" title="Experience" />

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="border border-neon/10 bg-dark-800/30 p-8 hover:border-neon/25 transition-all duration-500 relative group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-neon via-neon/30 to-transparent" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-neon transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-neon/70 font-mono text-sm mt-1">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                  <span className="flex items-center gap-1.5 text-gray-500 text-xs font-mono">
                    <Calendar size={12} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-600 text-xs font-mono mt-1">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-4">{exp.description}</p>

              <div className="space-y-2">
                {exp.achievements.map((a, j) => (
                  <div key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-neon mt-0.5">▸</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}