import { CONFIG } from '@/config'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Icons } from './icons'
import { buttonVariants } from './ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip'

const Contact = () => {
    return (
        <footer className='mt-12 px-4 pb-20'>
            <div className='mt-6 flex flex-col items-center justify-center gap-6'>
                <TooltipProvider delayDuration={70}>
                    <div className='flex items-center justify-center gap-6'>
                        {CONFIG.socials.map((social, idx) => {
                            const Icon = Icons[social.icon]
                            return (
                                <Tooltip key={idx}>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={social.url}
                                            target='_blank'
                                            aria-label={social.name}
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'secondary',
                                                }),
                                                'size-8 bg-transparent p-0 text-muted-foreground transition-colors duration-200 hover:text-foreground md:size-10'
                                            )}
                                        >
                                            <Icon className='size-5 md:size-6' />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side='bottom'
                                        className='text-xs'
                                    >
                                        {social.name}
                                    </TooltipContent>
                                </Tooltip>
                            )
                        })}
                    </div>
                </TooltipProvider>
            </div>
        </footer>
    )
}

export default Contact
