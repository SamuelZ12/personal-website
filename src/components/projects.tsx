import { ProjectList } from '@/components/project-list'
import { CONFIG } from '@/config'

const Projects = () => (
    <section className='mt-16 flex animate-enter flex-col gap-3 sm:mt-32'>
        <h2 className='font-medium'>projects</h2>
        <ProjectList projects={CONFIG.projects} />
    </section>
)

export default Projects
