import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme')

const config = {
    darkMode: ['class'],
    content: ['./src/**/*.{ts,tsx}'],
    prefix: '',
    // Every hover: / group-hover: variant only applies on a device that can
    // actually hover. A phone fires :hover on tap and leaves it stuck until
    // the next tap elsewhere.
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
            },
            lineHeight: {
                // Running prose (the bio). Everything else sits on the
                // default 1.5 line, so a two-line project row is exactly 48px.
                prose: '1.65',
            },
            colors: {
                border: 'hsl(var(--border))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'toggle-rotate': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            transitionTimingFunction: {
                // Every transition decelerates on the same curve as the entrance.
                DEFAULT: 'var(--ease-out-quint)',
                'out-quint': 'var(--ease-out-quint)',
            },
            animation: {
                'toggle-rotate': 'toggle-rotate 0.5s var(--ease-out-quint)',
            },
        },
    },
} satisfies Config

export default config
