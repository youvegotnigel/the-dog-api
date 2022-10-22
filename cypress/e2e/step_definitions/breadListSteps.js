import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";
import  Bread_List_Page from '../pages/breadListPage'

const breadListPage = new Bread_List_Page()

Given("I am on the dogAPI homepage", () => {
    breadListPage.navigateToHome()
})

And(/^(?:|I|User|The user) (?:|click|clicks) on the "(.+)" link$/,(text)=>{
    breadListPage.clickOnLink(text)
})

When(/^I select "(.+)" from the dropdown$/, (text) => {
    breadListPage.selectDog(text)
})

Then("A random dog image should be loaded into the page", () => {
    cy.wait(2000)
    breadListPage.verifyImageDisplayed()
})

