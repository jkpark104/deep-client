/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    dangerouslyAllowSVG: true,

    domains: [
      'webimages.mongodb.com',
      'initialcommit.com',
      'd33wubrfki0l68.cloudfront.net',
      'redux-saga.js.org',
      'velog.velcdn.com',
      'nodejs.org',
    ],
  },
};

module.exports = nextConfig;
