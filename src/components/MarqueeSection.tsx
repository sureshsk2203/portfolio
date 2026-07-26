const ROW1 = ['React.js', 'Figma', 'Tailwind CSS', 'Flask', 'MySQL', 'JavaScript'];
const ROW2 = ['UI/UX Design', 'Python', 'REST API', 'Wireframing', 'Git & GitHub', 'HTML5 · CSS3'];

function Tile({ label, tint }: { label: string; tint: string }) {
  return (
    <div
      className={`flex h-[120px] w-[260px] shrink-0 items-center justify-center rounded-2xl border border-line bg-gradient-to-br ${tint} px-6 sm:h-[150px] sm:w-[300px]`}
    >
      <span className="text-center font-display text-lg font-semibold text-ink sm:text-2xl">
        {label}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const row1Items = [...ROW1, ...ROW1, ...ROW1];
  const row2Items = [...ROW2, ...ROW2, ...ROW2];

  return (
    <section className="relative overflow-hidden bg-void pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <div className="marquee-track flex gap-3" style={{ animation: 'marquee-left 32s linear infinite' }}>
          {row1Items.map((label, i) => (
            <Tile key={`r1-${i}`} label={label} tint="from-electric/15 to-transparent" />
          ))}
        </div>
        <div className="marquee-track flex gap-3" style={{ animation: 'marquee-right 28s linear infinite' }}>
          {row2Items.map((label, i) => (
            <Tile key={`r2-${i}`} label={label} tint="from-violet/15 to-transparent" />
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          width: max-content;
          will-change: transform;
        }
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3334%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.3334%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
