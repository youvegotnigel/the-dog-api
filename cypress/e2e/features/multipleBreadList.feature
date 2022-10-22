@stage
Feature: Test the dogAPI fetch system
    As a dog enthusiast
    I should be able to fetch pictures of dogs
    So that the website will continue to show cute dogs

    Background:
        Given I am on the dogAPI homepage
        And I select "retriever-golden" from the dropdown

    Scenario Outline: <test_case_id>: Display random pictures functionality

        When I click on the "Fetch!" link
        Then A random dog image should be loaded into the page

        Examples:
            | test_case_id |
            | TC_ID_002    |
            | TC_ID_003    |
            | TC_ID_004    |
            | TC_ID_005    |