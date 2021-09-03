module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-backgrounds",
    "storybook-addon-paddings",
    "storybook-color-picker",
  ],
  core: {
    builder: "webpack5",
  },
};
