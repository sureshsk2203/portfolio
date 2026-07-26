/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05060A',
        panel: '#0B0E17',
        panel2: '#11141F',
        electric: '#4F7CFF',
        violet: '#8B5CF6',
        teal: '#00D4B5',
        ink: '#E8EBF5',
        muted: '#8891A7',
        line: 'rgba(232,235,245,0.08)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(79,124,255,0.18), transparent 45%), radial-gradient(circle at 80% 30%, rgba(139,92,246,0.16), transparent 45%), radial-gradient(circle at 50% 90%, rgba(0,212,181,0.10), transparent 50%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%,49%': { opacity: '1' },
          '50%,100%': { opacity: '0' },
        },
        drift: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(30px,-20px) scale(1.08)' },
          '100%': { transform: 'translate(0,0) scale(1)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
        drift: 'drift 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
