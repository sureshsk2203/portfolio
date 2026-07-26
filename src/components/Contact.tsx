import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import Reveal from './Reveal';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sureshsk220305@gmail.com',
    href: 'mailto:sureshsk220305@gmail.com',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/sureshsk2203',
    href: 'https://github.com/sureshsk2203',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'in/suresh-kumar-a-2b529b367',
    href: 'https://www.linkedin.com/in/suresh-kumar-a-2b529b367',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tirunelveli, Tamil Nadu, India',
    href: undefined,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:sureshsk220305@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric">05 — Contact</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Let's Build Something<br /><span className="grad-text">Amazing Together</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Info */}
          <Reveal delay={0.1} x={-30} y={0} className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                const Wrapper = item.href ? 'a' : 'div';
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href ? { href: item.href, target: '_blank', rel: 'noreferrer', 'data-cursor-hover': true } : {})}
                    className="glass flex items-center gap-4 rounded-2xl border border-line p-5 transition-colors duration-200 hover:border-electric/40"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-panel/60">
                      <Icon size={19} className="text-electric" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{item.label}</p>
                      <p className="font-body text-sm text-ink sm:text-base">{item.value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass flex flex-col gap-5 rounded-3xl border border-line p-7 sm:p-9">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-line bg-void/40 px-4 py-3 font-body text-sm text-ink placeholder:text-muted/50 focus:border-electric/50 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-line bg-void/40 px-4 py-3 font-body text-sm text-ink placeholder:text-muted/50 focus:border-electric/50 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-line bg-void/40 px-4 py-3 font-body text-sm text-ink placeholder:text-muted/50 focus:border-electric/50 focus:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                data-cursor-hover
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-6 py-3.5 font-body text-sm font-semibold text-white shadow-lg shadow-electric/20 transition-transform duration-300 hover:scale-[1.02]"
              >
                <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                {sent ? 'Opening your mail app…' : 'Send Message'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
