/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8A2BE2',
        accent: '#4F46E5',
        background: '#0A0A0F',
        surface: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 25px 80px rgba(138, 43, 226, 0.35)',
        'soft-glow': '0 20px 60px rgba(79, 70, 229, 0.35)',
      },
      borderRadius: {
        glass: '28px',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(138,43,226,0.35), transparent 45%), radial-gradient(circle at 20% 80%, rgba(79,70,229,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(15,118,110,0.35), transparent 45%)',
      },
    },
  },
  plugins: [],
}

