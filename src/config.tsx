import { Icons } from '@/components/icons'
import Link from 'next/link'

// A link inside the muted bio sentence. Ink alone is only about 2.3:1
// against the muted text around it, too quiet to say "link" on a phone, where
// nothing hovers, so the hairline is always there and hover only firms it up.
const BioLink = ({ href, children }: { href: string; children: string }) => (
    <Link
        href={href}
        target='_blank'
        className='touch-target text-foreground underline decoration-foreground/25 decoration-1 underline-offset-[3px] transition-[text-decoration-color] duration-150 hover:decoration-foreground/70 focus-visible:decoration-foreground/70 active:decoration-foreground/70'
    >
        {children}
    </Link>
)

type Config = {
    name: string
    title: string
    siteUrl: string
    socials: {
        name: string
        url: string
        icon: keyof typeof Icons
    }[]
    description: string | JSX.Element
    descriptionRaw: string
    projects: {
        name: string
        description: string
        url?: string
        github?: string
    }[]
}

export const CONFIG: Config = {
    name: 'Samuel Zhang',
    title: '',
    siteUrl: 'https://samuelzhang.ca/',
    socials: [
        {
            name: 'GitHub',
            url: 'https://github.com/samuelz12',
            icon: 'github',
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/samuelz12',
            icon: 'linkedin',
        },
        {
            name: 'X',
            url: 'https://x.com/samuelxzhang',
            icon: 'x',
        },
        {
            name: 'Email',
            url: 'mailto:zhangsamuel12@gmail.com',
            icon: 'email',
        },
    ],
    description: (
        <>
            CS at <BioLink href='https://uwaterloo.ca'>UWaterloo</BioLink>.
            Building with AI.
            <br />
            Previously at <BioLink href='https://openart.ai/'>OpenArt</BioLink>{' '}
            and <BioLink href='https://memories.ai'>Memories.ai</BioLink>.
            <br />
            Also into lifting, fencing, and poker.
        </>
    ),
    descriptionRaw: `CS at UWaterloo. Building with AI. Previously at OpenArt and Memories.ai. Also into lifting, fencing, and poker.`,
    projects: [
        {
            name: 'vidscribe',
            description: 'Lets AI agents watch videos: local transcripts and frames on Apple Silicon',
            github: 'https://github.com/SamuelZ12/vidscribe'
        },
        {
            name: 'OpenArt Arena',
            description: 'Expert-led leaderboard for AI image and video models on real creative work',
            url: 'https://openart.ai/arena'
        },
        {
            name: 'Internet2EgoExo',
            description: 'Turns internet video into egocentric and exocentric training data',
            github: 'https://github.com/Memories-ai-labs/Internet2EgoExo'
        },
        {
            name: 'LongCut',
            description: 'Transforms long-form YouTube videos into a structured learning workspace',
            url: 'https://www.longcut.ai',
            github: 'https://github.com/SamuelZ12/longcut'
        },
        {
            name: 'Reposeek',
            description: 'Search that finds coding agents an open-source repo worth building on',
            url: 'https://reposeek.ai'
        },
        {
            name: 'Screen Scribe',
            description: 'macOS app that converts screen captures into text (LaTeX, Markdown, etc.)',
            github: 'https://github.com/samuelz12/screen-scribe'
        }
    ],
}
