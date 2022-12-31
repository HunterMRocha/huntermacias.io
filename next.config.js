/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

}

module.exports = {
  nextConfig,

  env: {
    // STRIPE_TEST_KEY: process.env.STRIPE_TEST_KEY,
    STRIPE_PUBLIC_KEY:process.env.STRIPE_PUBLIC_KEY
  },



};