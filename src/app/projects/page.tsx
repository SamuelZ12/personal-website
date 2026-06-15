import { Icons } from '@/components/icons'
import { ModeToggle } from '@/components/mode-toggle'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { CONFIG } from '@/config'
import Link from 'next/link'
import type { CSSProperties } from 'react'

export const metadata = {
    title: 'Projects',
}

const Projects = () => {
    return (
        <div>
            {/* Breadcrumb header */}
            <div
                className='mb-8 flex animate-enter items-center justify-between px-4'
                style={{ '--i': 0 } as CSSProperties}
            >
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link
                                    href='/'
                                    className='link-underline text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground'
                                >
                                    Home
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Projects</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <ModeToggle />
            </div>

            {/* Minimal project list */}
            <div className='px-4'>
                <ul className='space-y-3'>
                    {CONFIG.projects.map((project, idx) => (
                        <li
                            key={idx}
                            className='group animate-enter'
                            style={{ '--i': idx + 1 } as CSSProperties}
                        >
                            <div className='flex items-center gap-2'>
                                <span className='text-[15px] font-medium text-foreground/90'>
                                    {project.name}
                                </span>
                                <div className='flex items-center gap-1 opacity-60 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100'>
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target='_blank'
                                            className='text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground'
                                            aria-label='GitHub'
                                        >
                                            <Icons.github className='size-3.5' />
                                        </Link>
                                    )}
                                    {project.url && (
                                        <Link
                                            href={project.url}
                                            target='_blank'
                                            className='text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground'
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
            </div>
        </div>
    )
}

export default Projects
