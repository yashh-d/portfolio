/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true
  },
  webpack: (config) => {
    // Handle video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|avi)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });
    
    return config;
  }
};

module.exports = nextConfig; 