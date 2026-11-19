import { CONFIG } from '@/config'

// The name is set like a section label (body size, medium) and sits 16px over
// the bio, so it reads as the bio's heading rather than a banner.
const Header = () => {
    return (
        <header className='mb-4 animate-enter'>
            <h1 className='font-medium'>{CONFIG.name}</h1>
        </header>
    )
}

export default Header
