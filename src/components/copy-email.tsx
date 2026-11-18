'use client'

import { useRef, useState } from 'react'

type CopyEmailProps = {
    href: string
    label: string
    className?: string
}

// The email is the site's one real call to action. Clicking still opens a mail
// client (the mailto stays), but it also drops the address on the clipboard and
// the word itself flips to a quiet "Copied" — a helpful surprise for the many
// people who'd rather paste it than launch Mail.
export function CopyEmail({ href, label, className }: CopyEmailProps) {
    const address = href.replace(/^mailto:/, '')
    const [copied, setCopied] = useState(false)
    const [swapped, setSwapped] = useState(false)
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleClick = () => {
        if (typeof navigator === 'undefined' || !navigator.clipboard) return
        navigator.clipboard
            .writeText(address)
            .then(() => {
                setSwapped(true)
                setCopied(true)
                if (timer.current) clearTimeout(timer.current)
                timer.current = setTimeout(() => setCopied(false), 1600)
            })
            .catch(() => {
                // No clipboard access — the mailto still does its job.
            })
    }

    return (
        <>
            {/* Plain anchor, not next/link: a mailto: must reach the browser's
                native handler. next/link intercepts the click and tries to
                router.push() it, which silently swallows the mailto unless
                target="_blank" forces an early bail-out. The accessible name
                stays the label; the "Copied" swap is announced by the status
                region below instead. */}
            <a
                href={href}
                aria-label={label}
                onClick={handleClick}
                className={className}
            >
                {/* Re-keyed so each swap mounts a fresh span and plays the
                    blur-in. `swapped` keeps the first render plain: the
                    label must not animate on page load. */}
                <span
                    key={copied ? 'copied' : 'label'}
                    className={swapped ? 'label-swap' : undefined}
                >
                    {copied ? 'Copied' : label}
                </span>
            </a>
            <span role='status' aria-live='polite' className='sr-only'>
                {copied ? `${address} copied to clipboard` : ''}
            </span>
        </>
    )
}
