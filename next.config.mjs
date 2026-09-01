/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // YouTube still frames, used as talk-card previews.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
};

export default nextConfig;
