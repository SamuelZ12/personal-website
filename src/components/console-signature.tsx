'use client'

import { useEffect } from 'react'

// A quiet note for anyone who opens the console — the site's audience is
// mostly engineers, and this is the one place to say hello without adding
// anything to the page itself.
let printed = false

export function ConsoleSignature() {
    useEffect(() => {
        if (printed) return
        printed = true

        console.log(
            '%cif u see this, msg me for ur prize :) 🌟',
            'font-size:12px;color:#9aa0a6;'
        )
    }, [])

    return null
}
