import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { icon: GithubIcon, href: 'https://github.com/sureshsk2203', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/suresh-kumar-a-2b529b367', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sureshsk220305@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <p className="font-display text-xl font-semibold text-ink">
            Suresh Kumar A<span className="text-electric">.</span>
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
            UI/UX Designer • Full Stack Developer
          </p>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Quick Links</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="font-body text-sm text-muted transition-colors hover:text-ink" data-cursor-hover>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Connect</p>
          <div className="flex justify-center gap-3 md:justify-start">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  data-cursor-hover
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel/50 text-muted transition-colors hover:border-electric/40 hover:text-electric"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-line pt-6 text-center">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Suresh Kumar A. Designed &amp; built with care.
        </p>
      </div>
    </footer>
  );
}
