import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="02" title="Skills" />

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div
                key={i}
                className="border border-neon/10 bg-dark-800/30 p-8 hover:border-neon/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 border border-neon/30 flex items-center justify-center text-neon group-hover:bg-neon group-hover:text-dark-900 transition-all duration-300">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3 text-gray-400 text-sm group/item hover:text-neon transition-colors duration-300"
                      >
                        <span className="w-1 h-1 bg-neon/40 group-hover/item:bg-neon group-hover/item:shadow-neon-sm rounded-full transition-all" />
                        <span className="font-mono text-[13px]">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}