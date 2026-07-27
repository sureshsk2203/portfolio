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
    <section className="relative flex min-h-screen flex-col overflow-hidden sm:h-screen">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="relative z-20 flex items-center justify-between gap-2 px-5 pt-6 sm:px-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-cursor-hover
              className="text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero heading */}
      <div className="relative z-0 mt-10 overflow-hidden px-4 sm:mt-10 sm:px-0 md:mt-8">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-center font-display text-[11.5vw] font-black uppercase leading-none tracking-tight sm:text-[8.5vw] md:text-[7vw] lg:text-[6.5vw]">
            hi, i&apos;m suresh
          </h1>
        </FadeIn>
      </div>

      {/* Portrait — normal flow on mobile (no overlap). From sm+, absolute relative to the
          whole section (not a flex sibling) so it never fights heading/nav for space. */}
      <div className="relative z-10 mt-8 flex justify-center sm:mt-0 sm:contents">
        <div className="w-[190px] sm:absolute sm:bottom-6 sm:left-1/2 sm:w-[280px] sm:-translate-x-1/2 md:bottom-8 md:w-[340px] lg:w-[400px]">
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

      {/* Spacer to push bottom bar down on mobile where portrait is in normal flow */}
      <div className="flex-1 sm:hidden" />

      {/* Bottom bar */}
      <div className="relative z-20 mt-8 flex flex-col items-center gap-5 px-5 pb-8 sm:mt-auto sm:flex-row sm:items-end sm:justify-between sm:px-6 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[260px] text-center font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] sm:text-left md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.5rem)' }}
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
