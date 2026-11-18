import { Icons } from '@/components/icons'
import { CONFIG } from '@/config'
import Link from 'next/link'

type Project = (typeof CONFIG.projects)[number]

// The whole row is the link. The project name is the anchor, and its ::after
// is stretched over the row, so the target is the full row (a 14px glyph was
// the only target before) while the accessible name stays just the project's
// name. The keyboard ring is drawn on that same ::after, so focus outlines the
// row that will be followed rather than the word inside it; the anchor's own
// ring (the a:focus-visible rule in globals.css) is switched off to match.
const rowLink =
    "font-medium focus-visible:outline-none after:absolute after:inset-0 after:rounded-md after:content-[''] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-ring"

// A second destination inside a row sits above the stretched link.
const rowAction =
    'touch-target btn-press relative z-10 inline-flex items-center justify-center text-muted-foreground hover:text-foreground focus-visible:text-foreground active:text-foreground'

const ProjectRow = ({ project }: { project: Project }) => {
    // Where the row goes: the live site if there is one, else the repo, else
    // an email asking for access to it.
    const href = project.url ?? project.github ?? project.email
    const viaEmail = !project.url && !project.github && !!project.email

    return (
        // The fill bleeds 12px into the column's 16px gutter, so the text
        // never moves. 6px of padding above and below replaces the 12px gap
        // the rows used to keep, and adjacent fills meet without a seam.
        // Pressing the row steps the fill up once, which is the only tap
        // feedback on touch, where there is no hover.
        <li className='group relative -mx-3 rounded-md px-3 py-1.5 transition-colors duration-150 hover:bg-secondary has-[[data-row-link]:active]:bg-accent'>
            <div className='flex items-center gap-2'>
                {viaEmail ? (
                    // Plain anchor: a mailto: must reach the browser's own
                    // handler (see copy-email.tsx)
                    <a href={href} data-row-link className={rowLink}>
                        {project.name}
                        <span className='sr-only'>, email for repo access</span>
                    </a>
                ) : (
                    href && (
                        <Link
                            href={href}
                            target='_blank'
                            data-row-link
                            className={rowLink}
                        >
                            {project.name}
                            {!project.url && (
                                <span className='sr-only'> on GitHub</span>
                            )}
                        </Link>
                    )
                )}
                {!href && <span className='font-medium'>{project.name}</span>}
                <div className='touch-actions flex items-center gap-1.5 text-muted-foreground opacity-60 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100'>
                    {/* With a live site the repo is a second link; without
                        one the row itself goes to the repo and the mark only
                        says so. */}
                    {project.github &&
                        (project.url ? (
                            <Link
                                href={project.github}
                                target='_blank'
                                className={rowAction}
                                aria-label={`${project.name} on GitHub`}
                            >
                                <Icons.github className='size-3.5' />
                            </Link>
                        ) : (
                            <Icons.github
                                className='size-3.5'
                                aria-hidden='true'
                            />
                        ))}
                    {project.url && (
                        <Icons.arrowUpRight
                            className='size-3.5'
                            aria-hidden='true'
                        />
                    )}
                    {viaEmail && (
                        <Icons.lock className='size-3.5' aria-hidden='true' />
                    )}
                </div>
                {/* What the lock means, in words beside it. It waits for
                    the row's hover or focus; on touch, where nothing hovers,
                    it is always there (.touch-actions). */}
                {viaEmail && (
                    <span
                        aria-hidden='true'
                        className='touch-actions -ml-0.5 text-muted-foreground opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100'
                    >
                        Email for repo
                    </span>
                )}
            </div>
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
