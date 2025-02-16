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
        icon?: keyof typeof Icons
        image?: string
        description: string
        url: string
        tags: {
            name: string
            icon: keyof typeof Icons
        }[]
        github?: string
        featured: boolean
        testimonial?: string
    }[]
    workExperience?: {
        positions?: {
            company: string
            role: string
            duration: string
            description: string | JSX.Element
            link?: string
            tags: {
                name: string
                icon: keyof typeof Icons
            }[]
        }[]
    }
}

export const CONFIG: Config = {
    name: 'Samuel Zhang',
    avatar: '/images/headshot.png',
    title: 'Software Engineer',
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
            url: 'https://x.com/zhangsamuel12',
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
            Hi! I&apos;m a first year Math student at the University of Waterloo
            and I&apos;m interested in blockchain and AI. I also like lifting
            weights, reading, and fencing. I&apos;m always excited to meet new
            people so feel free to reach out!
        </>
    ),
    descriptionRaw: `Hi! I'm a first year Math student at the University of Waterloo and I'm interested in blockchain and AI. I also like lifting weights, reading, and fencing. I'm always excited to meet new people so feel free to reach out!`,
    projects: [
        {
            name: 'Portfolio Website',
            description: 'Built with Next.js, TypeScript, and Tailwind CSS',
            url: 'https://samuelzhang.com',
            tags: [
                { name: 'Next.js', icon: 'next' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'shadcn/ui', icon: 'shadcn' },
            ],
            featured: true,
            github: 'https://github.com/SamuelZ12/personal-website'
        },
        {
            name: 'TalkTuahTherapist',
            description: 'An AI therapist encrypted on Ethereum blockchain',
            url: 'https://talktuahtherapist.co',
            tags: [
                { name: 'Next.js', icon: 'next' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' }
            ],
            featured: true,
            github: 'https://github.com/Brucewang15/TalkTuahTherapist'
        }
    ],
    workExperience: {
        positions: [
            {
                company: 'Dappd',
                role: 'Software Engineer Intern',
                duration: 'May 2024 - Aug 2024',
                description: (
                    <>
                        Built a crypto trading bot and a client dashboard
                    </>
                ),
                link: 'https://dappd.net',
                tags: [
                    { name: 'Python', icon: 'python' },
                    { name: 'Next.js', icon: 'next' },
                    { name: 'TypeScript', icon: 'typescript' },
                    { name: 'Tailwind CSS', icon: 'tailwindcss' },
                    { name: 'Docker', icon: 'github' },
                ]
            },
            {
                company: 'University of Toronto',
                role: 'Research Assistant',
                duration: 'Sep 2022 - Dec 2022',
                description: (
                    <>
                        Bitcoin research under Prof. Anwar Husain
                    </>
                ),
                link: 'https://utoronto.ca',
                tags: [
                    { name: 'Bitcoin', icon: 'bitcoin' },
                ]
            }
        ]
    }
}
