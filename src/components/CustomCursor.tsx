import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const hoverIn = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover]')) {
        ringRef.current?.classList.add('cursor-hover');
      }
    };
    const hoverOut = () => {
      ringRef.current?.classList.remove('cursor-hover');
    };

    let raf: number;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', hoverIn);
    document.addEventListener('mouseout', hoverOut);
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', hoverIn);
      document.removeEventListener('mouseout', hoverOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/50 transition-[width,height,border-color] duration-200"
        style={{ willChange: 'transform' }}
      />
      <style>{`
        .cursor-ring.cursor-hover {
          width: 56px;
          height: 56px;
          border-color: rgba(139,92,246,0.7);
          background: rgba(79,124,255,0.08);
        }
      `}</style>
    </>
  );
}
