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
  dir: './src', // Configuração para usar `src/app`
  webpack: (config, { isServer }) => {
    // Ignora arquivos HTML
    config.module.rules.push({
      test: /\.html$/,
      loader: 'ignore-loader',
    });

    return config;
  },
};

const plugins = [withNx];
module.exports = composePlugins(...plugins)(nextConfig);