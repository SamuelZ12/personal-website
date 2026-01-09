import { ModeToggle } from '@/components/mode-toggle'
import Project from '@/components/project'
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

            <div className='animate-slide-from-down-and-fade-2 px-4'>
                <div className='flex items-center gap-3'>
                    <h1 className='text-3xl font-bold tracking-tight'>
                        All Projects
                    </h1>
                    <div className='h-px flex-1 bg-gradient-to-r from-border to-transparent' />
                </div>
            </div>

            <div className='animate-slide-from-down-and-fade-3 space-y-3 px-4 pt-8'>
                {CONFIG.projects.map((project, idx) => (
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
        </div>
    )
}

export default Projects
