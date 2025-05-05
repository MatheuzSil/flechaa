const { composePlugins, withNx } = require('@nx/next');

const nextConfig = {
  nx: {
    svgr: false,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    APPLICATION: process.env.APPLICATION || 'Flecha',
    THEME: process.env.THEME || 'flecha',
  }
};

const plugins = [withNx];
module.exports = composePlugins(...plugins)(nextConfig);