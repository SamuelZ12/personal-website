import { CONFIG } from '@/config'
import { getInitials } from '@/lib/utils'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: CONFIG.name,
        short_name: getInitials(CONFIG.name),
        description: CONFIG.descriptionRaw,
        start_url: '/',
        display: 'standalone',
        background_color: '#f7f6f4',
        theme_color: '#f7f6f4',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
