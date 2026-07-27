import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  href?: string;
  className?: string;
}

export default function LiveProjectButton({ href, className = '' }: LiveProjectButtonProps) {
  const baseClasses = `inline-flex items-center gap-1.5 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] sm:px-8 sm:py-3 sm:text-sm ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        data-cursor-hover
        className={baseClasses}
        whileHover={{ scale: 1.06, backgroundColor: 'rgba(215,226,234,0.12)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        Live Project
        <motion.span
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: 2, y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <ArrowUpRight size={14} />
        </motion.span>
      </motion.a>
    );
  }
  return (
    <span className={`${baseClasses} cursor-default opacity-50`}>
      Coming Soon
    </span>
  );
}
