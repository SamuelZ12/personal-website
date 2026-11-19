import { CONFIG } from '@/config'
import Link from 'next/link'

type Project = (typeof CONFIG.projects)[number]

// The whole row is the link, and the only one: there is no second destination
// and no icon to aim at. The project name is the anchor, and its ::after is
// stretched over the row, so the target is the full row while the accessible
// name stays just the project's name. The keyboard ring is drawn on that same
// ::after, so focus outlines the row that will be followed rather than the
// word inside it; the anchor's own ring (the a:focus-visible rule in
// globals.css) is switched off to match.
const rowLink =
    "focus-visible:outline-none after:absolute after:inset-0 after:rounded-lg after:content-[''] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-ring"

const ProjectRow = ({ project }: { project: Project }) => {
    // Where the row goes: the live site if there is one, else the repo.
    const href = project.url ?? project.github

    return (
        // The fill bleeds 8px into the column's gutter, so the text never
        // moves, and leaves 12px of paper between neighbouring rows' fills.
        // Pressing the row steps the fill up once, which is the only tap
        // feedback on touch, where there is no hover.
        <li className='py-1.5'>
            <div className='relative -mx-2 rounded-lg p-2 transition-colors duration-150 hover:bg-secondary has-[[data-row-link]:active]:bg-accent'>
                {href ? (
                    <Link
                        href={href}
                        target='_blank'
                        data-row-link
                        className={rowLink}
                    >
                        {project.name}
                        {!project.url && (
                            <span className='sr-only'> on github</span>
                        )}
                    </Link>
                ) : (
                    <span>{project.name}</span>
                )}
                <p className='text-pretty text-muted-foreground'>
                    {project.description}
                </p>
            </div>
        </li>
    )
}

// The negative margins take back the outer rows' padding, so the list starts
// one row gap below its label (20px, then 28px) and ends on its last line of
// text, leaving the section gap below it exact.
export const ProjectList = ({ projects }: { projects: Project[] }) => (
    <ul className='flex flex-col'>
        {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
        ))}
    </ul>
)
