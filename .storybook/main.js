const path = require("path");

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // run убрать
    config.output = {
      filename: `js/[name].js`,
      path: path.resolve(__dirname, "../storybook-static"),
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // run убрать
    config.module.rules.push({
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, "../storybook-static/js/"),
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
    "@storybook/addon-postcss"
  ],
  performance: {
    hints: false
  },
  refs: {
    'package-name': { disable: true }
  }
};
