/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
  trailingSlash: true,
}
// module.exports = {
//   trailingSlash: true,
// }
module.exports = nextConfig
