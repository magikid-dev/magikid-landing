/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export statique servi par Caddy sur le VPS (magikid.online)
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
