import FadeIn from './FadeIn';

const SERVICES = [
  {
    num: '01',
    name: 'UI/UX Design',
    desc: 'User-centered interfaces built on research, wireframes, and clean design systems that make products intuitive to use.',
  },
  {
    num: '02',
    name: 'Full Stack Development',
    desc: 'End-to-end web applications combining React frontends with Flask and MySQL backends, built to scale.',
  },
  {
    num: '03',
    name: 'Responsive Website Development',
    desc: 'Websites that look and perform beautifully across mobile, tablet, and desktop screens.',
  },
  {
    num: '04',
    name: 'Dashboard Development',
    desc: 'Data-rich admin panels and dashboards designed for clarity, speed, and ease of use.',
  },
  {
    num: '05',
    name: 'Landing Page Design',
    desc: 'High-converting landing pages focused on clear messaging and clean visual hierarchy.',
  },
  {
    num: '06',
    name: 'Website Redesign',
    desc: 'Modernizing outdated sites into fast, elegant, and user-friendly digital experiences.',
  },
];

export default function ServicesV2() {
  return (
    <section id="services" className="relative rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn>
        <h2
          className="mb-16 text-center font-display font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 py-8 sm:gap-10 sm:py-10 md:py-12"
              style={{ borderBottom: i < SERVICES.length - 1 ? '1px solid rgba(12,12,12,0.15)' : 'none' }}
            >
              <span
                className="shrink-0 font-black text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.num}
              </span>
              <div>
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="mt-2 max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
