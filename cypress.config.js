const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1/",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
