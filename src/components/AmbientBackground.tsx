import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`;
      }
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 bg-mesh" />
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full opacity-[0.10]"
        style={{
          background: 'radial-gradient(circle, #4F7CFF 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-violet/10 blur-[120px] animate-drift" />
      <div className="absolute -right-32 top-2/3 h-80 w-80 rounded-full bg-teal/10 blur-[110px] animate-drift" style={{ animationDelay: '3s' }} />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(232,235,245,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,235,245,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
}
