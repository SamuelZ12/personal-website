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

export const metadata = {
    title: 'Projects',
}

const Projects = () => {
    return (
        <div>
            {/* Breadcrumb header */}
            <div className='flex animate-slide-from-down-and-fade-1 items-start justify-between px-4'>
                <Breadcrumb className='mb-4'>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link
                                    href='/'
                                    className='text-muted-foreground transition-colors duration-300 hover:text-foreground'
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
            <div className='animate-slide-from-down-and-fade-2 px-4'>
                <ul className='space-y-3'>
                    {CONFIG.projects.map((project, idx) => (
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
            </div>
        </div>
    )
}

export default Projects
