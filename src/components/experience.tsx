import { Icons } from '@/components/icons'
import { ProjectList } from '@/components/project-list'
import { CONFIG } from '@/config'
import Link from 'next/link'

const Experience = () => {
    const work = CONFIG.experience.work
    const featured = CONFIG.projects.filter((p) => p.featured)
    return (
        <section className='space-y-10 px-4'>
            {/* Work subsection */}
            <div className='animate-enter space-y-2'>
                <h2 className='text-muted-foreground'>
                    Work
                </h2>
                <ul>
                    {work.map((item, idx) => (
                        <li key={idx} className='group'>
                            <span>{item.role}</span>
                            <span className='text-muted-foreground'> @ </span>
                            {item.link ? (
                                <Link
                                    href={item.link}
                                    target='_blank'
                                    className='group/link whitespace-nowrap text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground active:text-foreground'
                                >
                                    <span className='link-underline'>
                                        {item.company}
                                    </span>
                                    <Icons.arrowUpRight className='touch-actions ml-1 inline-block size-3 align-[-0.125em] opacity-0 transition-opacity duration-200 group-hover:opacity-50 group-hover/link:!opacity-100 group-focus-visible/link:!opacity-100' />
                                </Link>
                            ) : (
                                <span className='whitespace-nowrap text-muted-foreground'>
                                    {item.company}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Projects subsection */}
            <div className='flex animate-enter flex-col gap-2'>
                <h2 className='text-muted-foreground'>
                    Projects
                </h2>
                <ProjectList projects={featured} />
                <Link
                    href='/projects'
                    className='group/link inline-flex items-center gap-1.5 self-start text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground active:text-foreground'
                >
                    <span className='link-underline'>View all projects</span>
                    <Icons.arrowUpRight className='size-3.5' />
                </Link>
            </div>
        </section>
    )
}

export default Experience
