/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EA580C', // Orange from Figma
        secondary: '#1F2937', // Dark gray for headings
        background: '#FFFFFF',
        text: {
          primary: '#1F2937',
          secondary: '#4B5563',
          light: '#9CA3AF',
        },
        category: {
          fiction: '#FFF7ED',
          nonfiction: '#EFF6FF',
          academic: '#ECFDF5',
          children: '#F5F3FF',
          regional: '#FEF2F2',
          comics: '#FFFBEB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 10px 15px 0px rgba(0, 0, 0, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0.1)',
        'hero': '0px 20px 25px 0px rgba(0, 0, 0, 0.1), 0px 8px 10px 0px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #FFF7ED, #FFEDD5)',
      },
    },
  },
  plugins: [],
} 