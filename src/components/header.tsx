import { ModeToggle } from '@/components/mode-toggle'
import { CONFIG } from '@/config'

const Header = () => {
    return (
        <header className='flex w-full animate-slide-from-down-and-fade-1 items-start justify-between px-4'>
            <div className='space-y-1'>
                <h1 className='text-3xl font-bold tracking-tight'>
                    <span className='text-shimmer cursor-pointer'>
                        {CONFIG.name}
                    </span>
                </h1>
                {CONFIG.title && (
                    <p className='text-sm text-muted-foreground'>
                        {CONFIG.title}
                    </p>
                )}
                <p className='text-sm text-muted-foreground/80'>
                    Toronto, Canada
                </p>
            </div>
            <ModeToggle />
        </header>
    )
}

export default Header
