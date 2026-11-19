import Header from '@/components/header'
import Projects from '@/components/projects'
import { CONFIG } from '@/config'

export default function Home() {
    return (
        // Two rhythms: a label sits 24px above what it names (the name over
        // the bio, "Projects" over its list), and a section's gap (40px, 48px
        // from sm up) stands between one group and the next. The gap is kept
        // to about twice the space between project rows: enough to read as a
        // break, small enough that the whole page fits a laptop window
        // without scrolling.
        <>
            <Header />

            <p className='animate-enter text-pretty leading-prose text-muted-foreground'>
                {CONFIG.description}
            </p>

            <Projects />
        </>
    )
}
