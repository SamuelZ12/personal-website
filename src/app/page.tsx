import Header from '@/components/header'
import { Icons } from '@/components/icons'
import Project from '@/components/project'
import { Button } from '@/components/ui/button'
import WorkExperience from '@/components/work-experience'
import { CONFIG } from '@/config'
import Link from 'next/link'

export default function Home() {
    return (
        <div className='flex flex-col gap-12'>
            <Header />
            <div className='animate-slide-from-down-and-fade-2 px-4'>
                <p className='leading-relaxed text-muted-foreground'>
                    {CONFIG.description}
                </p>
            </div>
            <div className='animate-slide-from-down-and-fade-3 space-y-4 px-4'>
                <h2 className='font-bold'>Featured Projects</h2>
                <div className='space-y-0'>
                    {CONFIG.projects
                        .filter((project) => project.featured)
                        .map((project, idx) => (
                            <Project
                                key={idx}
                                index={idx}
                                name={project.name}
                                icon={project.icon}
                                description={project.description}
                                image={project.image}
                                url={project.url}
                                tags={project.tags}
                                testimonial={project.testimonial}
                                github={project.github}
                            />
                        ))}
                </div>
                <Button
                    asChild
                    className='ml-auto items-end text-muted-foreground underline hover:text-foreground'
                    variant={'link'}
                >
                    <Link href='/projects'>
                        All projects
                        <Icons.arrowUpRight className='inline-block size-4' />
                    </Link>
                </Button>
            </div>

            <WorkExperience />
        </div>
    )
}
