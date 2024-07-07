/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: process.env.BUCKET_URL,
                protocol: 'https',
                port: ''
            }
        ]
    }
};

export default nextConfig;
