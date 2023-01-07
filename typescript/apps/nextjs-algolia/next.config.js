// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  publicRuntimeConfig: {
    algolia: {
      appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
      apiKey: process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || '',
      indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || '',
    },
  },
};

module.exports = withNx(nextConfig);
