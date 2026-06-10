import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light:   "#E2C97E",
          dark:    "#9A7A2E",
        },
        executive: {
          bg:      "#0A0A0A",
          surface: "#141414",
          card:    "#1C1C1C",
          border:  "#2A2A2A",
          muted:   "#6B6B6B",
          text:    "#E8E8E8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
