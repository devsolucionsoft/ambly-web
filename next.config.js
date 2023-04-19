/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app-ambly.s3.amazonaws.com",
        port: "",
        pathname: "/static/uploads/**",
      },
    ],
    domains: ["app-ambly.s3.amazonaws.com"],
  },
}

module.exports = nextConfig
