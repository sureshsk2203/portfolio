import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, Snowflake, Wallet, Building2 } from 'lucide-react';
import Reveal from './Reveal';

const PROJECTS = [
  {
    name: 'Stock Plus',
    category: 'Full Stack Stock Management System',
    desc: 'A modern stock management system with inventory, products, sales, reports, and dashboard features — built using React, Flask, and MySQL.',
    tags: ['React', 'Flask', 'MySQL'],
    icon: BarChart3,
    accent: 'from-electric/25 via-electric/5 to-transparent',
    iconColor: 'text-electric',
  },
  {
    name: 'Rehoboth Refrigeration Hub',
    category: 'Business Website',
    desc: 'A responsive business website for refrigeration services with modern UI, SEO-friendly structure, and an excellent user experience.',
    tags: ['React', 'Tailwind', 'SEO'],
    icon: Snowflake,
    accent: 'from-teal/25 via-teal/5 to-transparent',
    iconColor: 'text-teal',
  },
  {
    name: 'Swft Pay',
    category: 'Premium FinTech UI/UX Design',
    desc: 'A premium UPI payment mobile application with an original design system, clean user experience, and modern fintech interface.',
    tags: ['Figma', 'Design System', 'Fintech'],
    icon: Wallet,
    accent: 'from-violet/25 via-violet/5 to-transparent',
    iconColor: 'text-violet',
  },
  {
    name: 'INMBA',
    category: 'Company Project',
    desc: 'A professional company web application with responsive layouts and a clean, focused user experience.',
    tags: ['React', 'Flask', 'Responsive'],
    icon: Building2,
    accent: 'from-electric/25 via-violet/5 to-transparent',
    iconColor: 'text-electric',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">04 — Work</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Featured <span className="grad-text">Projects</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="glass group relative h-full overflow-hidden rounded-3xl border border-line p-7 sm:p-9"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-panel/70">
                        <Icon size={26} className={project.iconColor} />
                      </div>
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel/50 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      >
                        View
                        <ArrowUpRight size={13} />
                      </span>
                    </div>

                    <p className="mt-6 font-mono text-xs uppercase tracking-widest text-electric">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-4 font-body text-sm leading-relaxed text-muted sm:text-base">
                      {project.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line bg-void/40 px-3 py-1 font-mono text-[11px] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
