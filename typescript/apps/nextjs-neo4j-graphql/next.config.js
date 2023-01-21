//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

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
    neo4j: {
      url: process.env.NEXT_PUBLIC_NEO4J_URL || '',
      username: process.env.NEXT_PUBLIC_NEO4J_USERNAME || '',
      password: process.env.NEXT_PUBLIC_NEO4J_PASSWORD || '',
    },
  },
  // @see https://www.apollographql.com/docs/react/integrations/webpack/
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = withNx(nextConfig);
