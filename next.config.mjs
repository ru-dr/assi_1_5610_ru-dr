/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "instructure-uploads.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/indeks/:path*",
        destination: "https://indeks.bl0q.app/:path*",
      },
      {
        source: "/api/:path*",
        destination: "http://localhost:4000/api/:path*",
      },
      {
        source: "/lab5/:path*",
        destination: "http://localhost:4000/lab5/:path*",
      },
    ];
  },
};

export default nextConfig;
