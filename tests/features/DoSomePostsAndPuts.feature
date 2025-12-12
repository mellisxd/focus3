Feature: As an avid API fan, I want to perform POST and PUT requests to create and update resources so that I can manage data effectively.

Scenario: Create new resource and update it
    Given I create a new data item with userId 1, the title "My New Post" and body "This is the content of my new post."
    Then the response status should be 201
    And the new data item should have the title "My New Post"
    When I update the data item with ID 1 to have the title "Updated Post Title"
    Then the response status should be 200
    And the updated data item should have the title "Updated Post Title"
