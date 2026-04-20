/// <reference types="cypress" />
// VARIABLES & ARRAYS

const url = "https://www.saucedemo.com/";
const users = ["standard_user"];
const password = "secret_sauce";
const products = ["Sauce Labs Backpack"];

// FUNCTION
function login(username, password) {
  cy.get('#user-name').clear().type(username, { delay: 120 });
  cy.get('#password').clear().type(password, { delay: 120 });
  cy.get('#login-button').click();
}

// TEST SUITE
describe("Cypress POC – JavaScript + Cypress Concepts", () => {

  // BASIC COMMANDS
  beforeEach(() => {
    cy.visit(url);
    cy.wait(1000);
  });

  it("Login → Add to Cart → Checkout (POC Demo)", () => {

    // LOOP
    for (let i = 0; i < users.length; i++) {

      // CONDITIONAL STATEMENT
      if (users[i] === "standard_user") {

        // LOGIN
        login(users[i], password);

        // ASSERTION
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
        cy.wait(1000);

        // LOCATORS & ALIASES
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
          .as('addToCartBtn');

        cy.get('@addToCartBtn').click();
        cy.wait(800);

        // OPERATOR & STRING
        let expectedCount = 1 + 0;
        let cartText = "1";

        cy.get('.shopping_cart_badge')
          .should('have.text', cartText);

        // CART PAGE
        cy.get('.shopping_cart_link').click();
        cy.wait(1000);

        cy.get('.inventory_item_name')
          .should('contain', products[0]);
        // CHECKOUT
        cy.get('#checkout').click();
        cy.wait(1000);
        // CYPRESS VARIABLES (let)
        
        let firstName = "Priya";
        let lastName = "Chris";
        let pinCode = "500001";

        cy.get('#first-name').type(firstName, { delay: 120 });
        cy.get('#last-name').type(lastName, { delay: 120 });
        cy.get('#postal-code').type(pinCode, { delay: 120 });

        cy.get('#continue').click();
        cy.wait(1000);
        // FINAL ASSERTION
        
        cy.get('#finish').click();
        cy.wait(1000);

      cy.get('.complete-header')
        .should('have.text', 'Thank you for your order!');
  

      }
    }
  });
});

