import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme')

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                    primary: 'hsl(var(--accent-primary))',
                    secondary: 'hsl(var(--accent-secondary))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'slide-from-down-and-fade': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)',
                        filter: 'blur(4px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                        filter: 'blur(0px)',
                    },
                },
                'glow-pulse': {
                    '0%, 100%': {
                        opacity: '0.4',
                    },
                    '50%': {
                        opacity: '0.8',
                    },
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-6px)',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'slide-from-down-and-fade-1':
                    'slide-from-down-and-fade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both',
                'slide-from-down-and-fade-2':
                    'slide-from-down-and-fade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both',
                'slide-from-down-and-fade-3':
                    'slide-from-down-and-fade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both',
                'slide-from-down-and-fade-4':
                    'slide-from-down-and-fade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both',
                'slide-from-down-and-fade-5':
                    'slide-from-down-and-fade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.65s both',
                'slide-from-down-and-fade-6':
                    'slide-from-down-and-fade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both',
                'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
