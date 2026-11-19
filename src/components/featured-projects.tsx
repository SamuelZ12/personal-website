import { Icons } from '@/components/icons'
import { ProjectList } from '@/components/project-list'
import { CONFIG } from '@/config'
import Link from 'next/link'

const FeaturedProjects = () => {
    const featured = CONFIG.projects.filter((p) => p.featured)
    return (
        <section className='flex animate-enter flex-col gap-2 px-4'>
            <h2 className='text-muted-foreground'>Projects</h2>
            <ProjectList projects={featured} />
            <Link
                href='/projects'
                className='group/link inline-flex items-center gap-1.5 self-start text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground active:text-foreground'
            >
                <span className='link-underline'>View all projects</span>
                <Icons.arrowUpRight className='size-3.5' />
            </Link>
        </section>
    )
}

export default FeaturedProjects
