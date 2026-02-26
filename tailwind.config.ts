import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-orbitron)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Cybersecurity theme colors
        cyber: {
          dark: '#0a0e27',
          darker: '#050814',
          blue: '#00d4ff',
          purple: '#7b2cbf',
          green: '#00ff88',
          red: '#ff006e',
        },
        primary: {
          50: '#e6f7ff',
          100: '#b3e5ff',
          200: '#80d4ff',
          300: '#4dc2ff',
          400: '#1ab1ff',
          500: '#00a0e6',
          600: '#007db3',
          700: '#005a80',
          800: '#00374d',
          900: '#00141a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cyber': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      },
    },
  },
  plugins: [],
}
export default config
