import { CartPage } from './CartPage.cy';
import { ElectronicsPage } from './ElectronicsPage.cy';
import { HomePage } from './HomePage.cy';
import { LoginPage } from './LogingPage.cy';
import {  ProductPage } from './ProductPage.cy';
import{CheckoutPage } from './CheckoutPage.cy'
// Create instances of page objects
const cartPage = new CartPage();
const electronisPage = new ElectronicsPage();
const homePage = new HomePage();
const loginPage = new LoginPage();
const productPage = new ProductPage();
const checkoutPage =  new CheckoutPage();

// Export instances
export {
  cartPage,
  electronisPage,
  homePage,
  loginPage,
  productPage,
  checkoutPage
};
