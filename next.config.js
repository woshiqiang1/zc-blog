/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  assetPrefix: isProd ? "/zc-blog" : "",
  images: {
    unoptimized: true,
  },
})


