describe('Login Test using CSS Selectors', () => {

  it('should login successfully', () => {

    cy.visit('https://the-internet.herokuapp.com/login');

    // ID selectors
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    // Class selector
    cy.get('.radius').click();

    // Validation
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');

  });

});