'use client'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { useRef, useState } from 'react'

type CopyEmailProps = {
    href: string
    label: string
}

// The email is the site's one real call to action. Clicking still opens a mail
// client (the mailto stays), but it also drops the address on the clipboard and
// flips the tooltip to a quiet "Copied" — a helpful surprise for the many people
// who'd rather paste it than launch Mail.
export function CopyEmail({ href, label }: CopyEmailProps) {
    const address = href.replace(/^mailto:/, '')
    const [open, setOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleClick = () => {
        if (typeof navigator === 'undefined' || !navigator.clipboard) return
        navigator.clipboard
            .writeText(address)
            .then(() => {
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
            <Tooltip open={open || copied} onOpenChange={setOpen}>
                <TooltipTrigger asChild>
                    <Button
                        asChild
                        variant='ghost'
                        className='size-10 p-0 text-muted-foreground btn-press hover:text-foreground focus-visible:text-foreground'
                    >
                        {/* Plain anchor, not next/link: a mailto: must reach the
                            browser's native handler. next/link intercepts the click
                            and tries to router.push() it, which silently swallows the
                            mailto unless target="_blank" forces an early bail-out. */}
                        <a
                            href={href}
                            aria-label={label}
                            onClick={handleClick}
                        >
                            <Icons.email className='size-5' />
                        </a>
                    </Button>
                </TooltipTrigger>
                <TooltipContent
                    side='top'
                    className='border-border bg-card text-xs'
                >
                    {copied ? 'Copied' : label}
                </TooltipContent>
            </Tooltip>
            <span role='status' aria-live='polite' className='sr-only'>
                {copied ? `${address} copied to clipboard` : ''}
            </span>
        </>
    )
}
