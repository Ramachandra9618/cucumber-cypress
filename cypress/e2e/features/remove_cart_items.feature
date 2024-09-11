Feature: Remove items from the cart
  As a logged-in user
  I want to remove items from my cart
  So that I can see my empty cart message when no items are left

  Scenario Outline: Remove items from the cart if present
   Given the user is on the home page
    When the user logs in with phone number "<phoneNumber>" and password "<password>"
    And the user navigates to the cart
    Then the user deletes items from the cart if they exist
    And the user should see a cart empty message if no items are left

  Examples:
    | phoneNumber   | password  |
    | 9336659505    | Amazon@7073 |
    # | 0987654321    | 14256818     |
   
