const path = require("path");

module.exports = {
  webpackFinal: async (config, { configType }) => {
    
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.js$/,
      use: 'babel-loader',
      include: path.resolve(__dirname, "../js/"),
    });

    return config;
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
    "@storybook/addon-controls",
    "@storybook/addon-storysource",
    "@storybook/addon-actions",
    "@storybook/addon-postcss",
    'storybook-design-token'
  ],
  performance: {
    hints: false
  },
  refs: {
    'package-name': { disable: true }
  }
};
