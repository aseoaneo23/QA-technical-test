Feature: get pets by status and count

Background: 
    Given url 'https://petstore.swagger.io/v2'
    * def formatPetList = read('./utils/print_pets.js')
    * def petCounter = read('./utils/count_pets.js')
Scenario: get a list of sold pets and count those with same name
    Given path `/pet/findByStatus`
    And param status = 'sold'
    When method get
    Then status 200
    And def result = formatPetList(response)
    And def petCount = petCounter(result)

