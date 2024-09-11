Feature: Change website language 

Scenario Outline: User changes the language of the website    
Given the user is on the home page    
When the user hovers over the language options   
And selects the language "<language>"   
Then the website language should be updated  

Example:
          | language|
          | English |
          | Telugu  |
