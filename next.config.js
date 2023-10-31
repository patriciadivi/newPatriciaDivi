/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'api.github.com/users/',
      'gist.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
