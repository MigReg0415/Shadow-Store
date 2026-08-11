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
        dark: {
          950: "#050508",
          900: "#0F0F1A",
          800: "#1A1A2E",
          700: "#27293D",
        },
        accent: { 500: "#6366F1", 600: "#4F46E5" },
        gold: "#F59E0B",
        success: "#10B981",
        danger: "#EF4444",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

