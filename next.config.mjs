/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'source.unsplash.com'
      },
      {
        hostname: 'i.pinimg.com'
      },
      {
        hostname: '**.ftcdn.net'
      },
    ]
  }
};

export default nextConfig;
