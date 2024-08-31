/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['openweathermap.org'],

        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            pathname: '**',
          },
        ],
      },
}



module.exports = nextConfig