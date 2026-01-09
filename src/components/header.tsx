import { CONFIG } from '@/config'

const Header = () => {
    return (
        <header className='flex w-full animate-slide-from-down-and-fade-1 flex-col gap-6 px-4'>
            <div className='space-y-1'>
                <h1 className='text-3xl font-bold tracking-tight'>
                    <span className='bg-gradient-to-r from-foreground to-foreground bg-clip-text transition-all duration-500 hover:from-blue-500 hover:to-cyan-400 hover:text-transparent'>
                        {CONFIG.name}
                    </span>
                </h1>
                {CONFIG.title && (
                    <p className='text-sm text-muted-foreground'>
                        {CONFIG.title}
                    </p>
                )}
                <p className='flex items-center gap-2 text-sm text-muted-foreground/80'>
                    <span className='relative flex h-2 w-2'>
                        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
                        <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
                    </span>
                    Toronto, Canada
                </p>
            </div>
        </header>
    )
}

export default Header
