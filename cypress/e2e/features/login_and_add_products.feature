Feature: User login and product addition to cart

  Scenario Outline: Login and add products to the cart using data from the fixture
    Given the user is on the home page
    When the user logs in with "<phoneNumber>" and "<password>"
    And searches for "<product>"
    And adds the product to the cart
    And signs out

    Examples:
      | phoneNumber   | password | product       |
      | 9336659505    | Amazon@7073    | pants   |
     
