const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  video: false,

  reporterOptions: {

    charts: true,

    reportPageTitle: 'Cypress Inline Reporter',

    embeddedScreenshots: true, 

    inlineAssets: true, //Adds the asserts inline

  },
  "reporter_allure": "@shelex/cypress-allure-plugin",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      watchForFileChanges: false,
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;

    },
    
        env: {
          baseUrl: 'https://sentry.io/auth/login.com/',
          allureReuseAfterSpec: true,
          "allureResultsPath": "allure-results"

        }
  },
});
