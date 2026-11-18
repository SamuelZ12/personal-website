import { ThemeProvider } from '@/components/theme-provider'
import { CONFIG } from '@/config'
import { cn } from '@/lib/utils'
import { HighlightInit } from '@highlight-run/next/client'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import Contact from '@/components/contact'
import { ConsoleSignature } from '@/components/console-signature'
import { EntranceRelease } from '@/components/entrance'
import { ThemeColorSync } from '@/components/theme-color'
import { THEME_COLOR } from '@/lib/theme-color'
import { GoogleAnalytics } from '@next/third-parties/google'

// Inter, set small and tight (see the body rule in globals.css). The warmth
// comes from the paper and ink, not the letterforms. Variable, so the weights
// in use (400 body / 440 display / 500 names) ship in a single file,
// and next/font self-hosts it with a metric-matched fallback so the swap costs
// no layout shift.
const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
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
        <>
            {process.env.NODE_ENV === 'production' && (
                <HighlightInit
                    projectId={'ng2wmv0g'}
                    serviceName='my-nextjs-frontend'
                    tracingOrigins
                    networkRecording={{
                        enabled: true,
                        recordHeadersAndBody: true,
                        urlBlocklist: [],
                    }}
                />
            )}
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
                    className={cn(
                        'bg-background font-sans antialiased',
                        fontSans.variable
                    )}
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
                        {/* The page fills the window: one column as tall as
                            the viewport, wide enough (544px of text) that
                            every project description fits on one line, the content
                            starting at a fixed height so the name sits in the
                            same place on every page, the footer resting on
                            the bottom edge. A page longer than the window
                            just scrolls, footer last. */}
                        <div className='mx-auto flex min-h-dvh max-w-xl flex-col'>
                            <main className='flex-1 py-8 md:py-16'>
                                {children}
                            </main>
                            <Contact />
                        </div>
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
