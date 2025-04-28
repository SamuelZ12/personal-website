import { Icons } from '@/components/icons'
import { CONFIG } from '@/config'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const WorkExperience = () => {
    return (
        <div className='animate-slide-from-down-and-fade-2 space-y-4 px-4'>
            <h2 className='font-bold'>Work Experience</h2>

            <div className='space-y-0'>
                {CONFIG.workExperience?.positions?.map((position, idx) => (
                    <Card 
                        key={idx} 
                        className={`rounded-none border-none border-t border-b border-dotted border-muted/80 bg-background hover:bg-accent/60 dark:hover:bg-secondary hover:rounded-xl transition-all duration-300 p-4 ${
                            idx > 0 ? 'border-t-0' : ''
                        }`}
                    >
                        <div className='flex items-center justify-between'>
                            <div>
                                <h3 className='font-medium'>{position.role}</h3>
                                <div className='flex items-center gap-1'>
                                    <p className='text-sm text-muted-foreground'>
                                        {position.company}
                                    </p>
                                    {position.link && (
                                        <Link
                                            href={position.link}
                                            target='_blank'
                                            className='text-muted-foreground hover:text-foreground'
                                        >
                                            <Icons.externalLink className='size-3' />
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <p className='text-sm text-muted-foreground'>
                                {position.duration}
                            </p>
                        </div>
                        <div className='mt-2 text-sm text-muted-foreground whitespace-pre-line'>
                            {position.description}
                        </div>
                        <div className='mt-3 flex flex-wrap gap-1.5'>
                            {position.tags.map((tag, tagIdx) => {
                                const Icon = Icons[tag.icon]
                                return (
                                    <div
                                        key={tagIdx}
                                        className='flex items-center gap-1 rounded-md border px-2 py-1 text-xs text-muted-foreground'
                                    >
                                        <Icon className='size-3' />
                                        {tag.name}
                                    </div>
                                )
                            })}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default WorkExperience 