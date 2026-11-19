import Header from '@/components/header'
import Projects from '@/components/projects'
import { CONFIG } from '@/config'

export default function Home() {
    return (
        // Two rhythms, after jakub.kr: tight within a group (the name 16px
        // over the bio, a label 12px over its list) and wide between groups
        // (64px, 128px from sm up), so each section reads as its own block.
        <>
            <Header />

            <p className='animate-enter text-pretty leading-prose text-muted-foreground'>
                {CONFIG.description}
            </p>

            <Projects />
        </>
    )
}
