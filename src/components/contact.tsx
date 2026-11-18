import { CopyEmail } from '@/components/copy-email'
import { CONFIG } from '@/config'
import Link from 'next/link'

// One quiet row along the bottom edge of every page: the socials as words on
// the left, the webring on the right. Words rather than icons so nothing here
// needs a tooltip to be understood.
const socialLink =
    'touch-target link-underline inline-flex justify-center text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground active:text-foreground'

const Contact = () => {
    return (
        <footer className='animate-enter px-4 pb-10'>
            <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-2'>
                <nav
                    aria-label='Social'
                    className='flex flex-wrap items-center gap-x-5'
                >
                    {CONFIG.socials.map((social, idx) =>
                        social.icon === 'email' ? (
                            <CopyEmail
                                key={idx}
                                href={social.url}
                                label={social.name}
                                className={socialLink}
                            />
                        ) : (
                            <Link
                                key={idx}
                                href={social.url}
                                target='_blank'
                                className={socialLink}
                            >
                                {social.name}
                            </Link>
                        )
                    )}
                </nav>

                {/* Webring */}
                <div className='-mx-1.5 flex items-center text-muted-foreground'>
                    <Link
                        href='https://cs.uwatering.com/#samuelzhang.ca?nav=prev'
                        aria-label='Previous site in the CS webring'
                        className='touch-target flex h-10 w-6 items-center justify-center btn-press hover:text-foreground focus-visible:text-foreground active:text-foreground'
                    >
                        ←
                    </Link>
                    <Link
                        href='https://cs.uwatering.com/#samuelzhang.ca'
                        target='_blank'
                        className='touch-target flex h-10 w-6 items-center justify-center opacity-70 btn-press hover:opacity-100 focus-visible:opacity-100'
                    >
                        <img
                            src='https://cs.uwatering.com/icon.black.svg'
                            alt='CS Webring'
                            className='size-4 dark:hidden'
                        />
                        <img
                            src='https://cs.uwatering.com/icon.white.svg'
                            alt='CS Webring'
                            className='hidden size-4 dark:block'
                        />
                    </Link>
                    <Link
                        href='https://cs.uwatering.com/#samuelzhang.ca?nav=next'
                        aria-label='Next site in the CS webring'
                        className='touch-target flex h-10 w-6 items-center justify-center btn-press hover:text-foreground focus-visible:text-foreground active:text-foreground'
                    >
                        →
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Contact
