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
        <div className='flex flex-col gap-5'>
            <div className='flex animate-enter items-start justify-between px-4'>
                <h1 className='text-display'>404</h1>
                <div className='flex h-10 items-center'>
                    <ModeToggle />
                </div>
            </div>

            <div className='px-4'>
                <p className='animate-enter text-pretty text-muted-foreground'>
                    This page doesn&rsquo;t exist. The odds were never great.
                </p>

                <Link
                    href='/'
                    className='group/link mt-6 inline-flex animate-enter items-center gap-1.5 text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground'
                >
                    <span
                        aria-hidden='true'
                        className='inline-block transition-transform duration-200 group-hover/link:-translate-x-0.5 group-focus-visible/link:-translate-x-0.5'
                    >
                        &larr;
                    </span>
                    <span className='link-underline'>Back home</span>
                </Link>
            </div>
        </div>
    )
}
