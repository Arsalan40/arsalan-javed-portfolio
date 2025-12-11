import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // Sky Blue - Main brand color
        secondary: "#0284c7", // Darker Sky Blue
        accent: "#38bdf8", // Lighter Sky Blue
        background: "#0f172a", // Slate-900
        card: "#1e293b", // Slate-800
        border: "#334155", // Slate-700
        text: "#f8fafc", // Slate-50
        muted: "#94a3b8", // Slate-400
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(14, 165, 233, 0.5)",
        "glow-lg": "0 0 40px rgba(14, 165, 233, 0.6)",
        "glow-secondary": "0 0 20px rgba(56, 189, 248, 0.5)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
