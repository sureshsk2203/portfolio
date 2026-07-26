import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import suresh from '../assets/images/suresh-photo.jpg';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroV2() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-cursor-hover
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero heading */}
      <div className="mt-6 overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-center font-display text-[9vw] font-black uppercase leading-none tracking-tight sm:text-[8vw] md:text-[7vw] lg:text-[6.5vw]">
            hi, i&apos;m suresh
          </h1>
        </FadeIn>
      </div>

      {/* Portrait — Magnet effect */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:w-[300px] sm:translate-y-0 sm:bottom-0 md:w-[360px] lg:w-[420px]">
        <div className="pointer-events-auto">
          <Magnet padding={150} strength={5} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <FadeIn delay={0.6} y={30}>
              <img
                src={suresh}
                alt="Suresh Kumar A"
                className="w-full rounded-3xl object-cover shadow-2xl shadow-black/60"
                style={{ willChange: 'transform' }}
              />
            </FadeIn>
          </Magnet>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            UI/UX designer &amp; full stack developer building clean digital experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
