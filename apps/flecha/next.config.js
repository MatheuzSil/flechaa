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
  },
  // Adicione esta linha para informar ao Next.js que a pasta `app` está em `src/app`
  dir: './src',
};

const plugins = [withNx];
module.exports = composePlugins(...plugins)(nextConfig);