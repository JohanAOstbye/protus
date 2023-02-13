const path = require('path')

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
    
  },
  webpackFinal:async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../'))
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?url=false&modules=true', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return config
  }
}