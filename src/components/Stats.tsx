import Reveal from './Reveal';
import Counter from './Counter';

const STATS = [
  { value: 8, suffix: '+', label: 'Projects Completed' },
  { value: 12, suffix: '+', label: 'Technologies' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export default function Stats() {
  return (
    <section className="relative px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="glass grid grid-cols-1 divide-y divide-line rounded-3xl border border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 px-8 py-10 text-center">
                <p className="font-display text-5xl font-semibold text-ink sm:text-6xl">
                  <span className="grad-text">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </span>
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
