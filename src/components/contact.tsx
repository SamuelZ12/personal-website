import { CopyEmail } from '@/components/copy-email'
import { ModeToggle } from '@/components/mode-toggle'
import { CONFIG } from '@/config'
import Link from 'next/link'

// One quiet row closing every page: the socials as words on the left, the
// webring and the theme toggle on the right. Words rather than icons so nothing here
// needs a tooltip to be understood.
const socialLink =
    'touch-target link-underline inline-flex justify-center text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground active:text-foreground'

const Contact = () => {
    return (
        <footer className='mt-16 animate-enter sm:mt-32'>
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

                <div className='flex items-center gap-x-6'>
                    {/* Webring: one bare 16px mark, the theme toggle's twin. It
                        opens the ring's hub, where prev / next live. The ::before
                        pads the hit area to 44px tall without moving anything, and
                        stops short on the right so it never overlaps the toggle's. */}
                    <Link
                        href='https://cs.uwatering.com/#samuelzhang.ca'
                        target='_blank'
                        aria-label='CS Webring'
                        title='CS Webring'
                        className="btn-press relative grid size-4 place-items-center opacity-60 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-offset-4 active:opacity-100 before:absolute before:-inset-y-3.5 before:-left-3.5 before:-right-2.5 before:content-['']"
                    >
                        <img
                            src='https://cs.uwatering.com/icon.black.svg'
                            alt=''
                            className='size-4 dark:hidden'
                        />
                        <img
                            src='https://cs.uwatering.com/icon.white.svg'
                            alt=''
                            className='hidden size-4 dark:block'
                        />
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </footer>
    )
}

export default Contact
