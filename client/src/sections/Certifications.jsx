import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="06" title="Certifications" />

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={i}
                className="border border-neon/10 bg-dark-800/20 p-8 hover:border-neon/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-neon/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 border border-neon/20 flex items-center justify-center text-neon mb-6 group-hover:bg-neon group-hover:text-dark-900 transition-all duration-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-white font-semibold text-sm leading-snug mb-3">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs font-mono">{cert.issuer}</span>
                    <span className="text-neon/60 text-xs font-mono border border-neon/15 px-2 py-0.5">
                      {cert.year}
                    </span>
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