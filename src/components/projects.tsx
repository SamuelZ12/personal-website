import { ProjectList } from '@/components/project-list'
import { CONFIG } from '@/config'

const Projects = () => (
    <section className='mt-10 animate-enter sm:mt-12'>
        <h2 className='mb-5 font-medium sm:mb-4'>Projects</h2>
        <ProjectList projects={CONFIG.projects} />
    </section>
)

export default Projects
