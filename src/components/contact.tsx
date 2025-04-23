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
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Contact = () => {
    return (
        <div className='mt-12 flex flex-col border-t pt-6'>
            <div className='flex items-center justify-between px-4'>
                <p className='text-sm text-muted-foreground'>© 2025 Samuel Zhang</p>
                <div className='flex items-center gap-2'>
                    <TooltipProvider delayDuration={70}>
                        {CONFIG.socials.map((social, idx) => {
                            const Icon = Icons[social.icon]
                            return (
                                <Tooltip key={idx}>
                                    <TooltipTrigger asChild>
                                        <Button
                                            asChild
                                            variant={'ghost'}
                                            className={cn(
                                                'size-10 p-0 text-muted-foreground transition-colors duration-200 hover:text-foreground'
                                            )}
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
                                        className='bg-transparent text-xs'
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