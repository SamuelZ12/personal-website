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
            '%cSamuel Zhang\n%cIf you’re reading this, we’ll probably get along.\n%c→ zhangsamuel12@gmail.com',
            'font-weight:600;font-size:14px;',
            'font-size:12px;color:#9aa0a6;',
            'font-size:12px;color:#9aa0a6;'
        )
    }, [])

    return null
}
