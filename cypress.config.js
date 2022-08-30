const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.infinitics.com.ve/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
