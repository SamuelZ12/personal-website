import Experience from '@/components/experience'
import Header from '@/components/header'
import { CONFIG } from '@/config'
import type { CSSProperties } from 'react'

export default function Home() {
    return (
        <div className='flex flex-col gap-8'>
            <Header />

            {/* Bio section */}
            <div
                className='animate-enter px-4'
                style={{ '--i': 1 } as CSSProperties}
            >
                <p className='text-pretty text-[15px] leading-relaxed text-muted-foreground/80'>
                    {CONFIG.description}
                </p>
            </div>

            {/* Unified Experience section */}
            <Experience />
        </div>
    )
}
