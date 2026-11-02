/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/olraa', destination: '/work/olraa', permanent: true },
    ];
  },
};
export default nextConfig;
