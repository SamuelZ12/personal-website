import { Icons } from '@/components/icons'
import { CONFIG } from '@/config'
import Link from 'next/link'

const WorkExperience = () => {
    return (
        <div className='animate-slide-from-down-and-fade-4 space-y-4 px-4'>
            <div className='flex items-center gap-3'>
                <h2 className='text-lg font-semibold'>Work Experience</h2>
                <div className='h-px flex-1 bg-gradient-to-r from-border to-transparent' />
            </div>

            <div className='space-y-3'>
                {CONFIG.workExperience?.positions?.map((position, idx) => (
                        <div
                            key={idx}
                            className='group relative rounded-xl border border-transparent bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-accent-primary/20 hover:bg-secondary/80 hover:shadow-[0_8px_32px_-8px_hsl(var(--accent-primary)/0.12)]'
                        >

                            {/* Subtle gradient overlay on hover */}
                            <div className='pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                            <div className='relative'>
                                <div className='flex items-start justify-between'>
                                    <div className='space-y-1'>
                                        <h3 className='font-semibold text-foreground/90 transition-colors duration-300 group-hover:text-foreground'>
                                            {position.role}
                                        </h3>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-sm text-muted-foreground'>
                                                {position.company}
                                            </p>
                                            {position.link && (
                                                <Link
                                                    href={position.link}
                                                    target='_blank'
                                                    className='text-muted-foreground/60 transition-colors duration-300 hover:text-accent-primary'
                                                >
                                                    <Icons.externalLink className='size-3' />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    <span className='rounded-full bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-300 group-hover:bg-accent-primary/10'>
                                        {position.duration}
                                    </span>
                                </div>

                                <div className='mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground/80'>
                                    {position.description}
                                </div>

                                <div className='mt-4 flex flex-wrap gap-2'>
                                    {position.tags.map((tag, tagIdx) => {
                                        const TagIcon = Icons[tag.icon]
                                        return (
                                            <span
                                                key={tagIdx}
                                                className='flex items-center gap-1.5 rounded-md border border-border/50 bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground transition-all duration-300 hover:border-accent-primary/30 hover:bg-accent-primary/5 hover:text-foreground'
                                            >
                                                <TagIcon className='size-3 opacity-70' />
                                                {tag.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default WorkExperience
