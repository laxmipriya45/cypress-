
// /// <reference types="cypress" /> 

// const url = "https://www.saucedemo.com/"; //slow

// const user = {
//   username: "standard_user",
//   password: "secret_sauce"
// };

// class LoginPage {
//   login(username, password) {
//     cy.get('#user-name').type(username, { delay: 100 });
//     cy.get('#password').type(password, { delay: 100 });
//     cy.get('#login-button').click();
//   }
// }

// describe("🐢 Slow Execution Flow", () => {

//   beforeEach(() => {
//     cy.visit(url);
//     cy.wait(1000);
//   });

//   it("Slow Flow - High Price Products", () => {

//     // LOGIN
//     const login = new LoginPage();
//     login.login(user.username, user.password);
//     cy.wait(1500);

//     cy.url().should('include', 'inventory');

//     // SORT HIGH → LOW
//     cy.get('.product_sort_container')
//       .select('Price (high to low)');
//     cy.wait(1500);

//     // ADD TOP 3 PRODUCTS SLOWLY
//     cy.get('.inventory_item').each(($el, index) => {
//       if (index < 3) {
//         cy.wrap($el).find('button').click();
//         cy.wait(1000); // 👈 slow each click
//       }
//     });

//     cy.wait(1500);

//     // CART COUNT
//     cy.get('.shopping_cart_badge')
//       .should('have.text', '3');

//     // GO TO CART
//     cy.get('.shopping_cart_link').click();
//     cy.wait(1500);

//     // REMOVE ONE ITEM
//     cy.contains('Remove').first().click();
//     cy.wait(1500);

//     // VALIDATE 2 ITEMS
//     cy.get('.cart_item')
//       .should('have.length', 2);

//     // CHECKOUT
//     cy.get('#checkout').click();
//     cy.wait(1500);

//     cy.get('#first-name').type("Priya", { delay: 100 });
//     cy.get('#last-name').type("Chris", { delay: 100 });
//     cy.get('#postal-code').type("500001", { delay: 100 });

//     cy.wait(1000);

//     cy.get('#continue').click();
//     cy.wait(1500);

//     // FINAL STEP
//     cy.get('#finish').click();
//     cy.wait(1500);

//     cy.get('.complete-header')
//       .should('have.text', 'Thank you for your order!');
//   });

// });




/// <reference types="cypress" />
// VARIABLES & OBJECTS (ES6)
const url = "https://www.saucedemo.com/";

const user = {
  username: "standard_user",
  password: "secret_sauce"
};
// CLASS (OOP)

class LoginPage {
  login(username, password) {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  }
}
// TEST SUITE
describe("Advanced Cypress POC - Final Extended Flow", () => {

  beforeEach(() => {
    cy.visit(url);
  });

  it("End-to-End Advanced Flow", () => {
    // LOGIN
    const login = new LoginPage();
    login.login(user.username, user.password);
    // ASSERTION
    
    cy.url().should('include', 'inventory');
    cy.contains('Products').should('be.visible');

    // SORT PRODUCTS
    cy.get('.product_sort_container')
      .select('Price (low to high)');

    // ADD 3 PRODUCTS
  
    const items = [
      "Sauce Labs Backpack",
      "Sauce Labs Bike Light",
      "Sauce Labs Bolt T-Shirt"
    ];

    items.forEach((item) => {
      cy.contains(item)
        .closest('.inventory_item')
        .find('button')
        .click();
    });
    // VALIDATE CART COUNT
    
    cy.get('.shopping_cart_badge')
      .should('have.text', '3');

    // GO TO CART
    cy.get('.shopping_cart_link').as('cart');
    cy.get('@cart').click();

  
    // REMOVE 2 ITEMS

    cy.contains('Remove').eq(0).click();
    cy.contains('Remove').eq(0).click();
    cy.wait(1000);

    // VALIDATE 1 ITEM LEFT
    
    cy.get('.cart_item')
      .should('have.length', 1);

    // PRICE VALIDATION
    let total = 0;

    cy.get('.inventory_item_price').each(($el) => {
      const price = parseFloat($el.text().replace('$', ''));
      total += price;
    }).then(() => {
      cy.log("Total Price: " + total);
      expect(total).to.be.greaterThan(0);
    });

    // COOKIES
  
    cy.getCookies().then((cookies) => {
      cy.log("Cookies count: " + cookies.length);
    });

    // LOCAL STORAGE
    
    cy.window().then((win) => {
      cy.log("LocalStorage: " + win.localStorage.length);
    });

    // JQUERY VALIDATION
  
    cy.get('.inventory_item_name').then(($el) => {
      expect($el.text()).to.include("Sauce");
    });

    // CHECKOUT
    cy.get('#checkout').click();

    cy.get('#first-name').type("Priya");
    cy.get('#last-name').type("Chris");
    cy.get('#postal-code').type("500001");

    cy.get('#continue').click();

  
    // FINAL VALIDATION
    
    cy.get('.summary_total_label')
      .should('contain', 'Total');

    // MOUSE ACTION
    cy.get('#finish').trigger('mouseover').click();

    cy.get('.complete-header')
      .should('have.text', 'Thank you for your order!');

    // EXCEPTION HANDLING
  
    Cypress.on('uncaught:exception', () => false);

  });

});

