import { Icons } from '@/components/icons'
import { ReadMore } from '@/components/read-more'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
    name: string
    icon?: keyof typeof Icons
    description: string
    image?: string
    url: string
    tags: {
        name: string
        icon: keyof typeof Icons
    }[]
    testimonial?: string
    github?: string
    index?: number
}

const Project = ({
    name,
    icon,
    description,
    image,
    url,
    tags,
    testimonial,
    github,
    index = 0,
}: ProjectProps) => {
    const Icon = Icons[icon!]
    return (
        <div
            className={`group relative rounded-xl border border-transparent bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-accent-primary/20 hover:bg-secondary/80 hover:shadow-[0_8px_32px_-8px_hsl(var(--accent-primary)/0.15)] ${
                index > 0 ? 'mt-3' : ''
            }`}
        >
            {/* Subtle gradient overlay on hover */}
            <div className='pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

            <div className='relative flex flex-col gap-3'>
                <div className='flex items-start justify-between'>
                    <div className='flex items-start gap-3'>
                        {icon && (
                            <div className='relative'>
                                <div className='absolute inset-0 rounded-lg bg-accent-primary/0 blur-md transition-all duration-500 group-hover:bg-accent-primary/20' />
                                <Icon className='relative h-12 w-12 shrink-0 transition-all duration-300 group-hover:scale-105' />
                            </div>
                        )}
                        {image && (
                            <div className='relative overflow-hidden rounded-lg'>
                                <Image
                                    src={image}
                                    width={64}
                                    height={64}
                                    alt={name}
                                    className='h-12 w-auto shrink-0 transition-all duration-500 group-hover:scale-110'
                                />
                            </div>
                        )}
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-foreground/90 transition-colors duration-300 group-hover:text-foreground'>
                                {name}
                            </h3>
                            <p className='text-sm leading-relaxed text-muted-foreground'>
                                {description}
                            </p>
                        </div>
                    </div>

                    {url && (
                        <div className='flex gap-1 opacity-60 transition-opacity duration-300 group-hover:opacity-100'>
                            <TooltipProvider delayDuration={70}>
                                {github && (
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                asChild
                                                size='icon'
                                                variant='ghost'
                                                className='shrink-0 text-muted-foreground transition-colors duration-300 hover:bg-accent-primary/10 hover:text-foreground'
                                            >
                                                <Link
                                                    href={github}
                                                    target='_blank'
                                                    aria-label='Github'
                                                >
                                                    <Icons.github className='size-4' />
                                                </Link>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent
                                            side='bottom'
                                            className='border-border/50 bg-card/90 text-xs backdrop-blur-sm'
                                        >
                                            Source Code
                                        </TooltipContent>
                                    </Tooltip>
                                )}
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            asChild
                                            size='icon'
                                            variant='ghost'
                                            className='shrink-0 text-muted-foreground transition-colors duration-300 hover:bg-accent-primary/10 hover:text-foreground'
                                        >
                                            <Link
                                                href={url}
                                                target='_blank'
                                                aria-label='Visit Website'
                                            >
                                                <Icons.externalLink className='size-4' />
                                            </Link>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side='bottom'
                                        className='border-border/50 bg-card/90 text-xs backdrop-blur-sm'
                                    >
                                        Visit Website
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    )}
                </div>

                {tags && (
                    <ul className='mt-1 flex flex-wrap gap-2'>
                        {tags.map((tag, idx) => {
                            const TagIcon = Icons[tag.icon]
                            return (
                                <li key={idx}>
                                    <Badge
                                        variant='outline'
                                        className='border-border/50 bg-muted/30 text-muted-foreground transition-all duration-300 hover:border-accent-primary/30 hover:bg-accent-primary/5 hover:text-foreground'
                                    >
                                        <TagIcon className='mr-1.5 h-3 w-3' />
                                        {tag.name}
                                    </Badge>
                                </li>
                            )
                        })}
                    </ul>
                )}

                {testimonial && (
                    <blockquote className='border-l-2 border-accent-primary/30 pl-6 text-sm italic text-muted-foreground'>
                        <ReadMore text={testimonial} id='d' />
                    </blockquote>
                )}
            </div>
        </div>
    )
}

export default Project
