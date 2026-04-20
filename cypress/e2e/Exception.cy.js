

// describe('Exception Handling Test', () => {

//   // 👇 This MUST be inside describe or before test
//   before(() => {
//     Cypress.on('uncaught:exception', (err, runnable) => {
//       console.log('Handled Error:', err.message);
//       return false; // prevents failure
//     });
//   });

//   it('should not fail on JS error', () => {
//     cy.visit('https://the-internet.herokuapp.com/javascript_error');

//     cy.get('p').should('contain', 'This page has a JavaScript error');
//   });

// });



describe('Exception Handling Test - Button Error', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log('Handled Error:', err.message);
      return false; // prevent test failure
    });
  });

  it('should handle JS error after button click', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');

    // Click button multiple times
    cy.contains('Add Element').click().click().click();

    // Validate elements still work
    cy.get('.added-manually').should('have.length', 3);
  });

});