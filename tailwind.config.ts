import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // North Shore palette
        superior: {
          blue: {
            DEFAULT: '#1c2e40', // Deep lake blue
            light: '#36516b',
            dark: '#111d2b',
          },
          slate: {
            DEFAULT: '#5e6c7a',
            light: '#8493a3',
            dark: '#3d4853',
          },
          mist: {
            DEFAULT: '#d5dbdf',
            light: '#f0f3f5',
            dark: '#b0bcc5',
          },
          pine: {
            DEFAULT: '#2a413a',
            light: '#3d5c52',
            dark: '#1a2b26',
          },
          driftwood: {
            DEFAULT: '#8b7a69',
            light: '#b0a090',
            dark: '#635548',
          }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
export default config;