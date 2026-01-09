import Experience from '@/components/experience'
import Header from '@/components/header'
import { CONFIG } from '@/config'

export default function Home() {
    return (
        <div className='flex flex-col gap-8'>
            <Header />

            {/* Bio section */}
            <div className='animate-slide-from-down-and-fade-2 px-4'>
                <p className='text-[15px] leading-relaxed text-muted-foreground/80'>
                    {CONFIG.description}
                </p>
            </div>

            {/* Unified Experience section */}
            <Experience />
        </div>
    )
}
