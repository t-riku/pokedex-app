/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   // remotePatterns: [
  //   //   {
  //   //     // protocol: "https",
  //   //     // hostname: "images/raw.githubusercontent.com",
  //   //     // port: "",
  //   //     // pathname: "/account123/**",
  //   //     domains: ["assets.example.com"],
  //   //   },
  //   // ],
  //   domains: ["assets.example.com"],
  // },
  images: {
    domains: ["assets.example.com"],
  },
};

module.exports = nextConfig;
