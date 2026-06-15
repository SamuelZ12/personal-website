'use client'

import { useEffect } from 'react'

/**
 * Releases the page-load entrance cascade once hydration has actually painted.
 *
 * The cascade is armed hidden before first paint by an inline script in the
 * document <head> (see layout.tsx). We can't start the animation from that
 * script: a CSS animation's clock is pinned when the rule first applies, and on
 * a cold load that lands before hydration finishes. On a real browser the
 * timeline then catches up across the hydration work, so the short-delay top
 * items (header, bio) arrive already settled while only the longer-delay items
 * below are still moving — the "top is static, Work and below animate" report.
 *
 * React runs this effect only after the hydration commit has painted, so
 * swapping `enter-armed` -> `enter-go` here starts every item's clock at real
 * paint time and the whole cascade plays. A client-side navigation already
 * mounts under `enter-go`, which is why it was never affected.
 *
 * If JS never runs (or hydration throws), the inline script's timeout reveals
 * the content; nothing here can strand it hidden.
 */
export function EntranceRelease() {
    useEffect(() => {
        const root = document.documentElement
        if (!root.classList.contains('enter-armed')) return
        const id = requestAnimationFrame(() =>
            requestAnimationFrame(() =>
                root.classList.replace('enter-armed', 'enter-go')
            )
        )
        return () => cancelAnimationFrame(id)
    }, [])

    return null
}
