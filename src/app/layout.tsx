import { CONFIG } from '@/config'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import Contact from '@/components/contact'
import { ConsoleSignature } from '@/components/console-signature'
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
                {/* The whole page-load entrance is driven from this inline
                    script, not from React, so it never waits on the JS
                    bundle: the server-rendered HTML fades in as soon as it
                    can paint. Measured on throttled mobile, releasing after
                    hydration instead held the page blank for 1.5s on slow 4G
                    and until the 4s safety net on 3G.

                    `enter-armed` hides the content before first paint. Once
                    the document has parsed, two animation frames later (so
                    one hidden frame has really been painted and the
                    animation clock starts at paint time, not before it) it
                    is swapped for `enter-go`, which runs the fade. 1.3s on,
                    just past the 1.2s arrival fade in globals.css,
                    `enter-settled` switches pages reached by in-site links
                    to the quick fade.

                    The arrival plays once per tab session: a sessionStorage
                    flag marks later loads `enter-settled` up front. Storage
                    can throw (private mode, blocked site data); then every
                    load just gets the full arrival.

                    The 4s timeout is a safety net for frames that never
                    come (a tab opened in the background): reveal the
                    content anyway. No-JS and reduced-motion never arm and
                    fall through to fully-visible content. */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var c=document.documentElement.classList;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;c.add('enter-armed');try{if(sessionStorage.getItem('entered'))c.add('enter-settled');else sessionStorage.setItem('entered','1')}catch(e){}var go=function(){requestAnimationFrame(function(){requestAnimationFrame(function(){if(c.replace('enter-armed','enter-go'))setTimeout(function(){c.add('enter-settled')},1300)})})};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();setTimeout(function(){c.remove('enter-armed')},4000)}catch(e){}})();`,
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
