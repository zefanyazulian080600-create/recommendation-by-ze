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
          DEFAULT: "#090A0F",
          50: "#1E202C",
          100: "#181922",
          200: "#12131A",
          300: "#0D0E14",
          400: "#090A0F",
        },
        coral: {
          DEFAULT: "#F43F5E",
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
        },
        cobalt: {
          DEFAULT: "#38BDF8",
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
        },
        cocoa: {
          DEFAULT: "#12131A",
          50: "#334155",
          100: "#1E293B",
          200: "#0F172A",
          300: "#12131A",
          400: "#0C0D12",
          500: "#090A0F",
        },
        // Component-compatible mappings for Dark & Clean:
        matcha: {
          DEFAULT: "#38BDF8",
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
        },
        butter: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
        espresso: {
          DEFAULT: "#090A0F",
          50: "#71717A",
          100: "#52525B",
          200: "#3F3F46",
          300: "#27272A",
          400: "#18181B",
          500: "#090A0F",
        },
        slate: {
          DEFAULT: "#38BDF8",
          100: "#E0F2FE",
          300: "#7DD3FC",
          500: "#0EA5E9",
          700: "#0369A1",
        },
        ivory: {
          DEFAULT: "#12131A",
          50: "#1E202C",
          100: "#181922",
          200: "#12131A",
        },
        blush: {
          DEFAULT: "#1A1C26",
          50: "#252836",
          100: "#1E202C",
          200: "#181922",
          300: "#12131A",
        },
        rose: {
          DEFAULT: "#F43F5E",
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#881337",
        },
        charcoal: {
          DEFAULT: "#090A0F",
          50: "#71717A",
          100: "#52525B",
          200: "#3F3F46",
          800: "#181922",
          900: "#12131A",
        },
        softgray: {
          DEFAULT: "#12131A",
          border: "rgba(255, 255, 255, 0.08)",
          dark: "#090A0F",
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
