Feature: Create a new pet order to the shop

Background: 
    Given url 'https://petstore.swagger.io/v2'
    * def orderData = read('./data/new_order.json')
Scenario: Creating a successful order
    Given path '/store/order'
    And request orderData
    When method post
    Then status 200
    And match response == orderData

