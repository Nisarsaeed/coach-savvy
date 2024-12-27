/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'imagedelivery.net',
            port: '',
            search: '',
          },
        ],
      },
      async middleware() {
        return [
          {
            source: "/ace/:path*",
            destination: "/",
          },
        ];
      },
};

export default nextConfig;
