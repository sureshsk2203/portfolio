import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function AnimatedChar({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

function AnimatedWord({
  word,
  startIndex,
  total,
  progress,
}: {
  word: string;
  startIndex: number;
  total: number;
  progress: MotionValue<number>;
}) {
  return (
    <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
      {word.split('').map((char, i) => (
        <AnimatedChar key={i} char={char} index={startIndex + i} total={total} progress={progress} />
      ))}
    </span>
  );
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  // Progress based only on the element's TOP position moving through a fixed viewport
  // range — independent of the paragraph's own height, so it behaves consistently
  // across short/tall content and different screen sizes, and always reaches 1.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.35'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.6 });

  const words = text.split(' ');
  const totalChars = text.replace(/ /g, '').length;
  let runningIndex = 0;

  return (
    <p ref={ref} className={className} style={{ ...style, userSelect: 'none', WebkitUserSelect: 'none', touchAction: 'pan-y' }}>
      {words.map((word, wi) => {
        const startIndex = runningIndex;
        runningIndex += word.length;
        return (
          <span key={wi}>
            <AnimatedWord word={word} startIndex={startIndex} total={totalChars} progress={progress} />
            {wi < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </p>
  );
}