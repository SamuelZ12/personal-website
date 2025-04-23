import { Icons } from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CONFIG } from '@/config'
import { cn, getInitials } from '@/lib/utils'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='flex w-full animate-slide-from-down-and-fade-1 flex-col gap-6 px-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-semibold'>{CONFIG.name}</h1>
                    <p className='mt-1 text-sm text-muted-foreground'>
                        {CONFIG.title}
                    </p>
                    <p className='mt-1 text-sm text-muted-foreground'>
                        📍 Toronto, Canada
                    </p>
                </div>
                <Avatar className='size-20'>
                    <AvatarImage src={CONFIG.avatar} asChild>
                        <Image
                            src={CONFIG.avatar}
                            alt={CONFIG.name + ' avatar'}
                            width={80}
                            height={80}
                            priority={true}
                        />
                    </AvatarImage>
                    <AvatarFallback>
                        {getInitials(CONFIG.name)}
                    </AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}

export default Header