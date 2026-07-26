import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const SERVICES = [
  { title: 'UI/UX Design', desc: 'User-centered interfaces built on research, wireframes, and clean design systems.' },
  { title: 'Full Stack Development', desc: 'End-to-end web apps combining React frontends with Flask & MySQL backends.' },
  { title: 'Responsive Website Development', desc: 'Websites that look and perform great across every screen size.' },
  { title: 'Dashboard Development', desc: 'Data-rich admin panels and dashboards built for clarity and speed.' },
  { title: 'Landing Page Design', desc: 'High-converting landing pages focused on clarity and clean visual hierarchy.' },
  { title: 'Website Redesign', desc: 'Modernizing outdated sites into fast, elegant, user-friendly experiences.' },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">03 — Services</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            What I Can <span className="grad-text">Build for You</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06} className="bg-void">
              <motion.div
                whileHover={{ backgroundColor: 'rgba(79,124,255,0.05)' }}
                className="group flex h-full flex-col justify-between gap-8 bg-panel/40 p-8 sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-electric"
                  />
                </div>
                <p className="font-body text-sm leading-relaxed text-muted sm:text-base">
                  {service.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
