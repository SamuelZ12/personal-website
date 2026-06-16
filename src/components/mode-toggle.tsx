'use client'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { flushSync } from 'react-dom'

// document.startViewTransition is newer than the installed TS DOM lib; type it
// narrowly here rather than reaching for a global augmentation.
type DocumentWithViewTransition = Document & {
    startViewTransition?: (callback: () => void) => unknown
}

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    // Re-keying on each toggle restarts the one-shot rotation. A keyframe (not a
    // transition) is used on purpose: next-themes suppresses transitions during
    // the theme swap, but animations still play.
    const [spins, setSpins] = useState(0)

    const toggle = () => {
        const next = resolvedTheme === 'dark' ? 'light' : 'dark'
        setSpins((n) => n + 1)

        const doc = document as DocumentWithViewTransition
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        // No View Transitions support, or the visitor asked for less motion:
        // fall through to next-themes' instant swap. Its disableTransitionOnChange
        // keeps that hard cut clean — the icon spin still plays.
        if (reduceMotion || typeof doc.startViewTransition !== 'function') {
            setTheme(next)
            return
        }

        // Crossfade the whole document old -> new on the page's one curve (see
        // ::view-transition rules in globals.css). next-themes applies the theme
        // class in a passive effect, so flushSync forces it to land *inside* this
        // callback; without it the View Transition snapshots the new frame before
        // the class flips and animates between two identical states.
        doc.startViewTransition(() => {
            flushSync(() => setTheme(next))
        })
    }

    return (
        <Button
            variant='ghost'
            className='size-10 p-0 text-muted-foreground btn-press hover:text-foreground focus-visible:text-foreground'
            onClick={toggle}
        >
            <span
                key={spins}
                className={cn(
                    'relative inline-flex size-6 items-center justify-center',
                    spins > 0 && 'animate-toggle-rotate'
                )}
            >
                <Icons.sun className='size-6 rotate-0 scale-100 dark:-rotate-90 dark:scale-0' />
                <Icons.moon className='absolute size-6 rotate-90 scale-0 dark:rotate-0 dark:scale-100' />
            </span>
            <span className='sr-only'>Toggle theme</span>
        </Button>
    )
}
