/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allows for external images
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            }
        ]
    }
}

module.exports = nextConfig
