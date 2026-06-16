import { CopyEmail } from '@/components/copy-email'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { CONFIG } from '@/config'
import Link from 'next/link'
import type { CSSProperties } from 'react'

const Contact = () => {
    return (
        <div
            className='mt-8 animate-enter'
            style={{ '--i': 11 } as CSSProperties}
        >
            {/* Divider */}
            <div className='mx-4 mb-4 h-px bg-border' />

            <div className='flex items-center justify-between px-4'>
                {/* Social Links */}
                <div className='flex items-center gap-1'>
                    <TooltipProvider delayDuration={70}>
                        {CONFIG.socials.map((social, idx) => {
                            const Icon = Icons[social.icon]
                            if (social.icon === 'email') {
                                return (
                                    <CopyEmail
                                        key={idx}
                                        href={social.url}
                                        label={social.name}
                                    />
                                )
                            }
                            return (
                                <Tooltip key={idx}>
                                    <TooltipTrigger asChild>
                                        <Button
                                            asChild
                                            variant='ghost'
                                            className='size-10 p-0 text-muted-foreground btn-press hover:text-foreground focus-visible:text-foreground'
                                        >
                                            <Link
                                                href={social.url}
                                                target='_blank'
                                                aria-label={social.name}
                                            >
                                                <Icon className='size-5' />
                                            </Link>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side='top'
                                        className='border-border bg-card text-xs'
                                    >
                                        {social.name}
                                    </TooltipContent>
                                </Tooltip>
                            )
                        })}
                    </TooltipProvider>
                </div>

                {/* Webring */}
                <div className='flex items-center gap-0 text-muted-foreground'>
                    <Link
                        href='https://cs.uwatering.com/#samuelzhang.ca?nav=prev'
                        aria-label='Previous site in the CS webring'
                        className='group flex h-10 w-6 items-center justify-center btn-press hover:text-foreground focus-visible:text-foreground'
                    >
                        <span className='inline-block transition-transform duration-200 group-hover:-translate-x-0.5 group-focus-visible:-translate-x-0.5'>
                            ←
                        </span>
                    </Link>
                    <Link
                        href='https://cs.uwatering.com/#samuelzhang.ca'
                        target='_blank'
                        className='flex h-10 w-6 items-center justify-center opacity-70 btn-press hover:opacity-100 focus-visible:opacity-100'
                    >
                        <img
                            src='https://cs.uwatering.com/icon.black.svg'
                            alt='CS Webring'
                            className='h-5 w-5 dark:hidden'
                        />
                        <img
                            src='https://cs.uwatering.com/icon.white.svg'
                            alt='CS Webring'
                            className='hidden h-5 w-5 dark:block'
                        />
                    </Link>
                    <Link
                        href='https://cs.uwatering.com/#samuelzhang.ca?nav=next'
                        aria-label='Next site in the CS webring'
                        className='group flex h-10 w-6 items-center justify-center btn-press hover:text-foreground focus-visible:text-foreground'
                    >
                        <span className='inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5'>
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact
