'use client'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    // Re-keying on each toggle restarts the one-shot rotation. A keyframe (not a
    // transition) is used on purpose: next-themes suppresses transitions during
    // the theme swap, but animations still play.
    const [spins, setSpins] = useState(0)

    const toggle = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        setSpins((n) => n + 1)
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
