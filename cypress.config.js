import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalFetchPolyfill: true,
    viewportHeight: 768,
    viewportWidth: 1366,
    defaultCommandTimeout: 8000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 10000,
    downloadsFolder: 'cypress/downloads',
    reporter: 'mocha-junit-reporter',
    reporterOptions: {
      mochaFile: 'cypress/reports/test-results-[hash].xml',
      toConsole: true,
    },
    setupNodeEvents(on, config) {
      // додаткові налаштування
      return config;
    },
    baseUrl: 'https://ua.sinoptik.ua/',
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
});
