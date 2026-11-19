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
    "font-medium focus-visible:outline-none after:absolute after:inset-0 after:rounded-md after:content-[''] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-ring"

const ProjectRow = ({ project }: { project: Project }) => {
    // Where the row goes: the live site if there is one, else the repo.
    const href = project.url ?? project.github

    return (
        // The fill bleeds 12px into the column's 16px gutter, so the text
        // never moves. 6px of padding above and below replaces the 12px gap
        // the rows used to keep, and adjacent fills meet without a seam.
        // Pressing the row steps the fill up once, which is the only tap
        // feedback on touch, where there is no hover.
        <li className='relative -mx-3 rounded-md px-3 py-1.5 transition-colors duration-150 hover:bg-secondary has-[[data-row-link]:active]:bg-accent'>
            {href ? (
                <Link
                    href={href}
                    target='_blank'
                    data-row-link
                    className={rowLink}
                >
                    {project.name}
                    {!project.url && <span className='sr-only'> on GitHub</span>}
                </Link>
            ) : (
                <span className='font-medium'>{project.name}</span>
            )}
            <p className='text-pretty text-muted-foreground'>
                {project.description}
            </p>
        </li>
    )
}

// -my-1.5 takes back the first and last row's padding, so the list sits where
// it did when the rows had no padding of their own.
export const ProjectList = ({ projects }: { projects: Project[] }) => (
    <ul className='-my-1.5'>
        {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
        ))}
    </ul>
)
