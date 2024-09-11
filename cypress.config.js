const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    video:true,
    videoCompression: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'report',
      html: true,
      json: true
    },
    specPattern: '**/*.feature',
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      config.dryRun = true;

      return config;
    },
  },
});
