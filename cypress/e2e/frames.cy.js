
// describe('Iframe Test - Stable', () => {

//   it('should verify text inside iframe', () => {

//     cy.visit('https://the-internet.herokuapp.com/iframe');

//     cy.get('#mce_0_ifr')
//       .its('0.contentDocument.body')
//       .should('not.be.empty')
//       .then(cy.wrap)
//       .should('contain', 'Your content goes here.');

//   });

// });






// import 'cypress-iframe'
// describe('Tutorialspoint Test', function () {
//    it('Test Case6', function (){
//       cy.visit("https://jqueryui.com/draggable/");
    
//       cy.frameLoaded('.demo-frame');
//       //shifting focus
//       cy.iframe().find("#draggable").then(function(t){
//          const frmtxt = t.text()
//          //assertion to verify text
//          expect(frmtxt).to.contains('Drag me around');
//          cy.log(frmtxt);
//       })
//    });
// });





// import 'cypress-iframe'

// describe('Tutorialspoint Test', function () {

//   beforeEach(() => {
//     Cypress.on('uncaught:exception', () => false);
//   });

//   it('Test Case6', function (){

//     cy.visit("https://jqueryui.com/draggable/");

//     cy.frameLoaded('.demo-frame');

//     cy.iframe()
//       .find("#draggable")
//       .should('contain', 'Drag me around');

//   });

// });









// describe('Iframe Null Error Demo', () => {

//   it('should throw null error (no wait)', () => {

//     cy.visit('https://the-internet.herokuapp.com/iframe');

//     cy.get('#mce_0_ifr')
//       .its('0.contentDocument.body')
//       .then(cy.wrap)                  
//       .find('p')
//       .type('Hello');

//   });

// });










describe('Iframe Timeout Error Demo', () => {

  it('should throw timeout error (wrong selector)', () => {

    cy.visit('https://the-internet.herokuapp.com/iframe');

    cy.get('#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
      .find('#wrongId')     // element does NOT exist
      .click();             // will timeout

  });

});



describe('Iframe Safe Handling Demo', () => {

  it('should handle missing element without failing', () => {

    cy.visit('https://the-internet.herokuapp.com/iframe');

    cy.get('#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
      .then(($body) => {

        //  Check if element exists
        if ($body.find('#wrongId').length > 0) {
          cy.wrap($body).find('#wrongId').click();
        } else {
          cy.log('Element not found, skipping test step');
        }

      });

  });

});






