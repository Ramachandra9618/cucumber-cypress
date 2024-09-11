const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");

When("search the {string}", function (string) {
    cy.get("textarea[name='q']").type(`${string}{Enter}`)
})

Then("verify the title of the page  {string}", function (string) {
    cy.url().should("include", `${string}`);
})

Given("open google home page", () => {
    cy.visit("http://www.google.com");
  });
  
  When("search the cricbuzz", () => {
    cy.get("textarea[name='q']").type("cricbuzz{Enter}")
  });
  
  Then("verify the title of the page", () => {
    cy.url().should("include", "cricbuzz");
  })

    
