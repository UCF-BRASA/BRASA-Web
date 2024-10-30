/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  env: {
    APP_ENV: process.env.APP_ENV,
    API_PROD_URL: process.env.API_PROD_URL,
    API_DEV_URL: process.env.API_DEV_URL,
    WEB_PROD_URL: process.env.WEB_PROD_URL,
    WEB_DEV_URL: process.env.WEB_DEV_URL,
    WEB_PREVIEW_URL: process.env.WEB_PREVIEW_URL,
    WEB_TEST_URL: process.env.WEB_TEST_URL,
    AUTH_SECRET_KEY: process.env.AUTH_SECRET_KEY,
    ALGORITHM: process.env.ALGORITHM,
  },
});
