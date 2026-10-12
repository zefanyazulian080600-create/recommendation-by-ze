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
        ivory: {
          DEFAULT: "#FAF7F2",
          50: "#FCFAF6",
          100: "#FAF7F2",
          200: "#F4EFE6",
        },
        blush: {
          DEFAULT: "#F1DDE0",
          50: "#FDF8F9",
          100: "#F8ECED",
          200: "#F1DDE0",
          300: "#E5C2C7",
        },
        rose: {
          DEFAULT: "#B96F80",
          50: "#F9EEF1",
          100: "#F4DDE3",
          200: "#E5B6C2",
          400: "#C88393",
          500: "#B96F80",
          600: "#A05566",
          700: "#84404F",
          800: "#6B323E",
        },
        charcoal: {
          DEFAULT: "#262323",
          50: "#757070",
          100: "#5A5454",
          200: "#443F3F",
          800: "#302C2C",
          900: "#262323",
        },
        softgray: {
          DEFAULT: "#ECE9E5",
          border: "#E2DDD7",
          dark: "#CBC5BD",
        },
        marketplace: {
          shopee: "#EE4D2D",
          tokopedia: "#03AC0E",
          lazada: "#0F146D",
          tiktok: "#000000",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(38, 35, 35, 0.05)",
        card: "0 2px 12px rgba(38, 35, 35, 0.04)",
        "card-hover": "0 12px 30px -4px rgba(38, 35, 35, 0.12)",
        float: "0 10px 40px -10px rgba(185, 111, 128, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
