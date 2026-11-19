import { CONFIG } from '@/config'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import Contact from '@/components/contact'
import { ConsoleSignature } from '@/components/console-signature'
import { EntranceRelease } from '@/components/entrance'
import { ThemeColorSync } from '@/components/theme-color'
import { THEME_COLOR } from '@/lib/theme-color'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ThemeProvider } from 'next-themes'

// Inter at one size (see the body rule in globals.css). The warmth comes from
// the paper and ink, not the letterforms. Variable, so the weights in use
// (400 text / 500 name and section labels) ship in a single file, and
// next/font self-hosts it with a metric-matched fallback so the swap costs no
// layout shift.
//
// The optical-size axis rides along (about 25KB more woff2).
// font-optical-sizing is `auto` by default, so 16px copy is drawn in the cut
// Inter spaces for that size and needs no tracking of its own.
const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    axes: ['opsz'],
})

export const metadata: Metadata = {
    metadataBase: new URL(CONFIG.siteUrl),
    title: {
        default: CONFIG.name,
        template: `${CONFIG.name} | %s`,
    },
    description: CONFIG.descriptionRaw,
}

// Browser-bar colour per system colour scheme. <ThemeColorSync/> retargets
// these when the toggle picks the other theme.
export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: THEME_COLOR.light },
        { media: '(prefers-color-scheme: dark)', color: THEME_COLOR.dark },
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <meta
                    name='google-site-verification'
                    content='kMkiYVJqqIhu8LsCDe8BTV0Juty1tXWM9ur8S3_eENg'
                />
                {/* Arm the entrance fade hidden before first paint. The
                    release (enter-armed -> enter-go) happens after hydration
                    in <EntranceRelease/>, so the animation clock starts at
                    real paint time rather than before hydration — otherwise
                    the fade burns down during the cold-load hydration gap
                    and the page arrives already half-faded.
                    The timeout is a safety net: if hydration never runs,
                    reveal the content anyway. No-JS and reduced-motion never
                    arm and fall through to fully-visible content. */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('enter-armed');setTimeout(function(){if(d.classList.contains('enter-armed'))d.classList.remove('enter-armed')},4000)}catch(e){}})();`,
                    }}
                />
            </head>
            <body
                className={`bg-background font-sans antialiased ${fontSans.variable}`}
            >
                {process.env.NODE_ENV === 'production' && (
                    <GoogleAnalytics gaId='G-32FLEBL3F6' />
                )}
                <Analytics />
                <ConsoleSignature />
                <EntranceRelease />
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    <ThemeColorSync />
                    {/* One column, 560px of text inside a 24px gutter:
                        about 72 characters a line for the bio, inside
                        the comfortable 45-75 measure, and still wide
                        enough that every project description fits on
                        one line. The gutter lives here and nowhere
                        else, so every block shares a left edge. 128px
                        above and below at every width, the same gap
                        that separates the sections, so the name sits in
                        the same place on every page and the footer
                        follows the content as one more section. */}
                    <div className='mx-auto max-w-[608px] px-6 py-32'>
                        <main>{children}</main>
                        <Contact />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
