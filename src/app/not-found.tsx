import Link from 'next/link'

export const metadata = {
    title: 'not found',
}

// Replaces Next.js's default grey 404 with one dry line in the bio's voice and
// one way back. It renders inside the shared layout shell, so the Contact
// footer and the entrance fade come for free.
export default function NotFound() {
    return (
        <>
            <h1 className='mb-4 animate-enter font-medium'>404</h1>

            <p className='animate-enter text-pretty leading-prose text-muted-foreground'>
                this page doesn&rsquo;t exist. the odds were never great.
            </p>

            <Link
                href='/'
                className='group/link mt-6 inline-flex animate-enter items-center gap-1.5 text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground active:text-foreground'
            >
                <span aria-hidden='true'>&larr;</span>
                <span className='link-underline'>back home</span>
            </Link>
        </>
    )
}
