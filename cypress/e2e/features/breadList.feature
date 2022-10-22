@stage
Feature: Test the dogAPI fetch system
    As a dog enthusiast
    I should be able to fetch pictures of dogs
    So that the website will continue to show cute dogs

    Scenario: TC_ID_001: Display random pictures functionality

        Given I am on the dogAPI homepage
        And I select "retriever-golden" from the dropdown
        When I click on the "Fetch!" link
        Then A random dog image should be loaded into the page