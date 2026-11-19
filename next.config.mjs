/** @type {import('next').NextConfig} */
const nextConfig = {
    // The project list used to have a page of its own; it lives on the home
    // page now, so old links and search results land there instead of on 404.
    async redirects() {
        return [{ source: '/projects', destination: '/', permanent: true }]
    },
}

export default nextConfig
