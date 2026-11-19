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

// The bio, written once as text and links. The page renders it with
// BioLinks; the meta description takes the plain text; llms.txt takes it as
// markdown, links kept. One source, so the three always say the same thing.
const BIO: (string | { text: string; href: string })[] = [
    'currently ',
    { text: 'bumming', href: 'https://www.noahpinion.blog/p/bumbition' },
    ' around. i studied cs at ',
    { text: 'uwaterloo', href: 'https://uwaterloo.ca' },
    '. i was the youngest engineer at ',
    { text: 'openart', href: 'https://openart.ai/' },
    ' and ',
    { text: 'memories', href: 'https://memories.ai' },
    '.',
]

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
    descriptionMarkdown: string
    projects: {
        name: string
        description: string
        url?: string
        github?: string
    }[]
}

export const CONFIG: Config = {
    name: 'samuel zhang',
    title: '',
    siteUrl: 'https://samuelzhang.ca/',
    socials: [
        {
            name: 'github',
            url: 'https://github.com/samuelz12',
            icon: 'github',
        },
        {
            name: 'linkedin',
            url: 'https://linkedin.com/in/samuelz12',
            icon: 'linkedin',
        },
        {
            name: 'x',
            url: 'https://x.com/samuelxzhang',
            icon: 'x',
        },
        {
            name: 'email',
            url: 'mailto:zhangsamuel12@gmail.com',
            icon: 'email',
        },
    ],
    description: (
        <>
            {BIO.map((part, i) =>
                typeof part === 'string' ? (
                    part
                ) : (
                    <BioLink key={i} href={part.href}>
                        {part.text}
                    </BioLink>
                )
            )}
        </>
    ),
    descriptionRaw: BIO.map((part) =>
        typeof part === 'string' ? part : part.text
    ).join(''),
    descriptionMarkdown: BIO.map((part) =>
        typeof part === 'string' ? part : `[${part.text}](${part.href})`
    ).join(''),
    projects: [
        {
            name: 'vidscribe',
            description: 'lets ai agents watch videos: local transcripts and frames on apple silicon',
            github: 'https://github.com/SamuelZ12/vidscribe'
        },
        {
            name: 'openart arena',
            description: 'expert-led leaderboard for ai image and video models on real creative work',
            url: 'https://openart.ai/arena'
        },
        {
            name: 'internet2egoexo',
            description: 'turns internet video into egocentric and exocentric training data',
            github: 'https://github.com/Memories-ai-labs/Internet2EgoExo'
        },
        {
            name: 'longcut',
            description: 'transforms long-form youtube videos into a structured learning workspace',
            url: 'https://www.longcut.ai',
            github: 'https://github.com/SamuelZ12/longcut'
        }
    ],
}
