/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig


// next.config.js
module.exports = {
  nextConfig,
  serverOptions: {
    // Explicitly set the server to listen on IPv4
    host: '127.0.0.1',
    // Set the port number you want to use
    port: 3850, // Change this to your preferred port
  },
};