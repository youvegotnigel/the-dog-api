/**
 * This file is for the use of cucumber hooks in the automation framework.
 * 
 */

before(() => {
    cy.log('I Run for each feature before all the scenarios')
});


beforeEach(() => {
    cy.log('I Run for each feature before Every Scenario')
});


afterEach(() => {
    cy.log('I Run for Each Feature After every Scenario')
});


after(() => {
    cy.log('I Run for Each Feature After all the scenarios')

    //cy.writeFile('allure-results/environment.properties', 'data')
    cy.allure().writeEnvironmentInfo({ "AUT": Cypress.config().baseUrl, 
                                        "BROWSER": Cypress.browser.displayName, 
                                        "BROWSER_VERSION": Cypress.browser.version,
                                        "OS_PLATFORM": Cypress.platform,
                                        "TESTING_TYPE": Cypress.testingType,
                                        "CYPRESS_VERSION": Cypress.version })
   
});
