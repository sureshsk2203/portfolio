import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import suresh from '../assets/images/suresh-photo.jpg';

const RESPONSIBILITIES = [
  'UI/UX Design',
  'Responsive Web Development',
  'React.js Development',
  'Python & Flask Backend',
  'MySQL Database',
  'API Integration',
  'Bug Fixing',
  'Performance Optimization',
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">01 — About</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            About <span className="grad-text">Me</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-16">
          {/* Photo */}
          <Reveal delay={0.1} x={-40} y={0} className="lg:col-span-2">
            <div className="glass relative mx-auto max-w-sm overflow-hidden rounded-3xl p-3">
              <img
                src={suresh}
                alt="Suresh Kumar A at his workspace"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="absolute inset-3 rounded-2xl ring-1 ring-inset ring-electric/10" />
            </div>
            <div className="mx-auto mt-6 flex max-w-sm items-center justify-between rounded-2xl border border-line bg-panel/50 px-6 py-4">
              <div>
                <p className="font-display text-2xl font-semibold text-ink">2+</p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Years learning &amp; building</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-ink">Tirunelveli</p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Tamil Nadu, India</p>
              </div>
            </div>
          </Reveal>

          {/* Bio + Experience */}
          <div className="lg:col-span-3">
            <Reveal delay={0.15}>
              <p className="font-body text-base leading-relaxed text-muted sm:text-lg">
                Hello! I'm Suresh Kumar A, a passionate UI/UX Designer and Full Stack
                Developer from Tamil Nadu, India. Currently, I work at{' '}
                <span className="text-ink">Growth Nest Tech Solutions</span>, where I
                design user-friendly interfaces and develop modern full-stack web
                applications. I enjoy transforming ideas into clean, responsive, and
                high-performance digital products.
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-muted sm:text-lg">
                I have experience working on business websites, stock management
                systems, fintech UI concepts, and responsive web applications. My goal
                is to build impactful digital experiences while continuously improving
                my design and development skills.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-10">
              <div className="glass rounded-2xl border border-line p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Growth Nest Tech Solutions
                  </h3>
                  <span className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 font-mono text-xs text-teal">
                    Current
                  </span>
                </div>
                <p className="mt-1 font-body text-sm text-muted">
                  Full Stack Developer &amp; UI/UX Designer
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {RESPONSIBILITIES.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 font-body text-sm text-ink/90">
                      <CheckCircle2 size={16} className="shrink-0 text-electric" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
