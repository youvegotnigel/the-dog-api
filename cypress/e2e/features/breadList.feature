@stage
Feature: Test the dogAPI fetch system
    As a dog enthusiast
    I should be able to fetch dog pictures
    So that the website will continue to show cute dogs

    Scenario: TC_ID_001: Display random pictures functionality

        Given I am on the dogAPI homepage
        And I select "retriever-golden" from the dropdown
        When I click on the "Fetch!" link
        Then A random dog image should be loaded into the page


    Scenario Outline: <test_case_id>: Display random pictures functionality

        Given I am on the dogAPI homepage
        And I select "retriever-golden" from the dropdown
        When I click on the "Fetch!" link
        Then A random dog image should be loaded into the page

        Examples:
            | test_case_id |
            | TC_ID_002    |
            | TC_ID_003    |
            | TC_ID_004    |
            | TC_ID_005    |