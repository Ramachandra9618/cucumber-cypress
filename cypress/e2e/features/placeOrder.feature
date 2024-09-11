Feature: Place an Order on Amazon

  Scenario Outline: User places an order after logging in
    Given the user is on the home page
    When the user logs in with "<phoneNumber>" and "<password>"
    And the user searches for "shirt for men"
    And the user selects the first product
    And the user selects quantity "<quantity>"
    And the user clicks on the "Buy Now" button
    And the user selects the payment option "<paymentOption>"
    And the user places the order
    Then the order should be placed successfully

    Examples:
      | phoneNumber | password | quantity | paymentOption |
      | 9336659505    | Amazon@7073   | 2        | COD    |
