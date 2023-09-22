/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "images.pexels.com", "images.unsplash.com", "plus.unsplash.com", "contentstatic.techgig.com", "matterdesign.com.au"],
    // loader: "",
    // path: "",
  },
}

module.exports = nextConfig
