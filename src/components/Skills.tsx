import { motion } from 'framer-motion';
import { Palette, Code2, Server, Database, Wrench } from 'lucide-react';
import Reveal from './Reveal';

const SKILL_GROUPS = [
  {
    icon: Palette,
    title: 'UI/UX',
    color: 'from-violet/20 to-violet/5',
    iconColor: 'text-violet',
    items: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Code2,
    title: 'Frontend',
    color: 'from-electric/20 to-electric/5',
    iconColor: 'text-electric',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'from-teal/20 to-teal/5',
    iconColor: 'text-teal',
    items: ['Python', 'Flask', 'REST API'],
  },
  {
    icon: Database,
    title: 'Database',
    color: 'from-electric/20 to-electric/5',
    iconColor: 'text-electric',
    items: ['MySQL'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    color: 'from-violet/20 to-violet/5',
    iconColor: 'text-violet',
    items: ['Git', 'GitHub', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">02 — Skills</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Tools of the <span className="grad-text">Craft</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={i * 0.08} className={i === SKILL_GROUPS.length - 1 ? 'lg:col-span-1' : ''}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`glass group relative h-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${group.color} p-6 sm:p-7`}
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-panel/60">
                    <Icon size={22} className={group.iconColor} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-panel/50 px-3 py-1 font-mono text-xs text-muted transition-colors duration-200 group-hover:text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
