Feature: Search for 'Automatización' on Google

    As a user 
    I want to search 'Automatización' on Google
    So that I can find the year of the first automatic process on Wikipedia

Scenario: verify the first automatic process on Wikipedia
    Given an user in the Google page
    And the user searches "Automatización"
    And the user accesses to Wikipedia result
    When the user searches the year of the first automatic process
    Then the user should be able to see the relevant information