/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_NAME: process.env.npm_package_name,
    APP_VERSION: process.env.npm_package_version,
    APP_STARTUP_TIME: new Date(),
    NEXT_PUBLIC_APP_ENV: process.env.APP_ENV,
    // Read environment variables listed in 'config/local.json'.
    // https://zenn.dev/jj/articles/next-js-env-best-practice
    ...require(`./config/${process.env.APP_ENV || "local"}.json`),
  },
};

console.log("---------------------------------------------------------------");
console.log(`start up for next-app (${nextConfig.env?.APP_NAME})`);
console.log(`APP_VERSION -> ${nextConfig.env?.APP_VERSION}`);
console.log(`APP_STARTUP_TIME -> ${nextConfig.env?.APP_STARTUP_TIME}`);
console.log(`NODE_ENV-> ${process.env.NODE_ENV}`);
console.log(`APP_ENV -> ${process.env.APP_ENV}`);
console.log("---------------------------------------------------------------");
console.log(nextConfig);
console.log("---------------------------------------------------------------");

module.exports = nextConfig;
