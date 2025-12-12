Feature: As the very best, like no one ever was, I want to get information about a specific Pokémon so that I can add it to my Pokédex.

  Scenario: Get information about Pikachu
    Given I request information for the Pokémon "pikachu"
    Then the response status code should be 200
    And the Pokémon name should be "pikachu"
    And the Pokémon ID should be 25
    And the Pokémon types should include "electric"