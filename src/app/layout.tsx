import { ThemeProvider } from '@/components/theme-provider'
import { CONFIG } from '@/config'
import { cn } from '@/lib/utils'
import { HighlightInit } from '@highlight-run/next/client'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Hanken_Grotesk as FontSans } from 'next/font/google'
import './globals.css'
import Contact from '@/components/contact'
import { ConsoleSignature } from '@/components/console-signature'
import { EntranceRelease } from '@/components/entrance'
import { GoogleAnalytics } from '@next/third-parties/google'

// A warm humanist grotesque rather than the Inter template default: precise
// letterforms, but rounder and more human — the brand voice's "warm and human"
// that Inter's neutral grotesque misses. Variable, so the three weights in use
// (400 body / 500 labels / 700 name) ship in a single file, and next/font
// self-hosts it with a metric-matched fallback so the swap costs no layout shift.
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
                    {/* Arm the entrance cascade hidden before first paint. The
                        release (enter-armed -> enter-go) happens after hydration
                        in <EntranceRelease/>, so the animation clock starts at
                        real paint time rather than before hydration — otherwise
                        the short-delay top items settle during the cold-load
                        hydration gap and only the lower items are seen animating.
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
                        'min-h-screen bg-background font-sans antialiased',
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
                        <main className='mx-auto max-w-xl py-8 md:pt-16'>
                            {children}
                            <Contact />
                        </main>
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
