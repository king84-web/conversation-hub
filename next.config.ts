/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
          'C:/pagefile.sys',
          'C:/swapfile.sys',
          'C:/hiberfil.sys',
          'C:/DumpStack.log.tmp'
        ]
      };
    }
    return config;
  }
};

module.exports = nextConfig;
