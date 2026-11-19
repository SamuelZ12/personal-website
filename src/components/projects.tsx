import { ProjectList } from '@/components/project-list'
import { CONFIG } from '@/config'

const Projects = () => (
    <section className='flex animate-enter flex-col gap-2 px-4'>
        <h2 className='text-muted-foreground'>Projects</h2>
        <ProjectList projects={CONFIG.projects} />
    </section>
)

export default Projects
