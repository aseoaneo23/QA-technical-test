Feature: Create a new user

Background: 
    * url 'https://petstore.swagger.io/v2'
    * def data = read('./data/new_user.json')
Scenario: Create a new user
    Given path '/user'
    And request  data
    When method post
    Then status 200

Scenario: Return the created user
    Given def username = data.username
    Given path `/user/${username}`
    When method get
    Then status 200