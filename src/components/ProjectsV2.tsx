import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Wallet, School } from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

import stockplus1 from '../assets/images/projects/stockplus-1.jpg';
import stockplus2 from '../assets/images/projects/stockplus-2.jpg';
import rehoboth1 from '../assets/images/projects/rehoboth-1.jpg';
import rehoboth2 from '../assets/images/projects/rehoboth-2.jpg';
import temple1 from '../assets/images/projects/temple-1.jpg';
import temple2 from '../assets/images/projects/temple-2.jpg';
import inmba1 from '../assets/images/projects/inmba-1.jpg';
import inmba2 from '../assets/images/projects/inmba-2.jpg';

const PROJECTS = [
  {
    num: '01',
    name: 'Stock Plus',
    category: 'Full Stack Stock Management System',
    images: [stockplus1, stockplus2],
    tint: 'from-electric/20 to-transparent',
    liveUrl: 'https://stock-kappa-lemon.vercel.app',
  },
  {
    num: '02',
    name: 'Rehoboth Refrigeration Hub',
    category: 'Business Website',
    images: [rehoboth1, rehoboth2],
    tint: 'from-teal/20 to-transparent',
    liveUrl: 'https://rehobothrefrigerationhub.online',
  },
  {
    num: '03',
    name: 'Swift Pay',
    category: 'Premium FinTech UI/UX Design',
    images: [],
    icon: Wallet,
    iconColor: 'text-violet',
    tint: 'from-violet/20 to-transparent',
    liveUrl: undefined,
  },
  {
    num: '04',
    name: 'INMBA',
    category: 'Company Project',
    images: [inmba1, inmba2],
    tint: 'from-electric/20 via-violet/10 to-transparent',
    liveUrl: 'https://inmba.org',
  },
  {
    num: '05',
    name: 'Vinayagar Temple — Vari Management',
    category: 'Temple Devotee Vari Management Website',
    images: [temple1, temple2],
    tint: 'from-[#BE4C00]/20 to-transparent',
    liveUrl: 'https://vinayagartempleambasamudram.netlify.app',
  },
  {
    num: '06',
    name: 'School Website 1',
    category: 'Upcoming — School Website',
    images: [],
    icon: School,
    iconColor: 'text-teal',
    tint: 'from-teal/20 to-transparent',
    liveUrl: undefined,
  },
  {
    num: '07',
    name: 'School Website 2',
    category: 'Upcoming — School Website',
    images: [],
    icon: School,
    iconColor: 'text-violet',
    tint: 'from-violet/20 to-transparent',
    liveUrl: undefined,
  },
];

function ProjectVisual({ project }: { project: typeof PROJECTS[number] }) {
  const images = project.images;

  if (images.length >= 2) {
    return (
      <div className="mt-6 flex flex-1 gap-3 sm:mt-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-[45%] overflow-hidden rounded-[40px] border border-[#D7E2EA]/20 sm:rounded-[50px] md:rounded-[60px]"
        >
          <img src={images[0]} alt={`${project.name} screenshot 1`} className="h-full w-full object-cover object-top" loading="lazy" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-[55%] overflow-hidden rounded-[40px] border border-[#D7E2EA]/20 sm:rounded-[50px] md:rounded-[60px]"
        >
          <img src={images[1]} alt={`${project.name} screenshot 2`} className="h-full w-full object-cover object-top" loading="lazy" />
        </motion.div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-6 flex-1 overflow-hidden rounded-[40px] border border-[#D7E2EA]/20 sm:mt-8 sm:rounded-[50px] md:rounded-[60px]"
      >
        <img src={images[0]} alt={`${project.name} screenshot`} className="h-full w-full object-cover object-top" loading="lazy" />
      </motion.div>
    );
  }

  const Icon = project.icon!;
  return (
    <div className="mt-6 flex flex-1 gap-3 sm:mt-8">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className={`flex w-[40%] items-center justify-center rounded-[40px] border border-[#D7E2EA]/20 bg-gradient-to-br ${project.tint} sm:rounded-[50px] md:rounded-[60px]`}
      >
        <Icon size={44} className={project.iconColor} strokeWidth={1.2} />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className={`flex w-[60%] items-center justify-center rounded-[40px] border border-[#D7E2EA]/20 bg-gradient-to-b ${project.tint} sm:rounded-[50px] md:rounded-[60px]`}
      >
        <Icon size={72} className={`${project.iconColor} opacity-40`} strokeWidth={0.9} />
      </motion.div>
    </div>
  );
}

function ProjectCard({ project, index, total }: { project: typeof PROJECTS[number]; index: number; total: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
  });

  const isLastCard = index === total - 1;
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, isLastCard ? 1 : 0.3]);
  const rawY = useTransform(scrollYProgress, [0, 1], [0, isLastCard ? 0 : -14]);

  const springConfig = { stiffness: 180, damping: 30, mass: 0.7 };
  const scale = useSpring(rawScale, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);
  const y = useSpring(rawY, springConfig);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: isLastCard ? '85vh' : '180vh' }}
    >
      <div
        className="sticky h-[85vh] overflow-hidden"
        style={{ top: `calc(6rem + ${index * 14}px)`, zIndex: index + 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ scale, opacity, y }}
          className="h-full overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        >
          <div className="flex h-full flex-col">
            {/* Top row */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-5">
                <span
                  className="font-black text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(2rem, 6vw, 84px)',
                    WebkitTextStroke: '1.5px #D7E2EA',
                  }}
                >
                  {project.num}
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#8891A7] sm:text-sm">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-[#D7E2EA] sm:text-xl md:text-2xl">
                    {project.name}
                  </h3>
                </div>
              </div>
              <LiveProjectButton href={project.liveUrl} />
            </div>

            <ProjectVisual project={project} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectsV2() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-32 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn className="mb-14 md:mb-20">
        <h2 className="hero-heading text-center font-display font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Project
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}