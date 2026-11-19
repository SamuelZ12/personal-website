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
    "focus-visible:outline-none after:absolute after:inset-0 after:rounded-md after:content-[''] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-ring"

const ProjectRow = ({ project }: { project: Project }) => {
    // Where the row goes: the live site if there is one, else the repo.
    const href = project.url ?? project.github

    return (
        // The fill bleeds 16px into the column's 24px gutter, so the text
        // never moves. The space between rows is the rows' own padding, so
        // the whole of it is clickable: 20px between rows on a phone, 28px
        // from sm up (12px each side plus the list's 4px gap), where the
        // hover fills need a sliver of paper between them. Pressing the row
        // steps the fill up once, which is the only tap feedback on touch,
        // where there is no hover.
        <li className='relative -mx-4 rounded-md px-4 py-2.5 transition-colors duration-150 hover:bg-secondary has-[[data-row-link]:active]:bg-accent sm:py-3'>
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
                <span>{project.name}</span>
            )}
            <p className='text-pretty text-muted-foreground'>
                {project.description}
            </p>
        </li>
    )
}

// The negative margins take back the outer rows' padding, so the list starts
// one row gap below its label (20px, then 28px) and ends on its last line of
// text, leaving the section gap below it exact.
export const ProjectList = ({ projects }: { projects: Project[] }) => (
    <ul className='-my-2.5 flex flex-col sm:-mb-3 sm:mt-0 sm:gap-1'>
        {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
        ))}
    </ul>
)
