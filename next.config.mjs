/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.68.101:3000",
  ],
};

export default nextConfig;
