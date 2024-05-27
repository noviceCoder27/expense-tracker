/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '443',
        pathname: '/photo-1605106702734-205df224ecce',
      },
    ],
  }
};

export default nextConfig;
