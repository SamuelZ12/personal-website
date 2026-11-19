import { Icons } from '@/components/icons'
import Link from 'next/link'

// A link inside the muted bio sentence. At rest it is marked by ink alone,
// the same way a project's name stands out from its description; the
// hairline only appears on hover, focus, or press, as it does under the
// footer links. It is a real text underline held transparent rather than the
// footer's .link-underline, so it sits where the font puts it, close under
// the word instead of out in the space between two lines of prose.
const BioLink = ({ href, children }: { href: string; children: string }) => (
    <Link
        href={href}
        target='_blank'
        className='touch-target text-foreground underline decoration-transparent decoration-1 [text-underline-position:from-font] transition-[text-decoration-color] duration-150 hover:decoration-foreground focus-visible:decoration-foreground active:decoration-foreground'
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
            Currently{' '}
            <BioLink href='https://www.noahpinion.blog/p/bumbition'>
                bumming
            </BioLink>{' '}
            around. I studied CS at{' '}
            <BioLink href='https://uwaterloo.ca'>UWaterloo</BioLink>. I was the
            youngest engineer at{' '}
            <BioLink href='https://openart.ai/'>OpenArt</BioLink> and{' '}
            <BioLink href='https://memories.ai'>Memories</BioLink>.
        </>
    ),
    descriptionRaw: `Currently bumming around. I studied CS at UWaterloo. I was the youngest engineer at OpenArt and Memories.`,
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
        }
    ],
}
