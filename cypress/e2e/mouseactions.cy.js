// describe('Tutorialspoint Test', function () {
//    // test case
//    it('Scenario 1', function (){
//       // launch URL
//       cy.visit("https://learn.letskodeit.com/p/practice");
//       // show hidden element with invoke
//       cy.get('div.mouse-hover-content').invoke('show');
//       //click hidden element
//       cy.contains('Top').click();
//    });
// });

// describe('Mouse Hover Test', () => {

//   it('should handle mouse hover', () => {

//     cy.visit('https://learn.letskodeit.com/p/practice');

//     // Wait for page to load properly
//     cy.get('body').should('be.visible');

//     // Scroll to element (VERY IMPORTANT)
//     cy.get('#mousehover', { timeout: 10000 })
//       .scrollIntoView()
//       .should('be.visible');

//     // Trigger hover
//     cy.get('#mousehover').trigger('mouseover');

//     // Click option
//     cy.contains('Top').click({ force: true });

//   });

// });

describe('Right Click Test', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/context_menu');
  });

  it('should perform right click', () => {

    // Right click on the box
    cy.get('#hot-spot').rightclick();

    // Handle alert
    cy.on('window:alert', (text) => {
      expect(text).to.contains('You selected a context menu');
    });

  });

});