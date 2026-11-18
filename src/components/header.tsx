import { ModeToggle } from '@/components/mode-toggle'
import { CONFIG } from '@/config'

const Header = () => {
    return (
        <header className='flex animate-enter items-start justify-between px-4'>
            <div>
                <h1 className='text-display'>{CONFIG.name}</h1>
                {CONFIG.title && (
                    <p className='text-muted-foreground'>{CONFIG.title}</p>
                )}
            </div>
            {/* As tall as the name's line, so the glyph centres on it */}
            <div className='flex h-10 items-center'>
                <ModeToggle />
            </div>
        </header>
    )
}

export default Header
