/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'res.cloudinary.com',
      'scontent.fmex30-1.fna.fbcdn.net',
      'alfabetajuega.com',
      'cf.shopee.com.mx'
    ],
  }
}

module.exports = nextConfig
