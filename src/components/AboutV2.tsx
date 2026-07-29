import { Moon, Blocks, Boxes, Layers } from 'lucide-react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

export default function AboutV2() {
  return (
    <section id="about" className="relative flex flex-col items-center justify-center px-5 py-16 sm:min-h-screen sm:px-8 sm:py-20 md:px-10">
      {/* Corner decorations — desktop/tablet only; fixed-size + percentage positioning
          doesn't scale consistently across different phone widths, so hide on mobile */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute left-[1%] top-[4%] z-0 hidden sm:block sm:left-[2%] md:left-[4%]">
        <div className="hidden h-[160px] w-[160px] items-center justify-center rounded-3xl border border-line bg-panel/40 sm:flex md:h-[210px] md:w-[210px]">
          <Moon size={48} className="text-electric/40" strokeWidth={1.2} />
        </div>
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] z-0 hidden sm:block sm:left-[6%] md:left-[10%]">
        <div className="hidden h-[140px] w-[140px] items-center justify-center rounded-3xl border border-line bg-panel/40 sm:flex md:h-[180px] md:w-[180px]">
          <Boxes size={40} className="text-teal/40" strokeWidth={1.2} />
        </div>
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute right-[1%] top-[4%] z-0 hidden sm:block sm:right-[2%] md:right-[4%]">
        <div className="hidden h-[160px] w-[160px] items-center justify-center rounded-3xl border border-line bg-panel/40 sm:flex md:h-[210px] md:w-[210px]">
          <Blocks size={48} className="text-violet/40" strokeWidth={1.2} />
        </div>
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] z-0 hidden sm:block sm:right-[6%] md:right-[10%]">
        <div className="hidden h-[170px] w-[170px] items-center justify-center rounded-3xl border border-line bg-panel/40 sm:flex md:h-[220px] md:w-[220px]">
          <Layers size={52} className="text-electric/40" strokeWidth={1.2} />
        </div>
      </FadeIn>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-display font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text="With more than one year of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
          className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}