Feature: Wishlist functionality

  Scenario: Verify that Add to Wishlist only works after login
     Given the user is on the home page
    When the user searches for "t-shirt"
    And the user selects the first product
    # And the user selects quantity "2"
    And the user tries to add the product to the wishlist
    Then the user should be redirected to the login page
