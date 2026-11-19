import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

export const metadata = {
    title: 'Not found',
}

// The one page on the site that wasn't written in Samuel's voice: an unmatched
// URL used to fall through to Next.js's grey "404 | This page could not be
// found." This owns that surface instead — one dry line in the bio's poker/EV
// register, one way back. It renders inside the shared layout shell, so the
// Contact footer and the entrance fade come for free.
export default function NotFound() {
    return (
        <>
            <div className='mb-5 flex animate-enter items-start justify-between sm:mb-6'>
                <h1 className='font-medium'>404</h1>
                <div className='flex h-6 items-center'>
                    <ModeToggle />
                </div>
            </div>

            <p className='animate-enter text-pretty leading-prose text-muted-foreground'>
                This page doesn&rsquo;t exist. The odds were never great.
            </p>

            <Link
                href='/'
                className='group/link mt-6 inline-flex animate-enter items-center gap-1.5 text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground active:text-foreground'
            >
                <span aria-hidden='true'>&larr;</span>
                <span className='link-underline'>Back home</span>
            </Link>
        </>
    )
}
