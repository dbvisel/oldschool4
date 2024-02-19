import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverMinification: false }, // from this: https://github.com/vercel/next.js/issues/55682
};

export default withPlaiceholder(nextConfig);
