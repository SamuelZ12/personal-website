import {
    ArrowUpRight,
    ExternalLink,
    LucideProps,
    Star,
    Sun,
} from 'lucide-react'

export const Icons = {
    github: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            {...props}
        >
            <path
                fill='currentColor'
                d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z'
            ></path>
        </svg>
    ),
    linkedin: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            {...props}
        >
            <path
                fill='currentColor'
                d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z'
            ></path>
        </svg>
    ),
    x: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            {...props}
        >
            <path
                fill='currentColor'
                d='M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z'
            ></path>
        </svg>
    ),
    upwork: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            {...props}
        >
            <title>Upwork icon</title>
            <path d='M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z' />
        </svg>
    ),
    sun: Sun,
    moon: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            {...props}
        >
            <path
                fill='currentColor'
                d='M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.484.484 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.484.484 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.484.484 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.484.484 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.484.484 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.484.484 0 0 1-.272-.273z'
            />
            <path
                fill='currentColor'
                d='M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10'
            />
        </svg>
    ),
    email: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 20 20'
            {...props}
        >
            <path
                fill='currentColor'
                fillRule='evenodd'
                d='m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12zM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914zM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833zM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5z'
            />
        </svg>
    ),
    hiInterns: (props: LucideProps) => (
        <svg viewBox='0 0 34 32' fill='none' {...props}>
            <path
                d='M13.138 31.816a1.723 1.723 0 01-1.724-1.725v-6.897a1.725 1.725 0 113.449 0v6.899a1.725 1.725 0 01-1.725 1.723zm7.561 0a1.724 1.724 0 01-1.725-1.723v-6.9a1.723 1.723 0 113.449 0v6.9a1.724 1.724 0 01-1.724 1.723zm7.416-14.453l.008-.011-2.91-1.852c.097-.152 2.415-3.717 6.76-3.717a1.725 1.725 0 110 3.449c-2.424 0-3.8 2.044-3.858 2.131zM6.042 18.83c-.282 0-.56-.07-.81-.203-.158-.084-3.892-2.12-4.227-6.454a1.725 1.725 0 113.439-.266c.187 2.427 2.388 3.664 2.41 3.676a1.724 1.724 0 01-.812 3.247z'
                fill='#312e81'
            />
            <path
                d='M12.441 6.232c.158-.641.118-1.702-.248-2.251-.752-1.129-1.692-1.693-.94-3.198C12.513-1.74 8.305 2.27 7.992 6.7c-.247 3.479 2.489 1.815 3.674.941.338-.248.578-.607.678-1.014l.096-.394z'
                fill='#23E7A1'
            />
            <path
                d='M21.471 26.642h-8.97a6.657 6.657 0 01-6.657-6.657v-8.971A6.657 6.657 0 0112.5 4.356h8.971a6.655 6.655 0 016.657 6.658v8.971a6.657 6.657 0 01-6.657 6.657z'
                fill='#23E7A1'
            />
            <path
                d='M20.534 16.767a3.211 3.211 0 100-6.423 3.211 3.211 0 000 6.423z'
                fill='#fff'
                stroke='#312e81'
                strokeWidth={0.231}
                strokeMiterlimit={10}
            />
            <path
                d='M20.534 14.555a.999.999 0 100-1.998.999.999 0 000 1.998z'
                fill='#060201'
            />
            <path
                d='M13.436 16.767a3.211 3.211 0 100-6.423 3.211 3.211 0 000 6.423z'
                fill='#fff'
                stroke='#312e81'
                strokeWidth={0.231}
                strokeMiterlimit={10}
            />
            <path
                d='M13.437 14.555a1 1 0 100-1.998 1 1 0 000 1.998z'
                fill='#060201'
            />
            <path
                d='M19.501 18.997c-1.643 1.992-5.21 1.14-5.244 1.13a.435.435 0 00-.21.845 8.93 8.93 0 001.99.22c1.332 0 3.035-.307 4.135-1.642a.435.435 0 00-.67-.553z'
                fill='#312e81'
            />
        </svg>
    ),
    externalLink: ExternalLink,
    react: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='-11.5 -10.23174 23 20.46348'
            {...props}
        >
            <circle r={2.05} fill='#61dafb' />
            <g stroke='#61dafb' fill='none'>
                <ellipse rx={11} ry={4.2} />
                <ellipse rx={11} ry={4.2} transform='rotate(60)' />
                <ellipse rx={11} ry={4.2} transform='rotate(120)' />
            </g>
        </svg>
    ),
    astro: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={85}
            height={107}
            viewBox='0 0 85 107'
            {...props}
        >
            <path d='M27.59 91.136c-4.834-4.418-6.246-13.703-4.232-20.429 3.492 4.241 8.33 5.584 13.342 6.343 7.737 1.17 15.336.732 22.523-2.804.822-.405 1.582-.943 2.48-1.489.675 1.957.85 3.932.615 5.943-.573 4.896-3.01 8.678-6.885 11.545-1.55 1.147-3.19 2.172-4.79 3.253-4.917 3.323-6.247 7.22-4.4 12.888.044.139.084.277.183.614-2.51-1.124-4.344-2.76-5.742-4.911-1.475-2.27-2.177-4.78-2.214-7.498-.019-1.322-.019-2.656-.197-3.96-.434-3.178-1.926-4.601-4.737-4.683-2.884-.084-5.166 1.699-5.771 4.507-.046.216-.113.429-.18.68l.004.001z' />
            <path
                d='M27.59 91.136c-4.834-4.418-6.246-13.703-4.232-20.429 3.492 4.241 8.33 5.584 13.342 6.343 7.737 1.17 15.336.732 22.523-2.804.822-.405 1.582-.943 2.48-1.489.675 1.957.85 3.932.615 5.943-.573 4.896-3.01 8.678-6.885 11.545-1.55 1.147-3.19 2.172-4.79 3.253-4.917 3.323-6.247 7.22-4.4 12.888.044.139.084.277.183.614-2.51-1.124-4.344-2.76-5.742-4.911-1.475-2.27-2.177-4.78-2.214-7.498-.019-1.322-.019-2.656-.197-3.96-.434-3.178-1.926-4.601-4.737-4.683-2.884-.084-5.166 1.699-5.771 4.507-.046.216-.113.429-.18.68l.004.001z'
                fill='url(#paint0_linear_1_59)'
            />
            <path
                d='M0 69.587s14.314-6.973 28.668-6.973L39.49 29.12c.405-1.62 1.588-2.72 2.924-2.72 1.335 0 2.518 1.1 2.924 2.72L56.16 62.614c17 0 28.668 6.973 28.668 6.973S60.514 3.352 60.467 3.219C59.769 1.261 58.591 0 57.003 0H27.827c-1.588 0-2.718 1.261-3.464 3.22C24.311 3.35 0 69.586 0 69.586z'
                className='fill-primary'
            />
            <defs>
                <linearGradient
                    id='paint0_linear_1_59'
                    x1={22.4702}
                    y1={107}
                    x2={69.1451}
                    y2={84.9468}
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#D83333' />
                    <stop offset={1} stopColor='#F041FF' />
                </linearGradient>
            </defs>
        </svg>
    ),
    typescript: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='800px'
            height='800px'
            viewBox='0 0 30 30'
            {...props}
        >
            <path
                d='M23.827 8.243a4.424 4.424 0 012.223 1.281 5.853 5.853 0 01.852 1.143c.011.045-1.534 1.083-2.471 1.662-.034.023-.169-.124-.322-.35a2.014 2.014 0 00-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 00.153.666c.237.49.677.784 2.059 1.383 2.544 1.095 3.636 1.817 4.31 2.843a5.158 5.158 0 01.416 4.333 4.764 4.764 0 01-3.932 2.815 10.9 10.9 0 01-2.708-.028 6.531 6.531 0 01-3.616-1.884 6.278 6.278 0 01-.926-1.371 2.655 2.655 0 01.327-.208c.158-.09.756-.434 1.32-.761l1.024-.6.214.312a4.771 4.771 0 001.35 1.292 3.3 3.3 0 003.458-.175 1.545 1.545 0 00.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 01-3.349-2.055 4.687 4.687 0 01-.976-1.777 7.116 7.116 0 01-.062-2.268 4.332 4.332 0 013.644-3.374 9 9 0 012.691.084zm-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a13.986 13.986 0 01.04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017z'
                fill='#007acc'
            />
        </svg>
    ),
    tailwindcss: (props: LucideProps) => (
        <svg viewBox='0 0 54 31' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z'
                fill='#38bdf8'
            />
        </svg>
    ),
    algolia: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            shapeRendering='geometricPrecision'
            textRendering='geometricPrecision'
            imageRendering='optimizeQuality'
            fillRule='evenodd'
            clipRule='evenodd'
            viewBox='0 0 512 512.346'
            {...props}
        >
            <path
                fill='#003DFF'
                fillRule='nonzero'
                d='M256.001 0C116.099 0 2.048 112.803.027 252.232c-2.053 141.606 112.839 258.945 254.458 259.764 43.739.253 85.859-10.44 123.269-30.768 3.647-1.981 4.211-6.996 1.107-9.748l-23.955-21.236c-4.868-4.315-11.798-5.535-17.785-2.988-26.111 11.112-54.486 16.785-83.723 16.427-114.436-1.4-206.894-96.614-205.069-211.043C50.13 139.658 142.597 48.301 256.001 48.301l207.698.004v369.163l-117.84-104.702c-3.813-3.389-9.659-2.726-12.732 1.344-18.916 25.043-49.724 40.624-83.95 38.259-47.474-3.279-85.939-41.497-89.501-88.948-4.249-56.604 40.605-104.024 96.325-104.024 50.393 0 91.891 38.787 96.225 88.073.385 4.384 2.367 8.474 5.66 11.395l30.687 27.205c3.484 3.086 9.01 1.195 9.866-3.378 2.214-11.831 2.989-24.164 2.121-36.81-4.943-72.076-63.322-130.06-135.43-134.504-82.671-5.095-151.783 59.571-153.98 140.642-2.142 79 62.589 147.108 141.596 148.852 32.987.728 63.558-9.645 88.269-27.612l153.97 136.492c6.602 5.85 17.015 1.164 17.015-7.656V9.717c0-5.366-4.348-9.715-9.714-9.715L256.001 0z'
            />
        </svg>
    ),
    preact: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={2162}
            height={2500}
            viewBox='0 0 256 296'
            preserveAspectRatio='xMidYMid'
            {...props}
        >
            <path
                fill='#673AB8'
                d='M128 0l128 73.9v147.8l-128 73.9L0 221.7V73.9z'
            />
            <path
                d='M34.865 220.478c17.016 21.78 71.095 5.185 122.15-34.704 51.055-39.888 80.24-88.345 63.224-110.126-17.017-21.78-71.095-5.184-122.15 34.704-51.055 39.89-80.24 88.346-63.224 110.126zm7.27-5.68c-5.644-7.222-3.178-21.402 7.573-39.253 11.322-18.797 30.541-39.548 54.06-57.923 23.52-18.375 48.303-32.004 69.281-38.442 19.922-6.113 34.277-5.075 39.92 2.148 5.644 7.223 3.178 21.403-7.573 39.254-11.322 18.797-30.541 39.547-54.06 57.923-23.52 18.375-48.304 32.004-69.281 38.441-19.922 6.114-34.277 5.076-39.92-2.147z'
                fill='#FFF'
            />
            <path
                d='M220.239 220.478c17.017-21.78-12.169-70.237-63.224-110.126C105.96 70.464 51.88 53.868 34.865 75.648c-17.017 21.78 12.169 70.238 63.224 110.126 51.055 39.889 105.133 56.485 122.15 34.704zm-7.27-5.68c-5.643 7.224-19.998 8.262-39.92 2.148-20.978-6.437-45.761-20.066-69.28-38.441-23.52-18.376-42.74-39.126-54.06-57.923-10.752-17.851-13.218-32.03-7.575-39.254 5.644-7.223 19.999-8.261 39.92-2.148 20.978 6.438 45.762 20.067 69.281 38.442 23.52 18.375 42.739 39.126 54.06 57.923 10.752 17.85 13.218 32.03 7.574 39.254z'
                fill='#FFF'
            />
            <path
                d='M127.552 167.667c10.827 0 19.603-8.777 19.603-19.604 0-10.826-8.776-19.603-19.603-19.603-10.827 0-19.604 8.777-19.604 19.603 0 10.827 8.777 19.604 19.604 19.604z'
                fill='#FFF'
            />
        </svg>
    ),
    remix: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            shapeRendering='geometricPrecision'
            textRendering='geometricPrecision'
            imageRendering='optimizeQuality'
            fillRule='evenodd'
            clipRule='evenodd'
            viewBox='0 0 445 512.13'
            {...props}
        >
            <path
                fill='currentColor'
                fillRule='nonzero'
                d='M0 512.13v-79.52h144.76c24.18 0 29.43 17.93 29.43 28.62v50.9H0zm425.45-117.19c4.61 59.17 4.61 86.91 4.61 117.19H293.15c0-6.6.12-12.63.24-18.75.37-19.01.76-38.84-2.32-78.89-4.08-58.63-29.32-71.66-75.75-71.66H0V236.15h221.84c58.64 0 87.96-17.84 87.96-65.07 0-41.53-29.32-66.69-87.96-66.69H0V0h246.27C379.03 0 445 62.7 445 162.86c0 74.92-46.42 123.78-109.14 131.92 52.94 10.59 83.89 40.72 89.59 100.16z'
            />
        </svg>
    ),
    clerk: (props: LucideProps) => (
        <svg viewBox='0 0 18 18' fill='none' aria-hidden='true' {...props}>
            <ellipse
                cx={8.99999}
                cy={9}
                rx={2.81249}
                ry={2.8125}
                className='fill-[#654bf6]'
            />
            <path
                d='M14.067 15.66c.24.238.216.634-.066.823A8.958 8.958 0 019 18a8.958 8.958 0 01-5.002-1.517.533.533 0 01-.066-.824l2.055-2.055a.608.608 0 01.708-.096A5.04 5.04 0 009 14.062c.83 0 1.614-.2 2.305-.554a.608.608 0 01.708.096l2.055 2.055z'
                className='fill-[#654bf6]'
            />
            <path
                d='M14.002 1.517a.533.533 0 01.066.824l-2.055 2.055a.608.608 0 01-.708.096 5.062 5.062 0 00-6.814 6.814c.12.233.09.521-.095.707l-2.055 2.055a.534.534 0 01-.824-.066A9 9 0 0114.002 1.517z'
                className='fill-[#654bf6] opacity-50'
            />
        </svg>
    ),
    drizzle: (props: LucideProps) => (
        <svg viewBox='0 0 72 72' {...props}>
            <rect
                width={5.25365}
                height={22.2834}
                rx={2.62683}
                transform='matrix(.87303 .48767 -.49721 .86763 16.08 30.33)'
                className='fill-[#a7a401] dark:fill-[#c5f74f]'
            />
            <rect
                width={5.25365}
                height={22.2834}
                rx={2.62683}
                transform='matrix(.87303 .48767 -.49721 .86763 34.33 19)'
                className='fill-[#a7a401] dark:fill-[#c5f74f]'
            />
            <rect
                width={5.25365}
                height={22.2834}
                rx={2.62683}
                transform='matrix(.87303 .48767 -.49721 .86763 62.413 19)'
                className='fill-[#a7a401] dark:fill-[#c5f74f]'
            />
            <rect
                width={5.25365}
                height={22.2834}
                rx={2.62683}
                transform='matrix(.87303 .48767 -.49721 .86763 44.156 30.33)'
                className='fill-[#a7a401] dark:fill-[#c5f74f]'
            />
        </svg>
    ),
    saasStellar: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 28 56'
            fill='none'
            aria-label='saasstellar logo'
            className='w-7'
            {...props}
        >
            <path
                fill='url(#saasstellar-a)'
                d='M15.027 8.592c.178.166 15.444 14.589 1.833 25.66C5.443 43.54 9.38 52.505 9.457 52.676c-6.6-10.631-1.383-18.105 4.913-24.76 6.263-6.618.72-19.18.658-19.323z'
            />
            <path
                fill='url(#saasstellar-b)'
                d='M24.331 19.428c.135.158 9.801 13.433-2.803 21.591C10.955 47.863 13.466 55.848 13.516 56c-4.62-9.648.357-15.706 6.485-20.6 6.92-5.524 4.37-15.845 4.33-15.972z'
            />
            <path
                fill='url(#saasstellar-c)'
                d='M2.706 0c.233.15 20.336 13.134 7.417 28.342C-.714 41.099 5.567 50.318 5.688 50.493c-9.61-10.533-5.333-19.978.323-28.73C11.636 13.06 2.806.148 2.706 0z'
            />
            <defs>
                <linearGradient
                    id='saasstellar-a'
                    x1={13.383}
                    x2={15.253}
                    y1={8.659}
                    y2={52.425}
                    gradientUnits='userSpaceOnUse'
                >
                    <stop
                        stopColor='currentColor'
                        className='text-[rgb(234,88,12)]'
                    />
                    <stop
                        offset={1}
                        stopColor='currentColor'
                        className='text-rose-600'
                    />
                </linearGradient>
                <linearGradient
                    id='saasstellar-b'
                    x1={21.192}
                    x2={18.763}
                    y1={19.221}
                    y2={56.342}
                    gradientUnits='userSpaceOnUse'
                >
                    <stop
                        stopColor='currentColor'
                        className='text-[rgb(234,88,12)]'
                    />
                    <stop
                        offset={1}
                        stopColor='currentColor'
                        className='text-rose-600'
                    />
                </linearGradient>
                <linearGradient
                    id='saasstellar-c'
                    x1={0.88}
                    x2={12.033}
                    y1={0.421}
                    y2={49.038}
                    gradientUnits='userSpaceOnUse'
                >
                    <stop
                        stopColor='currentColor'
                        className='text-[rgb(234,88,12)]'
                    />
                    <stop
                        offset={1}
                        stopColor='currentColor'
                        className='text-rose-600'
                    />
                </linearGradient>
            </defs>
        </svg>
    ),
    shadcn: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 256 256'
            className='h-6 w-6'
            {...props}
        >
            <path fill='none' d='M0 0H256V256H0z' />
            <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={16}
                d='M208 128L128 208'
            />
            <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={16}
                d='M192 40L40 192'
            />
        </svg>
    ),
    gsonImageLabelizer: (props: LucideProps) => (
        <svg
            width={200}
            height={200}
            viewBox='-2.4 -2.4 28.8 28.8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            stroke='#000'
            {...props}
        >
            <rect
                x={-2.4}
                y={-2.4}
                width={28.8}
                height={28.8}
                rx={14.4}
                fill='url(#b)'
                stroke='none'
            />
            <path
                d='M20 6H4m8-2v2M8.096 9.98c.479 1.574 1.412 4.118 4.048 6.414m0 0C13.726 17.773 15.92 19.062 19 20m-6.856-3.606C15.239 13.246 17.069 8.77 17.069 6m-4.925 10.394C10.21 18.36 7.784 19.808 5 20'
                stroke='url(#a)'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <defs>
                <linearGradient id='a' x1='0%' x2='100%' y1='0%' y2='0%'>
                    <stop offset='0%' stopColor='#94a3b8' />
                    <stop offset='100%' stopColor='#f8fafc' />
                </linearGradient>
                <linearGradient id='b' x1='0%' x2='100%' y1='0%' y2='0%'>
                    <stop offset='0%' stopColor='#020617' />
                    <stop offset='100%' stopColor='#0f172a' />
                </linearGradient>
            </defs>
        </svg>
    ),
    next: (props: LucideProps) => (
        <svg
            viewBox='0 0 512 512'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit={2}
            {...props}
        >
            <g transform='translate(.722 .64) scale(6.375)'>
                <circle cx={40} cy={40} r={40} />
                <path
                    d='M66.448 70.009L30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40.116 40.116 0 004.226-3.255z'
                    fill='url(#prefix___Linear1)'
                    fillRule='nonzero'
                />
                <path
                    fill='url(#prefix___Linear2)'
                    d='M51.111 24h5.333v32h-5.333z'
                />
            </g>
            <defs>
                <linearGradient
                    id='prefix___Linear1'
                    x1={0}
                    y1={0}
                    x2={1}
                    y2={0}
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='rotate(51.103 -29.93 76.555) scale(25.1269)'
                >
                    <stop offset={0} stopColor='#fff' />
                    <stop offset={1} stopColor='#fff' stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id='prefix___Linear2'
                    x1={0}
                    y1={0}
                    x2={1}
                    y2={0}
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='rotate(90.218 14.934 38.787) scale(23.50017)'
                >
                    <stop offset={0} stopColor='#fff' />
                    <stop offset={1} stopColor='#fff' stopOpacity={0} />
                </linearGradient>
            </defs>
        </svg>
    ),
    graphQL: (props: LucideProps) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            height={64}
            width={64}
            viewBox='0 0 29.999 30'
            fill='#e10098'
            {...props}
        >
            <path d='M4.08 22.864l-1.1-.636L15.248.98l1.1.636z' />
            <path d='M2.727 20.53h24.538v1.272H2.727z' />
            <path d='M15.486 28.332L3.213 21.246l.636-1.1 12.273 7.086zm10.662-18.47L13.874 2.777l.636-1.1 12.273 7.086z' />
            <path d='M3.852 9.858l-.636-1.1L15.5 1.67l.636 1.1z' />
            <path d='M25.922 22.864l-12.27-21.25 1.1-.636 12.27 21.25zM3.7 7.914h1.272v14.172H3.7zm21.328 0H26.3v14.172h-1.272z' />
            <path d='M15.27 27.793l-.555-.962 10.675-6.163.555.962z' />
            <path d='M27.985 22.5a2.68 2.68 0 01-3.654.981 2.68 2.68 0 01-.981-3.654 2.68 2.68 0 013.654-.981 2.665 2.665 0 01.98 3.654M6.642 10.174a2.68 2.68 0 01-3.654.981A2.68 2.68 0 012.007 7.5a2.68 2.68 0 013.654-.981 2.68 2.68 0 01.981 3.654M2.015 22.5a2.68 2.68 0 01.981-3.654 2.68 2.68 0 013.654.981 2.68 2.68 0 01-.981 3.654c-1.287.735-2.92.3-3.654-.98m21.343-12.326a2.68 2.68 0 01.981-3.654 2.68 2.68 0 013.654.981 2.68 2.68 0 01-.981 3.654 2.68 2.68 0 01-3.654-.981M15 30a2.674 2.674 0 112.674-2.673A2.68 2.68 0 0115 30m0-24.652a2.67 2.67 0 01-2.674-2.674 2.67 2.67 0 115.347 0A2.67 2.67 0 0115 5.347' />
        </svg>
    ),
    arrowUpRight: ArrowUpRight,
    star: Star,
    purng: (props: LucideProps) => (
        <svg viewBox='0 0 128 128' {...props}>
            <linearGradient
                id='a'
                gradientUnits='userSpaceOnUse'
                x1='63.565'
                x2='63.565'
                y1='114.7'
                y2='18.8'
            >
                <stop offset='0' stopColor='#222' />
                <stop offset='.4007' stopColor='#000' />
            </linearGradient>
            <linearGradient
                id='b'
                gradientUnits='userSpaceOnUse'
                x1='63.565'
                x2='63.565'
                y1='114.7'
                y2='18.8'
            >
                <stop offset='0' stopColor='#71717A' />
                <stop offset='.4007' stopColor='#71717A' />
            </linearGradient>
            <path
                d='m72.25 122.57c-11.93 0-29.57-.34-44.92-3.27-20.5-3.91-22.03-11.96-21.84-19.87.16-6.73 3.24-29.26 6.28-38.48 4.6-13.94 11.63-27.8 15.91-33.76 5.87-8.17 20.75-21.3 35.71-21.75h.14c1.98 0 3.95 1.3 5.13 3.39l5.85 10.32c1.4 2.48 1.37 5.53-.08 7.97-1.19 2-4.65 2.54-4.68 2.55l-2.75.4 1.85 2.09c-.01 0 .61.98-.85 3.1-1.3 1.89-3.83 2.8-7.72 2.8-3.65 0-7.81-.83-11.15-1.49-.2-.04-.41-.06-.62-.06-1.24 0-2.52.69-3.68 1.99-1.5 1.67-6.23 8.46-4.31 25.67.95 8.54-1.88 16.23-1.91 16.31l-1.19 3.18 3.15-1.26c.03-.02 4.83-1.9 11.43-1.9h.7l.45-.54c.14-.17 13.94-16.48 31.85-16.48 11.7 0 22.9 4.74 29.96 12.68 4.98 5.6 7.31 12.23 6.55 18.66-2.94 24.98-26.51 27.68-36.51 27.68-1.4 0-3.04.01-4.87.03-2.33.02-4.98.04-7.88.04-11.87 0-29.42-.34-44.64-3.24-8.97-1.71-14.79-4.3-17.82-7.91-2.61-3.11-2.88-6.86-2.8-10.45.16-6.66 3.2-28.94 6.21-38.04 4.39-13.3 11.43-27.4 15.71-33.35 5.7-7.94 20.12-20.69 34.53-21.12zm0-3h-.18c-15.81.47-31.1 14.31-36.88 22.37-4.41 6.15-11.54 20.3-16.12 34.16-3.02 9.16-6.19 31.77-6.36 38.91-.21 8.73 1.85 17.33 23.06 21.38 15.09 2.88 32.47 3.3 45.2 3.3 5.17 0 9.57-.07 12.74-.07 17 0 35.39-6.79 38-29 2-17-16-33.02-38-33.02-18.85 0-33 17.02-33 17.02-7 0-12 2-12 2s3-8 2-17c-1.99-17.94 3.4-25.99 6.51-25.99.11 0 .22.01.33.03 3.46.69 7.66 1.52 11.44 1.52s7.14-.83 8.95-3.45c2.25-3.25.74-4.95.74-4.95s4.17-.59 5.76-3.27c1.73-2.91 1.77-6.53.1-9.48l-5.86-10.32c-1.33-2.35-3.74-4.14-6.43-4.14z'
                fill='url(#a)'
            />
            <g fill='url(#b)'>
                <path d='m63.54 6.95c1.42 0 2.92 1.03 3.83 2.63l5.85 10.32c1.14 2.01 1.11 4.49-.06 6.47-.57.96-2.5 1.66-3.6 1.83l-5.53.78 3.44 3.88c-.01.2-.12.71-.7 1.55-.99 1.43-3.17 2.16-6.49 2.16-10.4 0-2.5.7-4.5 2.1-6.5 1.4-1.6-3.2-2.4-5.4-2.4-3.1 0-5.9 1.5-8.4 4.5-2.5 3.7-3.7 6.5-3.7 10.4z' />
                <path d='m62.78 18.52c-2.51-.47-5.5-.57-7.83.61-2.89 1.47-3.9 5.28-2.22 8.05 2.52 4.13 9.33 4.53 13.64 4.36 1.92-.08 1.93-3.08 0-3-3.11.12-6.99-.04-9.7-1.69-1.94-1.19-2.6-3.91-.21-5.12 1.54-.79 3.85-.62 5.51-.31 1.9.34 2.71-2.55.81-2.9z' />
                <path d='m36.2 82.74c-4.8 6.99-6.04 14.02-4.34 22.3.39 1.89 3.28 1.09 2.89-.8-1.54-7.52-.32-13.64 4.04-19.99 1.1-1.59-1.5-3.09-2.59-1.51z' />
                <path d='m47.77 34.91c-2.22-.32-5.39-3.01-6.71-5.85-.4-.86-.23-2.08-1.8-2.17-2.17-.12-.58 4.24.16 5.31 2.03 2.91 4.78 4.54 8.38 4.8 1.93.14 1.95-1.81-.03-2.09z' />
                <path d='m53.55 92.4c2.52 10.41 11.96 18.17 22.37 19.58 10.05 1.36 26.93-.97 31.88-11.72.8-1.74-1.78-3.27-2.59-1.51-4.53 9.85-20.7 11.71-29.78 10.15-8.89-1.53-16.83-8.37-18.98-17.29-.46-1.88-3.35-1.09-2.9.79z' />
            </g>
        </svg>
    ),
    neon: (props: LucideProps) => (
        <svg
            width='26px'
            height='26px'
            viewBox='0 0 58 58'
            fill='none'
            {...props}
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 10C0 4.47715 4.47705 0 9.99976 0H47.9989C53.5216 0 57.9986 4.47715 57.9986 10V42.3189C57.9986 48.0326 50.7684 50.5124 47.2618 46.0014L36.2991 31.8988V49C36.2991 53.9706 32.2698 58 27.2993 58H9.99976C4.47705 58 0 53.5228 0 48V10ZM9.99976 8C8.89522 8 7.99981 8.89543 7.99981 10V48C7.99981 49.1046 8.89522 50 9.99976 50H27.5993C28.1516 50 28.2993 49.5523 28.2993 49V26.0673C28.2993 20.3536 35.5295 17.8738 39.0361 22.3848L49.9988 36.4874V2C49.9988 0.89543 50.1034 8 48.9988 8H9.99976Z'
                fill='#12FFF7'
            ></path>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 10C0 4.47715 4.47705 0 9.99976 0H47.9989C53.5216 0 57.9986 4.47715 57.9986 10V42.3189C57.9986 48.0326 50.7684 50.5124 47.2618 46.0014L36.2991 31.8988V49C36.2991 53.9706 32.2698 58 27.2993 58H9.99976C4.47705 58 0 53.5228 0 48V10ZM9.99976 8C8.89522 8 7.99981 8.89543 7.99981 10V48C7.99981 49.1046 8.89522 50 9.99976 50H27.5993C28.1516 50 28.2993 49.5523 28.2993 49V26.0673C28.2993 20.3536 35.5295 17.8738 39.0361 22.3848L49.9988 36.4874V10C49.9988 8.89543 50.1034 8 48.9988 8H9.99976Z'
                fill='url(#paint0_linear_10558_11777)'
            ></path>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 10C0 4.47715 4.47705 0 9.99976 0H47.9989C53.5216 0 57.9986 4.47715 57.9986 10V42.3189C57.9986 48.0326 50.7684 50.5124 47.2618 46.0014L36.2991 31.8988V49C36.2991 53.9706 32.2698 58 27.2993 58H9.99976C4.47705 58 0 53.5228 0 48V10ZM9.99976 8C8.89522 8 7.99981 8.89543 7.99981 10V48C7.99981 49.1046 8.89522 50 9.99976 50H27.5993C28.1516 50 28.2993 49.5523 28.2993 49V26.0673C28.2993 20.3536 35.5295 17.8738 39.0361 22.3848L49.9988 36.4874V10C49.9988 8.89543 50.1034 8 48.9988 8H9.99976Z'
                fill='url(#paint1_linear_10558_11777)'
            ></path>
            <path
                d='M48.0003 0C53.523 0 58 4.47715 58 10V42.3189C58 48.0326 50.7699 50.5124 47.2633 46.0014L36.3006 31.8988V49C36.3006 53.9706 32.2712 58 27.3008 58C27.8531 58 28.3008 57.5523 28.3008 57V26.0673C28.3008 20.3536 35.5309 17.8738 39.0375 22.3848L50.0002 36.4874V2C50.0002 0.89543 49.1048 0 48.0003 0Z'
                fill='#B9FFB3'
            ></path>
            <defs>
                <linearGradient
                    id='paint0_linear_10558_11777'
                    x1='57.9986'
                    y1='58'
                    x2='6.99848'
                    y2='0.00123034'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#B9FFB3'></stop>
                    <stop offset='1' stopColor='#B9FFB3' stopOpacity='0'></stop>
                </linearGradient>
                <linearGradient
                    id='paint1_linear_10558_11777'
                    x1='57.9986'
                    y1='58'
                    x2='23.5492'
                    y2='44.6006'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#1A1A1A' stopOpacity='0.9'></stop>
                    <stop offset='1' stopColor='#1A1A1A' stopOpacity='0'></stop>
                </linearGradient>
            </defs>
        </svg>
    ),
    python: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 255"
            {...props}
        >
            <defs>
                <linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a">
                    <stop stopColor="#387EB8" offset="0%" />
                    <stop stopColor="#366994" offset="100%" />
                </linearGradient>
                <linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b">
                    <stop stopColor="#FFE052" offset="0%" />
                    <stop stopColor="#FFC331" offset="100%" />
                </linearGradient>
            </defs>
            <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#a)" />
            <path d="M128.757 254.126c17.017-21.78-12.169-70.237-63.224-110.126C105.96 70.464 51.88 53.868 34.865 75.648c-17.017 21.78 12.169 70.238 63.224 110.126 51.055 39.889 105.133 56.485 122.15 34.704zm-7.27-5.68c-5.643 7.224-19.998 8.262-39.92 2.148-20.978-6.437-45.761-20.066-69.28-38.441-23.52-18.376-42.74-39.126-54.06-57.923-10.752-17.851-13.218-32.03-7.575-39.254 5.644-7.223 19.999-8.261 39.92-2.148 20.978 6.438 45.762 20.067 69.281 38.442 23.52 18.375 42.739 39.126 54.06 57.923 10.752 17.85 13.218 32.03 7.574 39.254z" fill="url(#b)" />
        </svg>
    ),
    bitcoin: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
            />
        </svg>
    ),
}
