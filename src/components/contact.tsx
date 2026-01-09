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
        <div className='mt-16 animate-slide-from-down-and-fade-5'>
            {/* Gradient divider */}
            <div className='mb-8 h-px bg-gradient-to-r from-transparent via-border to-transparent' />

            <div className='flex items-center justify-between px-4'>
                <p className='text-sm text-muted-foreground/60'>
                    © 2025 Samuel Zhang
                </p>

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
                    </TooltipProvider>
                </div>
            </div>
        </div>
    )
}

export default Contact
