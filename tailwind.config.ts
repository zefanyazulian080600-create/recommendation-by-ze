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
        // Color Hunt Starboy / Unisex Streetwear Palette:
        // Base Oat Canvas: #F5EBDD
        // Sunset Coral / Streetwear Orange: #F2765E
        // Deep Indigo Cobalt / Denim: #315B8C
        // Rich Cocoa Espresso Charcoal: #413333
        vanilla: {
          DEFAULT: "#F5EBDD",
          50: "#FCF8F3",
          100: "#F9F3EA",
          200: "#F5EBDD",
          300: "#EBDAC4",
          400: "#DEC4A4",
        },
        coral: {
          DEFAULT: "#F2765E",
          50: "#FEF4F2",
          100: "#FCE7E3",
          200: "#F9C7BD",
          300: "#F6A495",
          400: "#F48571",
          500: "#F2765E",
          600: "#D9563C",
          700: "#B83E26",
        },
        cobalt: {
          DEFAULT: "#315B8C",
          50: "#F1F5FA",
          100: "#DEE8F4",
          200: "#B9CEE6",
          300: "#8FAFD4",
          400: "#5D85B7",
          500: "#315B8C",
          600: "#274870",
          700: "#1C3553",
        },
        cocoa: {
          DEFAULT: "#413333",
          50: "#877373",
          100: "#705E5E",
          200: "#5B4A4A",
          300: "#413333",
          400: "#342828",
          500: "#241B1B",
        },
        // Component-compatible mappings for seamless rendering:
        matcha: {
          DEFAULT: "#315B8C",
          50: "#F1F5FA",
          100: "#DEE8F4",
          200: "#B9CEE6",
          300: "#8FAFD4",
          400: "#5D85B7",
          500: "#315B8C",
          600: "#274870",
        },
        butter: {
          DEFAULT: "#F2765E",
          50: "#FEF4F2",
          100: "#FCE7E3",
          200: "#F9C7BD",
          300: "#F6A495",
          400: "#F48571",
          500: "#F2765E",
          600: "#D9563C",
        },
        espresso: {
          DEFAULT: "#413333",
          50: "#877373",
          100: "#705E5E",
          200: "#5B4A4A",
          300: "#413333",
          400: "#342828",
          500: "#241B1B",
        },
        slate: {
          DEFAULT: "#315B8C",
          100: "#DEE8F4",
          300: "#8FAFD4",
          500: "#315B8C",
          700: "#1C3553",
        },
        ivory: {
          DEFAULT: "#F5EBDD",
          50: "#FCF8F3",
          100: "#F9F3EA",
          200: "#F5EBDD",
        },
        blush: {
          DEFAULT: "#F6A495",
          50: "#FEF4F2",
          100: "#FCE7E3",
          200: "#F9C7BD",
          300: "#F2765E",
        },
        rose: {
          DEFAULT: "#F2765E",
          50: "#FEF4F2",
          100: "#FCE7E3",
          200: "#F9C7BD",
          400: "#F48571",
          500: "#F2765E",
          600: "#D9563C",
          700: "#B83E26",
          800: "#413333",
        },
        charcoal: {
          DEFAULT: "#413333",
          50: "#877373",
          100: "#705E5E",
          200: "#5B4A4A",
          800: "#342828",
          900: "#241B1B",
        },
        softgray: {
          DEFAULT: "#EBDAC4",
          border: "#DEC4A4",
          dark: "#CDB08E",
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
