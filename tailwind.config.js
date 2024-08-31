/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './components/**/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/**/*.{js,ts,jsx,tsx,mdx}',
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
        },
        colors: {
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

        extend: {
            boxShadow: {
                'sm': '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
}
