export default function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="font-mono text-neon text-sm">{number}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="flex-1 h-px bg-neon/10" />
    </div>
  );
}