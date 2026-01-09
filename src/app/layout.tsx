import { ThemeProvider } from '@/components/theme-provider'
import { CONFIG } from '@/config'
import { cn } from '@/lib/utils'
import { HighlightInit } from '@highlight-run/next/client'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import Contact from '@/components/contact'
import { GoogleAnalytics } from '@next/third-parties/google'

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
                </head>
                <body
                    className={cn(
                        'min-h-screen bg-background font-sans antialiased',
                        fontSans.variable
                    )}
                >
                    {/* Ambient background effects */}
                    <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
                        {/* Top-right gradient orb */}
                        <div
                            className='absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent-primary/10 blur-3xl animate-glow-pulse'
                        />
                        {/* Bottom-left gradient orb */}
                        <div
                            className='absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent-secondary/8 blur-3xl animate-glow-pulse'
                            style={{ animationDelay: '2s' }}
                        />
                    </div>

                    {process.env.NODE_ENV === 'production' && (
                        <GoogleAnalytics gaId='G-32FLEBL3F6' />
                    )}
                    <Analytics />
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='dark'
                        enableSystem
                        disableTransitionOnChange
                    >
                        <main className='mx-auto max-w-2xl py-8 md:pt-16'>
                            {children}
                            <Contact />
                        </main>
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
