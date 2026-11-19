import { ProjectList } from '@/components/project-list'
import { CONFIG } from '@/config'

const Projects = () => (
    <section className='mt-32 flex animate-enter flex-col gap-3'>
        <h2 className='font-medium'>projects</h2>
        <ProjectList projects={CONFIG.projects} />
    </section>
)

export default Projects
