const path = require('path')
module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@tomfreudenberg/next-auth-mock/storybook',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: { nextConfigPath: '../next.config.js' },
  },
  // webpackFinal: async config => {
  //   config.resolve.modules.push(path.resolve(__dirname, '../'));
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ['style-loader', 'css-loader?url=false&modules=true', 'sass-loader'],
  //     include: path.resolve(__dirname, '../')
  //   });
  //   config.module.rules.filter(rule => rule.test.test('.svg')).forEach(rule => rule.exclude = /\.svg$/i);
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack']
  //   });
  //   return config;
  // },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
  docs: {
    autodocs: true,
  },
}
