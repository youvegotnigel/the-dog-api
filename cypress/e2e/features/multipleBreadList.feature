@stage
Feature: Test the dogAPI fetch system
    As a dog enthusiast
    I should be able to fetch pictures of dogs
    So that the website will continue to show cute dogs

    Background:
        Given I am on the dogAPI homepage

    Scenario Outline: Display pictures of "<breed_name>" breeds functionality
        Given I select "<breed>" from the dropdown
        When I click on the "Fetch!" link
        Then A random dog image should be loaded into the page

        Examples:
            | breed            | breed_name       |
            | retriever-golden | Golden Retriever |
            | mountain-bernese | Bernese Mountain |
            | husky            | Husky            |
            | boxer            | Boxer            |
            | buhund-norwegian | Norwegian Buhund |
            | chihuahua        | Chihuahua        |