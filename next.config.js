/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

}

module.exports = {
  nextConfig,

  env: {
    // mailchimp newletter
    PUBLIC_MAILCHIMP_URL:process.env.PUBLIC_MAILCHIMP_URL,

    // stripe payments
    STRIPE_TEST_KEY: process.env.STRIPE_TEST_KEY,
    STRIPE_PUBLIC_KEY:process.env.STRIPE_PUBLIC_KEY,
    PRO_SUB_PRICE_KEY:process.env.PRO_SUB_PRICE_KEY,
    PREM_SUB_PRICE_KEY:process.env.PREM_SUB_PRICE_KEY,
    BASIC_SUB_PRICE_KEY:process.env.BASIC_SUB_PRICE_KEY,

    REACT_GA_KEY:process.env.REACT_GA_KEY,

  },

  images: {
    unoptimized: true,
  },


};