/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "os.alipayobjects.com",
      "localhost",
      "veeta-bckt.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
