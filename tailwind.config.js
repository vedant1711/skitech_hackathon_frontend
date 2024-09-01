/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./pages/**/*.{ts,tsx}",
        './components/**/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/**/*.{js,ts,jsx,tsx,mdx}',
        "./src/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1322px',
            '2xl': '1322px',
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
              "2xl": "1400px",
            },
        },
        colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            "primary-light": {
                950: '#FFCF01',
                300: '#FFF6CF',
                200: '#FFFBE8',
                100: '#FFFFFF',
            },
            "primary-dark": {
                950: '#A48916',
                300: '#171713',
                200: '#090807',
                100: '#1C1B1B',
            },
            'neutral': {
                0: '#FFFFFF',
                100: '#FEF5F1',
                200: '#F8F5F1',
                300: '#E3E3E3',
                400: '#A9A9A9',
                500: '#878680',
                600: '#D4D7E5',
                700: '#616670',
                800: '#24231D',
                900: '#181618',
                950: '#151618',
            },
            'neutral-dark': {
                0: '#24262b',
                100: '#19231D',
                200: '#24231D',
                300: '#616670',
                400: '#D4D7E5',
                500: '#878680',
                600: '#A9A9A9',
                700: '#E3E3E3',
                800: '#F8F5F1',
                900: '#EEEEEE',
                950: '#FFFFFF',
            },
            destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
              },
            muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
            },
            card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
            },
        },

        borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },

        fontFamily: {
            'sans': ['Inter', 'sans-serif'],
        },

        fontSize: {
            'xs': ['12px', '12px'],
            'sm': ['14px', '14px'],
            'base': ['16px', '24px'],
            'lg': ['18px', '28px'],
            'xl': ['20px', '30px'],
            '2xl': ['22px', '32px'],
            '3xl': ['24px', '36px'],
            '4xl': ['26px', '39px'],
            '5xl': ['34px', '48px'],
            '6xl': ['46px', '72px'],
            '7xl': ['66px', '83px'],
            '8xl': ['91px', '120px'],
            '9xl': ['100px', '110px'],
        },

        fontWeight: {
            'light': 300,
            'normal': 400,
            'medium': 500,
            'semibold': 600,
            'bold': 700,
            'extrabold': 800,
            'black': 900,
        },

        keyframes: {
            "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: "0" },
            },
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
          },

        extend: {
            boxShadow: {
                'sm': '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
