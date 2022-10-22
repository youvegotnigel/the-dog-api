# THE DOG API PROJECT AUTOMATION
This project is created to show how we can leverage Cucumber BDD framework in Cypress. Steps involved in configuring your project are following:

## Pre-Requisites
* Node JS and NPM - [Node](https://nodejs.org/en/download/) 
* IDE - [VS Code](https://code.visualstudio.com/download) 

## Set Up
* Clone repository from [Bitbucket](https://bitbucket.org/vitalhub/s12-qa-automation/src/master/)
* Run ```npm i``` to  install all dependencies.  

## Cypress Help
```
npx cypress run --help
```  

## Dependencies
* cypress - v10.7
* multiple-cucumber-html-reporter - v1.21.4
* cucumber-json-report-formatter - v0.0.9
* cypress-xpath - v2.0.1
* moment - v2.29.4
* moment-timezone - v0.5.37
* @badeball/cypress-cucumber-preprocessor - v12.1.0
* @bahmutov/cypress-esbuild-preprocessor -  v2.1.3
* @shelex/cypress-allure-plugin - v2.29.0

## Configure VS Code

### Use `ctrl + shift + p` and search for  `Preferences: Open Settings (JSON)` and open VS Codes settings. Add the following in `settings.json`

```
 "[feature]":{
        "editor.formatOnSave": true,
    },
    "cucumberautocomplete.strictGherkinCompletion": true,
    "cucumberautocomplete.steps": [
        "cypress/integration/**/*.js",
        "cypress/e2e/**/*.js",
    ]
```

## Features
- BDD Framework
- Page Object Model
- Cucumber HTML Report
- Allure Report

## Documentation
* [Cypress Docs](https://docs.cypress.io/)
* [Cypress Youtube](https://www.youtube.com/c/Cypressio)
* [Badeball-cypress-cucumber-preprocessor readme](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/readme.md)
* [Badeball-cypress-cucumber-preprocessor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor)
* [Shelex-cypress-allure-plugin](https://github.com/Shelex/cypress-allure-plugin)
* [Boilerplate Code Github](https://github.com/JoanEsquivel/cypress-cucumber-boilerplate)
* [Mailosaur Cypress](https://mailosaur.com/docs/frameworks-and-tools/cypress/)
* [Mailosaur Test Cases](https://mailosaur.com/docs/test-cases/)


## How to Run and Generate Report

### GUI Mode
```
npx cypress open
or
npx cypress open --config-file config/qa.config.js
```  

### CLI Mode

#### Run All Features and Generate Allure Report
```
npm run allure:clear
npm run cy:run
npm run allure:report
```

#### Run Specific Feature
```
npx cypress run --browser "chrome" --config-file config/qa.config.js
or
npx cypress run --browser "chrome" --spec "cypress/e2e/features/breadList.feature"
or
npx cypress run --browser "chrome" --spec 'cypress/e2e/features/breadList.feature' --config-file config/qa.config.js
and
npm run allure:report
```  

#### Run Specific Feature with Percy Visual Testing
```
npm run allure:clear
npx cypress run --browser "chrome" --spec 'cypress/e2e/features/breadList.feature' --config-file config/qa.config.js
npm run cy:report
npm run allure:report
``` 
## Install Allure
```
Open Windows PowerShell and Enter following commands
  1. Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  2. irm get.scoop.sh | iex
  3. scoop install allure
```


## Using Cypress-cucumber-preprocessor with cucumber tags:

```feature
@testID("id_of_test_for_testops")
@parentSuite("someParentSuite")
@suite("someSuite")
@subSuite("someSubSuite")
@epic("thisisepic")
@feature("nice")
@story("cool")
@owner("IAMOwner")
@issue("jira","JIRA-1234")
@tms("tms","TC-1234")
@link("other","url")
@someOtherTagsWillBeAddedAlso
@severity("blocker")
@severity("critical")
@severity("minor")
@severity("trivial")
Scenario: Here is scenario
...
```

## Author
* **Nigel Mulholland** - [Email](nigel.mulholland@vitalhub.com) 
* **If you're a non-reader** [watch](https://www.youtube.com/watch?v=dr10Z-HpsCQ&list=PL8GlT7H3xOcKBEDLXwJPE1jwZ_Z4oh6Rk)

✨ **Happy Automation** 😊  ✨