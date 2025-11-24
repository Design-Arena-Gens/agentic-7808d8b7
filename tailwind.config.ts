import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0A0812",
        aura: {
          purple: "#7B61FF",
          cyan: "#38F8FF",
          magenta: "#FF6BCB"
        },
        slateglass: "rgba(255,255,255,0.08)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        glow: "0 0 32px rgba(123, 97, 255, 0.45)",
        "inner-glow": "inset 0 0 24px rgba(56, 248, 255, 0.25)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(120deg, rgba(123,97,255,0.06) 0%, rgba(56,248,255,0.08) 100%)",
        "noise-texture": "url('/noise.png')"
      },
      animation: {
        "pulse-soft": "pulseSoft 6s ease-in-out infinite",
        "float-slow": "floatSlow 9s ease-in-out infinite"
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "0.85", filter: "blur(0px)" },
          "50%": { opacity: "1", filter: "blur(2px)" }
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
