import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1': 'var(--spacing)',               // 4px
        '2': 'calc(var(--spacing) * 2)',     // 8px
        '3': 'calc(var(--spacing) * 3)',     // 12px
        '4': 'calc(var(--spacing) * 4)',     // 16px
        '5': 'calc(var(--spacing) * 5)',     // 20px
        '6': 'calc(var(--spacing) * 6)',     // 24px
        '7': 'calc(var(--spacing) * 7)',     // 28px
        '8': 'calc(var(--spacing) * 8)',     // 32px
        '10': 'calc(var(--spacing) * 10)',   // 40px
        '12': 'calc(var(--spacing) * 12)',   // 48px
      },
      fontSize: {
        '4xl': ['var(--text-4xl)', { lineHeight: 'var(--leading-4xl)' }],
        '3xl': ['var(--text-3xl)', { lineHeight: 'var(--leading-3xl)' }],
        '2xl': ['var(--text-2xl)', { lineHeight: 'var(--leading-2xl)' }],
        xl:    ['var(--text-xl)', { lineHeight: 'var(--leading-xl)' }],
        lg:    ['var(--text-lg)', { lineHeight: 'var(--leading-lg)' }],
        base:  ['var(--text-base)', { lineHeight: 'var(--leading-base)' }],
        sm:    ['var(--text-sm)', { lineHeight: 'var(--leading-sm)' }],
        xs:    ['var(--text-xs)', { lineHeight: 'var(--leading-xs)' }],
        '2xs': ['var(--text-2xs)', { lineHeight: 'var(--leading-2xs)' }],
        '3xs': ['var(--text-3xs)', { lineHeight: 'var(--leading-3xs)' }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",

        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },

        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "2xs": "var(--shadow-2xs)",
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-scale": "fade-in-scale 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

