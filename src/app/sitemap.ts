import { CONFIG } from '@/config'

export default async function sitemap() {
    const url = new URL(CONFIG.siteUrl).origin

    return [{ url, lastModified: new Date().toISOString() }]
}
