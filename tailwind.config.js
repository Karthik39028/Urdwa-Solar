/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        card: "hsl(var(--card))",
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        brand: {
          green: { DEFAULT: "#2ECC71", foreground: "#ffffff" },
          navy: "#0F2A4A",
        },
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(15, 42, 74, 0.08)",
        card: "0 10px 30px -10px rgba(15, 42, 74, 0.18)",
        glow: "0 10px 40px -10px rgba(46, 204, 113, 0.45)",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out both",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
