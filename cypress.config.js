const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-await
const cyAwaitPreprocessor = require('cypress-await/src/preprocessor-sync-mode')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cyAwaitPreprocessor)
    },
  },
})
