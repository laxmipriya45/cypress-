
// /// <reference types="cypress" />

// Cypress.config('defaultCommandTimeout', 8000);

// describe("SauceDemo - Add to Cart and Checkout (Slow Demo)", () => {

//   beforeEach(() => {
//     cy.visit("https://www.saucedemo.com/");
//     cy.wait(1000);
//   });

//   it("Login → Add to Cart → Checkout → Order Success", () => {

//     // LOGIN (slow typing)
//     cy.get('#user-name').clear().type('standard_user', { delay: 120 });
//     cy.wait(500);

//     cy.get('#password').clear().type('secret_sauce', { delay: 120 });
//     cy.wait(500);

//     cy.get('#login-button').click();
//     cy.wait(1000);

//     // ASSERT LOGIN
//     cy.url().should('include', '/inventory.html');
//     cy.wait(1000);

//     // ADD PRODUCT
//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//     cy.wait(800);

//     cy.get('.shopping_cart_badge').should('have.text', '1');
//     cy.wait(800);

//     // CART
//     cy.get('.shopping_cart_link').click();
//     cy.wait(1000);

//     // CHECKOUT
//     cy.get('#checkout').click();
//     cy.wait(1000);

//     // DETAILS
//     cy.get('#first-name').type('Priya', { delay: 120 });
//     cy.wait(500);

//     cy.get('#last-name').type('Chris', { delay: 120 });
//     cy.wait(500);

//     cy.get('#postal-code').type('500001', { delay: 120 });
//     cy.wait(500);

//     cy.get('#continue').click();
//     cy.wait(1000);

//     //  FINISH
//     cy.get('#finish').click();
//     cy.wait(1000);

//     // ASSERT SUCCESS
//     cy.get('.complete-header')
//       .should('have.text', 'Thank you for your order!');
//   });
// });


// describe('ranes app',()=>
// {
//   it('login to the app',()=>
//   {
//     cy.visit('https://app-qa.ranes.com/')
//     cy.get('input[type="email"]').type('test54.cab@gmail.com')
//     cy.get('input[name="login-password"]').type('Cognine@1234')
//     cy.get('button[type="submit"]').click()
//     cy.get('.nav-btn--more').click()
//     cy.get('.more-item--messages').click()
//     cy.contains('Demo Testing897').click()
//     cy.contains('Close').click()
    
//     //cy.contains('Messages').click() 
//     //cy.url().should('include', 'Messages')   // Assertion

//   })

// })
  
// describe('book my show',()=>{
//   it("open book my show",()=>{
//     cy.visit('https://in.bookmyshow.com/')
//     cy.get('.sc-p6ayv6-0 itWYLt').click()


//     //cy.contains("View all cities").click();
//     //cy.get("").type()
//   })
// })



/// <reference types="cypress" />

// ==========================
// GLOBAL VARIABLES (ES6)
// ==========================
const URL = "https://www.saucedemo.com/";
const USERS = ["standard_user"];
const PASSWORD = "secret_sauce";
const PRODUCTS = ["Sauce Labs Backpack"];

// ==========================
// ES6 CLASS (OOPS)
// ==========================
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    cy.get('#user-name').type(this.username);
    cy.get('#password').type(this.password);
    cy.get('#login-button').click();
  }
}

// ==========================
// ARRAY METHODS (ES5/ES6/ES7)
// ==========================
const productList = PRODUCTS.map(p => p.toUpperCase()); // ES6 map
const includesProduct = productList.includes("SAUCE LABS BACKPACK"); // ES7

// ==========================
// UTILITY FUNCTION
// ==========================
function generateRandomNumber() {
  return Math.floor(Math.random() * 1000); // Math object
}

// ==========================
// DATE OBJECT
// ==========================
const today = new Date();
cy.log("Test Date: " + today.toDateString());

// ==========================
// TEST SUITE
// ==========================
describe("Advanced Cypress POC Covering All Concepts", () => {

  beforeEach(() => {
    cy.visit(URL);

    // COOKIE HANDLING
    cy.setCookie('test_cookie', 'QA_Automation');
  });

  it("Complete Flow with Advanced Concepts", () => {

    try {
      USERS.forEach((userName) => {

        // OOPS (Class usage)
        const user = new User(userName, PASSWORD);
        user.login();

        // ASSERTIONS
        cy.url().should('include', 'inventory');

        // ==========================
        // CSS SELECTORS
        // ==========================
        cy.get('.inventory_item').should('be.visible');

        // ==========================
        // WORKING WITH XHR (Network)
        // ==========================
        cy.intercept('GET', '**/inventory**').as('getInventory');
        cy.wait('@getInventory');

        // ==========================
        // ADD PRODUCT (ARRAY USAGE)
        // ==========================
        PRODUCTS.forEach((product) => {
          cy.contains('.inventory_item_name', product)
            .parents('.inventory_item')
            .find('button')
            .click();
        });

        // ==========================
        // JQUERY USAGE
        // ==========================
        cy.get('.inventory_item_name').then(($el) => {
          expect($el.text()).to.include("Sauce Labs");
        });

        // ==========================
        // MOUSE ACTION
        // ==========================
        cy.get('.shopping_cart_link').trigger('mouseover').click();

        // ==========================
        // WEB TABLE (ITEM LIST)
        // ==========================
        cy.get('.cart_item').each(($row) => {
          cy.wrap($row).should('contain.text', 'Sauce Labs Backpack');
        });

        // ==========================
        // CHECKOUT
        // ==========================
        cy.get('#checkout').click();

        // ==========================
        // DROPDOWN / INPUT
        // ==========================
        cy.get('#first-name').type("Priya");
        cy.get('#last-name').type("Chris");
        cy.get('#postal-code').type(generateRandomNumber().toString());

        cy.get('#continue').click();

        // ==========================
        // ASSERTION
        // ==========================
        cy.get('.summary_total_label').should('be.visible');

        // ==========================
        // FINAL STEP
        // ==========================
        cy.get('#finish').click();

        cy.get('.complete-header')
          .should('have.text', 'Thank you for your order!');

        // ==========================
        // HIDDEN ELEMENT HANDLING
        // ==========================
        cy.get('.complete-header').invoke('show');

        // ==========================
        // COOKIES VALIDATION
        // ==========================
        cy.getCookie('test_cookie').should('exist');

        // ==========================
        // ASYNC BEHAVIOR (PROMISE)
        // ==========================
        cy.wrap(Promise.resolve("Async Done")).then((msg) => {
          expect(msg).to.equal("Async Done");
        });

      });

    } catch (error) {
      // ==========================
      // EXCEPTION HANDLING
      // ==========================
      cy.log("Error Occurred: " + error.message);
    }

  });
});