'use client'

import { useEffect } from 'react'

/**
 * Releases the page-load entrance fade once hydration has actually painted.
 *
 * The fade is armed hidden before first paint by an inline script in the
 * document <head> (see layout.tsx). We can't start the animation from that
 * script: a CSS animation's clock is pinned when the rule first applies, and on
 * a cold load that lands before hydration finishes. On a real browser the
 * timeline then catches up across the hydration work, so the fade is half spent
 * (or over) by the time the first real frame paints.
 *
 * React runs this effect only after the hydration commit has painted, so
 * swapping `enter-armed` -> `enter-go` here starts the fade's clock at real
 * paint time and the whole fade plays. A client-side navigation already
 * mounts under `enter-go`, so it isn't affected.
 *
 * If JS never runs (or hydration throws), the inline script's timeout reveals
 * the content; nothing here can strand it hidden.
 */
export function EntranceRelease() {
    useEffect(() => {
        const root = document.documentElement
        if (!root.classList.contains('enter-armed')) return
        let settle: ReturnType<typeof setTimeout> | undefined
        const id = requestAnimationFrame(() =>
            requestAnimationFrame(() => {
                root.classList.replace('enter-armed', 'enter-go')
                // Once the arrival fade (1.2s, the longer of the two entrance
                // animations in globals.css) is over, later pages reached by
                // in-site links fade in quickly instead of replaying it.
                settle = setTimeout(
                    () => root.classList.add('enter-settled'),
                    1300
                )
            })
        )
        return () => {
            cancelAnimationFrame(id)
            clearTimeout(settle)
        }
    }, [])

    return null
}
