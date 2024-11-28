import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          90: '#1A0524',
          80: '#3C0B54',
          70: '#5E1185',
          60: '#8017B5',
          50: '#AA1EF1',
          40: '#BF56F5',
          30: '#D083F7',
          20: '#E1B0FA',
          10: '#F2DDFD',
          11: '#3C0B5400',
          12: '#3C0B5480',
          13: '#FFFFFF30'
        }
      },
      fontFamily: {
        'main': ['var(--font-montserrat)']
      },
    },
  },
  plugins: [],
} satisfies Config;
