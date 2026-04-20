

describe('Hidden Element Test - Working', () => {

  it('should show hidden element and click it', () => {

    cy.visit('https://testautomationpractice.blogspot.com/');

    // Scroll to bottom (element is below)
    cy.scrollTo('bottom');

    // Click hidden element using force
    cy.contains('GUI Elements').click({ force: true });

  });

});

