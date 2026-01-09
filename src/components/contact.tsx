import { Icons } from '@/components/icons'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { CONFIG } from '@/config'
import Link from 'next/link'

const Contact = () => {
    return (
        <div className='mt-8 animate-slide-from-down-and-fade-4'>
            {/* Gradient divider */}
            <div className='mb-8 h-px bg-gradient-to-r from-transparent via-border to-transparent' />

            <div className='flex items-center justify-start px-4'>
                {/* Social Links */}
                <div className='flex items-center gap-1'>
                    <TooltipProvider delayDuration={70}>
                        {CONFIG.socials.map((social, idx) => {
                            const Icon = Icons[social.icon]
                            return (
                                <Tooltip key={idx}>
                                    <TooltipTrigger asChild>
                                        <Button
                                            asChild
                                            variant='ghost'
                                            className='size-10 p-0 text-muted-foreground/60 transition-all duration-300 hover:scale-110 hover:bg-accent-primary/10 hover:text-foreground'
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
                                        className='border-border/50 bg-card/90 text-xs backdrop-blur-sm'
                                    >
                                        {social.name}
                                    </TooltipContent>
                                </Tooltip>
                            )
                        })}
                        <ModeToggle />
                        {/* Webring */}
                        <div className='ml-1 flex items-center gap-0 text-muted-foreground/60'>
                            <Link
                                href='https://cs.uwatering.com/samuelzhang.ca/prev'
                                className='flex h-10 w-6 items-center justify-center transition-colors hover:text-foreground'
                            >
                                ←
                            </Link>
                            <Link
                                href='https://cs.uwatering.com'
                                target='_blank'
                                className='flex h-10 w-6 items-center justify-center opacity-60 transition-opacity hover:opacity-100'
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
                                href='https://cs.uwatering.com/samuelzhang.ca/next'
                                className='flex h-10 w-6 items-center justify-center transition-colors hover:text-foreground'
                            >
                                →
                            </Link>
                        </div>
                    </TooltipProvider>
                </div>
            </div>
        </div>
    )
}

export default Contact
