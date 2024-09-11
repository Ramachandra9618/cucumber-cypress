const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
import { cartPage, electronisPage, homePage, loginPage,  productPage,  checkoutPage } from "../pages";

Given('the user is on the home page', () => {
  cy.visit('http://www.amazon.com/');
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
});

When('the user logs in with {string} and {string}', (phoneNumber, password) => {
  homePage.clickSignIn();
  loginPage.enterEmail(phoneNumber);
  loginPage.clickContinue();
  loginPage.enterPassword(password);
  loginPage.clickSignInSubmit();
});

When('searches for {string}', (product) => {
  electronisPage.searchProduct(product);
});

When('adds the product to the cart', () => {
  electronisPage.clickFirstProduct();
  cartPage.clickAddToCart();
});

When('signs out', () => {
  homePage.mouseOnAccount();
  homePage.signOut();
});


// languages

When('the user hovers over the language options', () => {
  homePage.mouseOnLangOPN();
});

When('selects the language {string}', (language) => {
  homePage.selectLangugage(language);
});

Then('the website language should be updated', () => {
  cy.url().should('contain', language)
});



//search

// When('the user searches for {string}', (productName) => {
//   homePage.searchProduct(productName);
// });

Then('the URL should include {string}', (productName) => {
  cy.url().should('include', productName);
});

// remove from the cart


When('the user logs in with phone number {string} and password {string}', (phoneNumber, password) => {
  homePage.clickSignIn();
  loginPage.enterEmail(phoneNumber);
  loginPage.clickContinue();
  loginPage.enterPassword(password);
  loginPage.clickSignInSubmit();
});

When('the user navigates to the cart', () => {
  homePage.clickCartButton();
});

Then('the user deletes items from the cart if they exist', () => {
  if (cartPage.deleteButton) {
    cartPage.clickDeleteButton()
  }
});

Then('the user should see a cart empty message if no items are left', () => {
  cy.wait(10000);
    cartPage.cartEmpty.should('be.visible');
    cy.log("no items in the cart")
});


//add wishlist

When('the user searches for {string}', (string) => {
  homePage.searchProduct(string);
});

When('the user selects the first product', () => {
  productPage.clickFirstProduct();
});

// When('the user selects quantity {string}', (quantity) => {
//   productPage.selectQty(quantity);
// });

When('the user tries to add the product to the wishlist', () => {
  productPage.clickAddWishListButton();
});

Then('the user should be redirected to the login page', () => {
  cy.url().should('contain', 'signin');
});


When('the user selects quantity {string}', (string) => {
  productPage.selectQty(string);
});

When('the user clicks on the "Buy Now" button', () => {
  productPage.clickBuyNowBtn();
});

When('the user selects the payment option {string}', (paymentOption) => {
  checkoutPage.selectOption(paymentOption);
});

When('the user places the order', () => {
  checkoutPage.clickOnPlaceOrder();
});

Then('the order should be placed successfully', () => {
  // Add verification steps if applicable
  cy.url().should('include', 'order-confirmation');
});