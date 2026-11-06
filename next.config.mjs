/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/olraa', destination: '/work/ecommerce', permanent: true },
      { source: '/work/olraa', destination: '/work/ecommerce', permanent: true },
    ];
  },
};
export default nextConfig;
