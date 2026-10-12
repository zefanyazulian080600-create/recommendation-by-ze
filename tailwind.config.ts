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
        // User requested exact palette:
        // Base Neutral: #FCF0DA
        // Matcha / Sage Pastel: #AEAC78
        // Butter / Honey Pastel Gold: #F2C46A
        // Deep Espresso Charcoal: #4C4541
        vanilla: {
          DEFAULT: "#FCF0DA",
          50: "#FFFCF7",
          100: "#FDF8EE",
          200: "#FCF0DA",
          300: "#F6DFB6",
          400: "#EECF93",
        },
        matcha: {
          DEFAULT: "#AEAC78",
          50: "#F6F6EF",
          100: "#ECECE0",
          200: "#D6D5B5",
          300: "#C2C095",
          400: "#AEAC78",
          500: "#94925E",
          600: "#7A7849",
        },
        butter: {
          DEFAULT: "#F2C46A",
          50: "#FEF9EE",
          100: "#FDF3DC",
          200: "#FBE6B8",
          300: "#F7D591",
          400: "#F2C46A",
          500: "#E3AE44",
          600: "#C79127",
        },
        espresso: {
          DEFAULT: "#4C4541",
          50: "#8C837D",
          100: "#776F69",
          200: "#635B56",
          300: "#4C4541",
          400: "#3D3734",
          500: "#2F2A28",
        },
        // Mapped aliases for consistent site-wide branding
        ivory: {
          DEFAULT: "#FCF0DA",
          50: "#FFFCF7",
          100: "#FDF8EE",
          200: "#FCF0DA",
        },
        blush: {
          DEFAULT: "#F7D591",
          50: "#FEF9EE",
          100: "#FDF3DC",
          200: "#F6DFB6",
          300: "#F2C46A",
        },
        rose: {
          DEFAULT: "#AEAC78",
          50: "#F6F6EF",
          100: "#ECECE0",
          200: "#D6D5B5",
          400: "#AEAC78",
          500: "#94925E",
          600: "#7A7849",
          700: "#616037",
          800: "#4C4541",
        },
        charcoal: {
          DEFAULT: "#4C4541",
          50: "#8C837D",
          100: "#776F69",
          200: "#635B56",
          800: "#3D3734",
          900: "#2F2A28",
        },
        softgray: {
          DEFAULT: "#F3EAD7",
          border: "#E7DCBF",
          dark: "#D1C3A0",
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
        soft: "0 4px 20px -2px rgba(76, 69, 65, 0.06)",
        card: "0 2px 14px rgba(76, 69, 65, 0.05)",
        "card-hover": "0 14px 34px -4px rgba(76, 69, 65, 0.14)",
        float: "0 12px 40px -10px rgba(174, 172, 120, 0.25)",
        glow: "0 0 25px -4px rgba(242, 196, 106, 0.45)",
        glass: "0 8px 32px 0 rgba(76, 69, 65, 0.1)",
        "3d-pill": "0 4px 0 0 #4C4541",
        "3d-pill-butter": "0 4px 0 0 #C79127",
        "3d-pill-matcha": "0 4px 0 0 #7A7849",
        "3d-card": "0 10px 0 0 #E7DCBF, 0 16px 30px rgba(76, 69, 65, 0.1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "float-3d": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1.5deg)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "float-3d": "float-3d 4s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
