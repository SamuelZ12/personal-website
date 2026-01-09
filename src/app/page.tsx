import Header from '@/components/header'
import { Icons } from '@/components/icons'
import Project from '@/components/project'
import WorkExperience from '@/components/work-experience'
import { CONFIG } from '@/config'
import Link from 'next/link'

export default function Home() {
    return (
        <div className='flex flex-col gap-8'>
            <Header />

            {/* Bio section */}
            <div className='animate-slide-from-down-and-fade-2 px-4'>
                <p className='text-[15px] leading-relaxed text-muted-foreground/80'>
                    {CONFIG.description}
                </p>
            </div>

            {/* Featured Projects section */}
            <section className='animate-slide-from-down-and-fade-3 px-4'>
                <div className='mb-6 flex items-center gap-3'>
                    <h2 className='text-lg font-semibold'>Featured Projects</h2>
                    <div className='h-px flex-1 bg-gradient-to-r from-border to-transparent' />
                </div>

                <div className='space-y-3'>
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

                {/* Enhanced "All projects" link */}
                <div className='mt-6 flex justify-end'>
                    <Link
                        href='/projects'
                        className='group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground'
                    >
                        View all projects
                        <Icons.arrowUpRight className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                    </Link>
                </div>
            </section>

            <WorkExperience />
        </div>
    )
}
