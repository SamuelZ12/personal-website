import { CONFIG } from '@/config'
import { THEME_COLOR } from '@/lib/theme-color'
import { getInitials } from '@/lib/utils'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: CONFIG.name,
        short_name: getInitials(CONFIG.name),
        description: CONFIG.descriptionRaw,
        start_url: '/',
        display: 'standalone',
        background_color: THEME_COLOR.light,
        theme_color: THEME_COLOR.light,
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
    }
}
