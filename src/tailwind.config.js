module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   // "./src/pages/**/*.{js,ts,jsx,tsx}",
   // "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs personnalisées
        'osecour-blue': {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        'osecour-dark': '#1E293B',
        'osecour-success': '#10B981',
        'osecour-error': '#EF4444',
        'osecour-warning': '#F59E0B',
        'blue': '#3b82f6',
        'blue-dark': '#2563eb',
        'primary': '#3b82f6',
        'primary-dark': '#2563eb',
        'secondary': '#64748b',
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        // Animations personnalisées
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        shake: 'shake 0.5s ease-in-out',
        'spin-slow': 'spin 2s linear infinite',
        'progress': 'progress 1s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
      },
      boxShadow: {
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        // Ombres personnalisées
        'osecour-sm': '0 1px 3px rgba(30, 41, 59, 0.1)',
        'osecour-md': '0 4px 6px -1px rgba(30, 41, 59, 0.1)',
        'osecour-lg': '0 10px 15px -3px rgba(30, 41, 59, 0.1)',
        'osecour-xl': '0 20px 25px -5px rgba(30, 41, 59, 0.1)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}