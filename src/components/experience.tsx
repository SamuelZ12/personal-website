import { Icons } from '@/components/icons'
import { CONFIG } from '@/config'
import Link from 'next/link'

const Experience = () => {
    return (
        <section className='animate-slide-from-down-and-fade-3 space-y-8 px-4'>
            {/* Work subsection */}
            <div className='space-y-2'>
                <h3 className='text-xs font-medium uppercase tracking-wider text-muted-foreground/60'>
                    Work
                </h3>
                <ul className='space-y-1.5'>
                    {CONFIG.experience.work.map((item, idx) => (
                        <li key={idx} className='group flex items-center gap-1.5'>
                            <span className='text-[15px] text-foreground/90'>
                                {item.role}
                            </span>
                            <span className='text-muted-foreground/60'>@</span>
                            {item.link ? (
                                <Link
                                    href={item.link}
                                    target='_blank'
                                    className='inline-flex items-center gap-1 text-[15px] text-muted-foreground transition-colors duration-200 hover:text-foreground'
                                >
                                    {item.company}
                                    <Icons.arrowUpRight className='size-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100' />
                                </Link>
                            ) : (
                                <span className='text-[15px] text-muted-foreground'>
                                    {item.company}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Projects subsection */}
            <div className='space-y-2'>
                <h3 className='text-xs font-medium uppercase tracking-wider text-muted-foreground/60'>
                    Projects
                </h3>
                <ul className='space-y-3'>
                    {CONFIG.projects
                        .filter((p) => p.featured)
                        .map((project, idx) => (
                            <li key={idx} className='group'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-[15px] font-medium text-foreground/90'>
                                        {project.name}
                                    </span>
                                    <div className='flex items-center gap-1 opacity-60 transition-opacity duration-200 group-hover:opacity-100'>
                                        {project.github && (
                                            <Link
                                                href={project.github}
                                                target='_blank'
                                                className='text-muted-foreground transition-colors duration-200 hover:text-foreground'
                                                aria-label='GitHub'
                                            >
                                                <Icons.github className='size-3.5' />
                                            </Link>
                                        )}
                                        <Link
                                            href={project.url}
                                            target='_blank'
                                            className='text-muted-foreground transition-colors duration-200 hover:text-foreground'
                                            aria-label='Visit'
                                        >
                                            <Icons.arrowUpRight className='size-3.5' />
                                        </Link>
                                    </div>
                                </div>
                                <p className='text-sm text-muted-foreground/70'>
                                    {project.description}
                                </p>
                            </li>
                        ))}
                </ul>
                <Link
                    href='/projects'
                    className='group mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground'
                >
                    View all projects
                    <Icons.arrowUpRight className='size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                </Link>
            </div>
        </section>
    )
}

export default Experience
