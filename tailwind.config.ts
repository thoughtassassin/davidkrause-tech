import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        glow: [
          "1px 2px 1px rgba(0,0,0,0.92)",
          "0 0 2px rgba(202,228,225,0.8)",
          "0 0 2px rgba(202,228,225,0.34)",
          "0 0 2px rgba(30,132,242,0.52)",
          "0 0 2px rgba(30,132,242,0.92)",
          "0 0 1px rgba(30,132,242,0.78)",
          "0 0 1px rgba(30,132,242,0.92)",
        ],
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateY(-10rem)" },
          "50%": { transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10rem)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-in": "slide-in 750ms ease forwards",
        "slide-up": "slide-up 750ms ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
