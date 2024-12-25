/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/linktr',
            destination: 'https://151.101.130.133/somitalaventuras',
            has: [
              {
                type: 'host',
                value: 'linktr.ee',
              },
            ],
            permanent: false,
            basePath: false
          },
        ]
      },
};
// require('dotenv').config();

module.exports = nextConfig;