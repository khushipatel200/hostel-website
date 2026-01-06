/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Make sure there is a slash / before your name
  basePath: '/REPLACE_WITH_YOUR_REPO_NAME', 
  images: {
    unoptimized: true,
  },
}

export default nextConfig;