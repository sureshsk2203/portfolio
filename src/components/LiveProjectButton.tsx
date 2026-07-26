interface LiveProjectButtonProps {
  href?: string;
  className?: string;
}

export default function LiveProjectButton({ href, className = '' }: LiveProjectButtonProps) {
  const content = 'Live Project';
  const baseClasses = `inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" data-cursor-hover className={baseClasses}>
        {content}
      </a>
    );
  }
  return (
    <span className={`${baseClasses} cursor-default opacity-60`}>
      Coming Soon
    </span>
  );
}
