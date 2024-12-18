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
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#3047A7",
      },
      spacing: {
        primary: "clamp(2rem, 0.4694rem + 6.8027vw, 7rem)",
      },
      fontSize: {
        header: "clamp(3rem, 1.4694rem + 6.8027vw, 8rem)",
        header2: "clamp(1.75rem, 1.1667rem + 2.5926vw, 3.5rem)",
      }
    },
  },
  plugins: [],
} satisfies Config;
