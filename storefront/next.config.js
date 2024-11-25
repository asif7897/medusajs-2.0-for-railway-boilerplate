// Import the checkEnvVariables module
const checkEnvVariables = require("./check-env-variables");

// Run the function to check environment variables
checkEnvVariables();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL?.replace('https://', ''),
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "seasky2004.s3.ap-south-1.amazonaws.com", // Add this line
      },
      ...(process.env.NEXT_PUBLIC_MINIO_ENDPOINT ? [
        {
          protocol: "https",
          hostname: process.env.NEXT_PUBLIC_MINIO_ENDPOINT,
        },
      ] : []),
    ],
  },
  serverRuntimeConfig: {
    port: process.env.PORT || 3000
  }
}

module.exports = nextConfig;
