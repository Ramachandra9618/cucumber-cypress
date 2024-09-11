Feature: Search products on the home page 

 Scenario Outline: User searches for a product and verifies the URL    
Given the user is on the home page  
 When the user searches for "<product>"  
 Then the URL should include "<product>"  

Examples:
   | product |
   |  iPhone  |
   |  Samsung  |
   |  Laptop  |
   |  Headphones  |
   |  TV  |
   |  Camera  |
   |  Gaming Console  |
   