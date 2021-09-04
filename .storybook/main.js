module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
     "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-backgrounds",
    "@reapit/storybook-addon-html",
    "storybook-addon-paddings",
    "storybook-color-picker",
    "@storybook/addon-docs"
  ],
  core: {
    builder: "webpack5",
  },
};
