import { useRef, useState, type ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0)');
  const [transition, setTransition] = useState(inactiveTransition);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const dist = Math.sqrt(distX * distX + distY * distY);
    const maxDist = Math.max(rect.width, rect.height) / 2 + padding;

    if (dist < maxDist) {
      setTransition(activeTransition);
      setTransform(`translate3d(${distX / strength}px, ${distY / strength}px, 0)`);
    } else {
      setTransition(inactiveTransition);
      setTransform('translate3d(0px, 0px, 0)');
    }
  };

  const handleLeave = () => {
    setTransition(inactiveTransition);
    setTransform('translate3d(0px, 0px, 0)');
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ display: 'inline-block' }}
    >
      <div
        ref={ref}
        style={{
          transform,
          transition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
