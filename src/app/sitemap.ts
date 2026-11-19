import { CONFIG } from '@/config'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [{ url: new URL(CONFIG.siteUrl).origin }]
}
