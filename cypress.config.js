const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      allureWriter(on, config);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    viewportWidth: 1200,
    viewportHeight: 800,
    chromeWebSecurity: false,

    specPattern: "cypress/e2e/features/**/*.feature",
    
    baseUrl: "https://dog.ceo/",
    env: {
      timeZone: 'Asia/Colombo',
      TAGS: '@stage and not @ignore'
    },


  },
});
