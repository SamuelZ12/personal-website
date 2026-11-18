import Experience from '@/components/experience'
import Header from '@/components/header'
import { CONFIG } from '@/config'

export default function Home() {
    return (
        // Two rhythms: 20px inside a group, 40px between groups, so the name
        // and bio read as one unit and each section stands apart from it.
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <Header />

                {/* Bio section */}
                <div className='animate-enter px-4'>
                    <p className='text-pretty text-muted-foreground'>
                        {CONFIG.description}
                    </p>
                </div>
            </div>

            {/* Unified Experience section */}
            <Experience />
        </div>
    )
}
