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
        email?: string
        featured: boolean
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
            name: 'LongCut',
            description: 'Transforms long-form YouTube videos into a structured learning workspace',
            url: 'https://www.longcut.ai',
            featured: true,
            github: 'https://github.com/SamuelZ12/longcut'
        },
        {
            name: 'vidscribe',
            description: 'Lets AI agents watch videos: local transcripts and frames on Apple Silicon',
            featured: true,
            github: 'https://github.com/SamuelZ12/vidscribe'
        },
        {
            name: 'Reposeek',
            description: 'Repo discovery for coding agents. Find the repo to build on before you code',
            url: 'https://reposeek.ai',
            featured: false
        },
        {
            name: 'Screen Scribe',
            description: 'macOS app that converts screen captures into text (LaTeX, Markdown, etc.)',
            featured: false,
            github: 'https://github.com/samuelz12/screen-scribe'
        },
        {
            name: 'Deeppling',
            description: 'Rippling-style autonomous payroll agent. Won $2K at Unlink x Monad hackathon',
            featured: false,
            github: 'https://github.com/DerrickHa/deeppling'
        },
        {
            name: 'prtokens',
            description: 'See how much your PR costs in LLM tokens, attributed from agent transcripts',
            featured: false,
            github: 'https://github.com/SamuelZ12/prtokens'
        },
        {
            name: 'vm',
            description: 'Vim-like modal text editor in C++20 with syntax highlighting and macros',
            featured: false,
            email: 'mailto:zhangsamuel12@gmail.com?subject=vm%20repo%20access'
        },
        {
            name: '2048 AI',
            description: 'AI agent that plays the 2048 game using expectimax search algorithm',
            url: 'https://samuelz12.github.io/2048-ai/',
            featured: false,
            github: 'https://github.com/SamuelZ12/2048-ai'
        },
        {
            name: 'Swapify',
            description: 'University of Waterloo skill exchange platform (discontinued unfortunately)',
            url: 'https://swapifyy.vercel.app',
            featured: false,
            github: 'https://github.com/SamuelZ12/swapify'
        }
    ],
}
