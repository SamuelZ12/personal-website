import { ModeToggle } from '@/components/mode-toggle'
import { CONFIG } from '@/config'

// The name is set like a section label (body size, medium), so it reads as
// the heading of the bio beneath it rather than as a banner above the page.
const Header = () => {
    return (
        <header className='mb-5 flex animate-enter items-start justify-between sm:mb-6'>
            <div>
                <h1 className='font-medium'>{CONFIG.name}</h1>
                {CONFIG.title && (
                    <p className='text-muted-foreground'>{CONFIG.title}</p>
                )}
            </div>
            {/* As tall as the name's line, so the glyph centres on it */}
            <div className='flex h-6 items-center'>
                <ModeToggle />
            </div>
        </header>
    )
}

export default Header
