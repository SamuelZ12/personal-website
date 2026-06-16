import { Icons } from '@/components/icons'
import { CONFIG } from '@/config'
import Link from 'next/link'
import type { CSSProperties } from 'react'

const Experience = () => {
    const work = CONFIG.experience.work
    const featured = CONFIG.projects.filter((p) => p.featured)

    // Running index in the page-load cascade (header = 0, bio = 1). Each row
    // places itself so the lists settle in one item at a time rather than as a
    // single block. Contact (in layout) closes the sequence at index 11.
    const workHeading = 2
    const projectsHeading = workHeading + 1 + work.length
    const viewAll = projectsHeading + 1 + featured.length

    return (
        <section className='space-y-8 px-4'>
            {/* Work subsection */}
            <div className='space-y-2'>
                <h3
                    className='animate-enter text-xs font-medium uppercase tracking-wider text-muted-foreground/80'
                    style={{ '--i': workHeading } as CSSProperties}
                >
                    Work
                </h3>
                <ul className='space-y-1.5'>
                    {work.map((item, idx) => (
                        <li
                            key={idx}
                            className='group animate-enter text-[15px] leading-relaxed'
                            style={
                                { '--i': workHeading + 1 + idx } as CSSProperties
                            }
                        >
                            <span className='text-foreground/90'>{item.role}</span>
                            <span className='text-muted-foreground/80'> @ </span>
                            {item.link ? (
                                <Link
                                    href={item.link}
                                    target='_blank'
                                    className='group/link text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground'
                                >
                                    <span className='link-underline'>
                                        {item.company}
                                    </span>
                                    <Icons.arrowUpRight className='ml-1 inline-block size-3 align-[-0.125em] opacity-0 transition-opacity duration-200 group-hover:opacity-50 group-hover/link:!opacity-100 group-focus-visible/link:!opacity-100' />
                                </Link>
                            ) : (
                                <span className='text-muted-foreground'>
                                    {item.company}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Projects subsection */}
            <div className='space-y-2'>
                <h3
                    className='animate-enter text-xs font-medium uppercase tracking-wider text-muted-foreground/80'
                    style={{ '--i': projectsHeading } as CSSProperties}
                >
                    Projects
                </h3>
                <ul className='space-y-3'>
                    {featured.map((project, idx) => (
                        <li
                            key={idx}
                            className='group animate-enter'
                            style={
                                {
                                    '--i': projectsHeading + 1 + idx,
                                } as CSSProperties
                            }
                        >
                            <div className='flex items-center gap-2'>
                                <span className='text-[15px] font-medium text-foreground/90'>
                                    {project.name}
                                </span>
                                <div className='touch-actions flex items-center gap-1 opacity-60 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100'>
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target='_blank'
                                            className='touch-target btn-press inline-flex items-center justify-center text-muted-foreground hover:text-foreground focus-visible:text-foreground'
                                            aria-label='GitHub'
                                        >
                                            <Icons.github className='size-3.5' />
                                        </Link>
                                    )}
                                    {project.url && (
                                        <Link
                                            href={project.url}
                                            target='_blank'
                                            className='touch-target btn-press inline-flex items-center justify-center text-muted-foreground hover:text-foreground focus-visible:text-foreground'
                                            aria-label='Visit'
                                        >
                                            <Icons.arrowUpRight className='size-3.5' />
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <p className='text-sm text-muted-foreground/80'>
                                {project.description}
                            </p>
                        </li>
                    ))}
                </ul>
                <Link
                    href='/projects'
                    className='group/link mt-2 inline-flex animate-enter items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground'
                    style={{ '--i': viewAll } as CSSProperties}
                >
                    <span className='link-underline'>View all projects</span>
                    <Icons.arrowUpRight className='size-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5' />
                </Link>
            </div>
        </section>
    )
}

export default Experience
