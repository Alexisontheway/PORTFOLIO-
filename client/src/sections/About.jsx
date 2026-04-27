import SectionHeading from '../components/SectionHeading';
import { aboutText } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="01" title="About" />

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold text-neon text-glow">
              {aboutText.headline}
            </h3>
            {aboutText.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-[15px]">
                {p}
              </p>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {aboutText.highlights.map((stat, i) => (
                <div
                  key={i}
                  className="border border-neon/10 bg-dark-800/50 p-6 hover:border-neon/40 transition-all duration-500 group"
                >
                  <div className="text-3xl font-black text-neon text-glow group-hover:animate-glow">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}