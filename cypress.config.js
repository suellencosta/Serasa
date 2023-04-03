const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: "cypress/fixtures",
  videosFolder: "cypress/videos",
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    TRELLO_API_KEY: "3b8d2d391b6c94a9e213179518b49257",
    TRELLO_API_TOKEN: "ATTA0f3111a9fd9a6d9c18f835ff39f34a47230f7af9e5aaed38ac134f8f752a061b53760842"
  },
});
