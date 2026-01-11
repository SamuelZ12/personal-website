import { Icons } from '@/components/icons'

type Config = {
    name: string
    avatar: string
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
        featured: boolean
    }[]
    experience: {
        work: {
            role: string
            company: string
            link?: string
        }[]
    }
}

export const CONFIG: Config = {
    name: 'Samuel Zhang',
    avatar: '/images/headshot.png',
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
            CS @ UWaterloo. Building with AI.
            <br />
            Also into lifting (275lbs bench), fencing (13th @ Nationals), and poker (-EV).
        </>
    ),
    descriptionRaw: `CS @ UWaterloo. Building with AI. Also into lifting (275lbs bench), fencing (13th @ Nationals), and poker (-EV).`,
    projects: [
        {
            name: 'LongCut',
            description: 'Transforms long-form YouTube videos into a structured learning workspace',
            url: 'https://www.longcut.ai',
            featured: true,
            github: 'https://github.com/SamuelZ12/longcut'
        },
        {
            name: 'Screen Scribe',
            description: 'macOS app that converts screen captures into text (LaTeX, Markdown, etc.)',
            featured: true,
            github: 'https://github.com/samuelz12/screen-scribe'
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
    experience: {
        work: [
            {
                role: 'Engineering',
                company: 'Memories.ai',
                link: 'https://memories.ai'
            },
            {
                role: 'Undergraduate Research Assistant',
                company: 'University of Waterloo',
                link: 'https://uwaterloo.ca'
            },
            {
                role: 'Software Engineer',
                company: 'TechInsights',
                link: 'https://techinsights.com'
            }
        ]
    }
}
