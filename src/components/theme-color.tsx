'use client'

import { THEME_COLOR } from '@/lib/theme-color'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// The layout ships one theme-color per system colour scheme, which is right
// until a visitor uses the toggle to pick the other theme: then the browser
// bar would stay on the system's colour above a page in the opposite one.
// This points every theme-color tag at the theme actually on screen. The
// pathname is a dependency because a navigation re-renders the tags.
export function ThemeColorSync() {
    const { resolvedTheme } = useTheme()
    const pathname = usePathname()

    useEffect(() => {
        if (resolvedTheme !== 'light' && resolvedTheme !== 'dark') return
        document
            .querySelectorAll('meta[name="theme-color"]')
            .forEach((meta) =>
                meta.setAttribute('content', THEME_COLOR[resolvedTheme])
            )
    }, [resolvedTheme, pathname])

    return null
}
