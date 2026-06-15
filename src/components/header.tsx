import { LocalTime } from '@/components/local-time'
import { ModeToggle } from '@/components/mode-toggle'
import { CONFIG } from '@/config'
import type { CSSProperties } from 'react'

const Header = () => {
    return (
        <header
            className='flex w-full animate-enter items-start justify-between px-4'
            style={{ '--i': 0 } as CSSProperties}
        >
            <div className='space-y-1'>
                <h1 className='text-3xl font-bold tracking-tight'>
                    {CONFIG.name}
                </h1>
                {CONFIG.title && (
                    <p className='text-sm text-muted-foreground'>
                        {CONFIG.title}
                    </p>
                )}
                <p className='text-sm text-muted-foreground/80'>
                    Toronto
                    <LocalTime />
                </p>
            </div>
            <ModeToggle />
        </header>
    )
}

export default Header
