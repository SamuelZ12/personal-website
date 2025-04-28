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
            👋 Hi! I&apos;m a Math student at the University of Waterloo
            and I&apos;m interested in blockchain and AI. When I'm not studying or coding, 
            I enjoy lifting weights, reading, fencing, running, and playing poker. 
            I&apos;m always excited to meet new people, so feel free to reach out!
        </>
    ),
    descriptionRaw: `Hi! I'm a Math student at the University of Waterloo and I'm interested in blockchain and AI. When I'm not studying or coding, I enjoy lifting weights, reading, fencing, running, and playing poker. I'm always excited to meet new people, so feel free to reach out!`,
    projects: [
        {
            name: 'LaTeX OCR',
            description: 'Mac app that converts screen captures of mathematical equations to LaTeX code',
            url: 'https://github.com/SamuelZ12/LaTeX-OCR',
            tags: [
                { name: 'Swift', icon: 'swift' },
                { name: 'Gemini', icon: 'gemini' },
            ],
            featured: true,
            github: 'https://github.com/SamuelZ12/LaTeX-OCR'
        },
        {
            name: '2048 AI',
            description: 'AI agent that plays the 2048 game using expectimax search algorithm',
            url: 'https://samuelz12.github.io/2048-ai/',
            tags: [
                { name: 'JavaScript', icon: 'javascript' },
                { name: 'CSS', icon: 'css' },
                { name: 'HTML', icon: 'html' },
                { name: 'Web Workers', icon: 'gear' },
            ],
            featured: true,
            github: 'https://github.com/SamuelZ12/2048-ai'
        },
        {
            name: 'Swapify',
            description: 'University of Waterloo skill exchange platform',
            url: 'https://swapifyy.vercel.app',
            tags: [
                { name: 'Next.js', icon: 'next' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'Supabase', icon: 'supabase' },
                { name: 'shadcn/ui', icon: 'shadcn' },
            ],
            featured: true,
            github: 'https://github.com/SamuelZ12/swapify'
        },
        {
            name: 'TalkTuahTherapist',
            description: 'AI therapist encrypted on Ethereum blockchain',
            url: 'https://talktuahtherapist.co',
            tags: [
                { name: 'Next.js', icon: 'next' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'OpenAI', icon: 'openai' },
                { name: 'Google Cloud', icon: 'googlecloud' }
            ],
            featured: true,
            github: 'https://github.com/Brucewang15/TalkTuahTherapist'
        }
    ],
    workExperience: {
        positions: [
            {
                company: 'TechInsights',
                role: 'Software Engineer Intern',
                duration: 'Jan 2025 - Apr 2025',
                description: (
                    <>
                        Built AI Search using RAG
                    </>
                ),
                link: 'https://techinsights.com',
                tags: [
                    { name: 'AWS', icon: 'aws' },
                    { name: 'Python', icon: 'python' },
                    { name: 'LLMs', icon: 'llm' },
                    { name: 'SQL', icon: 'sql' },
                    { name: 'Docker', icon: 'docker' },
                ]
            },
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
                    { name: 'Docker', icon: 'docker' },
                ]
            },
            {
                company: 'University of Toronto',
                role: 'Research Assistant',
                duration: 'Aug 2022 - Dec 2022',
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
