 Feature: Demo Feature  
Scenario: Visit Home Page    
Given open google home page  
 When search the "<searchData>"
 Then verify the title of the page  "<searchData>"
 Examples:
      | searchData |
      | cricbuzz   | 
      | valleyball | 