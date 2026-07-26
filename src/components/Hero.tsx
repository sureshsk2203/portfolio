import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, FolderOpen } from 'lucide-react';
import TerminalCard from './TerminalCard';
import Reveal from './Reveal';

const TECH_ICONS = ['⚛', '🐍', '⚡', '🎨', '</>' ];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 md:px-10 lg:pt-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left: text content */}
        <div>
          <Reveal delay={0} y={20}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-teal">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
              Available for work
            </span>
          </Reveal>

          <Reveal delay={0.1} y={30} className="mt-6">
            <h1 className="font-display text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-6xl lg:text-[4rem]">
              Hi, I'm <span className="grad-text">Suresh Kumar A</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} y={20} className="mt-5">
            <p className="font-mono text-lg text-violet sm:text-xl">
              UI/UX Designer &amp; Full Stack Developer
            </p>
          </Reveal>

          <Reveal delay={0.3} y={20} className="mt-5 max-w-xl">
            <p className="font-body text-base leading-relaxed text-muted sm:text-lg">
              I design intuitive user experiences and develop modern, responsive, and
              scalable web applications that help businesses grow through clean design
              and efficient technology.
            </p>
          </Reveal>

          <Reveal delay={0.4} y={20} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-cursor-hover
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-6 py-3.5 font-body text-sm font-semibold text-white shadow-lg shadow-electric/20 transition-transform duration-300 hover:scale-[1.03]"
            >
              <FolderOpen size={17} />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/50 px-6 py-3.5 font-body text-sm font-semibold text-ink transition-colors duration-300 hover:border-electric/50 hover:bg-panel"
            >
              <Download size={17} />
              Download Resume
            </a>
            <a
              href="#contact"
              data-cursor-hover
              className="inline-flex items-center gap-2 px-2 py-3.5 font-body text-sm font-semibold text-muted transition-colors duration-300 hover:text-ink"
            >
              <Mail size={17} />
              Contact Me
            </a>
          </Reveal>
        </div>

        {/* Right: mockups */}
        <div className="relative flex justify-center lg:justify-end">
          <Reveal delay={0.3} y={40} className="relative w-full max-w-lg">
            {/* Floating tech icons */}
            {TECH_ICONS.map((icon, i) => (
              <motion.div
                key={i}
                className="glass absolute z-20 hidden h-12 w-12 items-center justify-center rounded-xl text-lg sm:flex"
                style={{
                  top: `${[8, 28, 62, 78, 45][i]}%`,
                  left: i % 2 === 0 ? `${-4 + i * 2}%` : undefined,
                  right: i % 2 !== 0 ? `${-6 + i}%` : undefined,
                }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              >
                {icon}
              </motion.div>
            ))}

            {/* Laptop mockup */}
            <div className="relative rounded-2xl border border-line bg-panel2 p-3 shadow-2xl shadow-black/50">
              <div className="mb-2 flex items-center gap-1.5 px-1">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-green-400/70" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <TerminalCard />
              </div>
            </div>
            {/* laptop base */}
            <div className="mx-auto -mt-1 h-3 w-[85%] rounded-b-xl bg-gradient-to-b from-panel2 to-void" />

            {/* Mobile mockup — Swift Pay */}
            <motion.div
              className="glass absolute -bottom-10 -right-2 z-20 w-32 rounded-2xl border border-line p-2 shadow-xl shadow-black/50 sm:-right-8 sm:w-40"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="rounded-xl bg-gradient-to-b from-panel to-void p-2.5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-muted">Swift Pay</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                </div>
                <div className="mb-2 h-8 rounded-lg bg-gradient-to-r from-electric/30 to-violet/30" />
                <div className="mb-1 h-1.5 w-3/4 rounded-full bg-line" />
                <div className="mb-2.5 h-1.5 w-1/2 rounded-full bg-line" />
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="aspect-square rounded-md bg-electric/20" />
                  <div className="aspect-square rounded-md bg-violet/20" />
                  <div className="aspect-square rounded-md bg-teal/20" />
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
