import { useEffect, useState } from 'react';

const LINES = [
  { prefix: '>', text: 'whoami', color: 'text-muted' },
  { prefix: '', text: 'suresh_kumar_a', color: 'text-electric' },
  { prefix: '>', text: 'role --current', color: 'text-muted' },
  { prefix: '', text: 'UI/UX Designer & Full Stack Developer', color: 'text-teal' },
  { prefix: '>', text: 'stack --active', color: 'text-muted' },
  { prefix: '', text: 'React · Flask · MySQL · Figma', color: 'text-violet' },
  { prefix: '>', text: 'status', color: 'text-muted' },
  { prefix: '', text: 'designing_and_shipping = true', color: 'text-ink' },
];

export default function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const current = LINES[visibleLines];
    if (charCount < current.text.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setCharCount(0);
      }, 260);
      return () => clearTimeout(t);
    }
  }, [charCount, visibleLines]);

  return (
    <div className="glass w-full max-w-md rounded-2xl p-5 shadow-2xl shadow-black/40 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-muted">suresh — zsh</span>
      </div>
      <div className="font-mono text-[13px] leading-relaxed sm:text-sm">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.prefix ? 'text-muted' : ''}>
            {line.prefix && <span className="mr-2 text-electric">{line.prefix}</span>}
            <span className={line.color}>{line.text}</span>
          </div>
        ))}
        {visibleLines < LINES.length && (
          <div>
            {LINES[visibleLines].prefix && <span className="mr-2 text-electric">{LINES[visibleLines].prefix}</span>}
            <span className={LINES[visibleLines].color}>
              {LINES[visibleLines].text.slice(0, charCount)}
            </span>
            <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-blink bg-ink" />
          </div>
        )}
      </div>
    </div>
  );
}
