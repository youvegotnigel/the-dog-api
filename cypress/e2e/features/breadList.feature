@stage
Feature: Test the dogAPI fetch system
    As a dog enthusiast
    I should be able to fetch pictures of dogs
    So that the website will continue to show cute dogs

    Scenario: TC_ID_001: Passing Test

        Given I am on the dogAPI homepage
        And I select "retriever-golden" from the dropdown
        When I click on the "Fetch!" link
        Then A random dog image should be loaded into the page

    Scenario: TC_ID_002: Failing Test

        Given I am on the dogAPI homepage
        And I select "retriever-golden" from the dropdown
        When I click on the "Fetch!" link
        Then A random dog image should not be loaded into the page