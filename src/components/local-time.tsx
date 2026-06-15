'use client'

import { useEffect, useState } from 'react'

// Samuel's local time in Toronto, ticking once a second. The value can't be
// known at build time, so the line ships as plain "Toronto, Canada" and the
// clock fades in a beat after hydration — returning null until mounted keeps
// SSR and the first client render in agreement.
//
// The colons breathe at ~1Hz (see .time-colon in globals.css): the universal
// "this is a running clock" cue, so the liveness reads without a separate
// status dot. Decorative, so the whole thing is aria-hidden — a screen reader
// gets the location, not a number that changes every second.
const PARTS_FMT_OPTS: Intl.DateTimeFormatOptions = {
    timeZone: 'America/Toronto',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
}

export function LocalTime() {
    const [parts, setParts] = useState<Intl.DateTimeFormatPart[] | null>(null)

    useEffect(() => {
        const fmt = new Intl.DateTimeFormat('en-US', PARTS_FMT_OPTS)
        const tick = () => setParts(fmt.formatToParts(new Date()))
        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [])

    if (!parts) return null

    return (
        <span
            aria-hidden='true'
            // tabular-nums so ticking digits never shift the line's width.
            className='animate-time-in tabular-nums'
        >
            {' · '}
            {parts.map((part, i) => {
                if (part.type === 'literal' && part.value.includes(':')) {
                    return (
                        <span key={i} className='time-colon'>
                            {part.value}
                        </span>
                    )
                }
                if (part.type === 'dayPeriod') {
                    return <span key={i}>{part.value.toLowerCase()}</span>
                }
                return <span key={i}>{part.value}</span>
            })}
        </span>
    )
}
