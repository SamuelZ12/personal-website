import { ModeToggle } from '@/components/mode-toggle'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ProjectList } from '@/components/project-list'
import { CONFIG } from '@/config'
import Link from 'next/link'

export const metadata = {
    title: 'Projects',
}

const Projects = () => {
    return (
        <div>
            {/* Breadcrumb header */}
            <div className='mb-8 flex animate-enter items-center justify-between px-4'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link
                                    href='/'
                                    className='link-underline text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground active:text-foreground'
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
            <div className='animate-enter px-4'>
                <ProjectList projects={CONFIG.projects} />
            </div>
        </div>
    )
}

export default Projects
