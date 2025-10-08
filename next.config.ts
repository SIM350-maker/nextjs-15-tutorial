import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {

      domains: ['th.bing.com'],

    remotePatterns:[
      {
        hostname:'encrypted-tbn0.gstatic.com',
        protocol:"https",
        port:"",
      },
      {
        hostname:'lh3.googleusercontent.com',
        protocol:"https",
        port:"",
      }
    ],
  },
};

export default nextConfig;
