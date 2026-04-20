// describe('Iframe Null Error Demo', () => {

//   it('should throw null error (no wait)', () => {

//     cy.visit('https://the-internet.herokuapp.com/iframe');

//     cy.get('#mce_0_ifr')
//       .its('0.contentDocument.body')   // not ready yet
//       .then(cy.wrap)                  // → body is null/undefined
//       .find('p')
//       .type('Hello');

//   });

// });




// describe('Handle iframe and interact with element', () => {

//   it('should switch to iframe and type text', () => {

//     cy.visit('https://the-internet.herokuapp.com/iframe');

//     // Step 1: Get iframe
//     cy.get('#mce_0_ifr')
//       .its('0.contentDocument.body')      // Step 2: access iframe DOM
//       .should('not.be.empty')             // Step 3: wait for iframe to load
//       .then(cy.wrap)                      // Step 4: wrap for Cypress commands
//       .as('iframeBody');                  // alias for reuse

//     // Step 5: interact with element inside iframe
//     cy.get('@iframeBody')
//       .find('p')                          // paragraph inside iframe
//       .clear()
//       .type('Hello from Cypress!');

//   });

// });





  it('Popup Not Opened', () => {

    cy.get('#openPopupBtn').click();

    cy.get('body').then(($body) => {
      if ($body.find('#popup').length > 0) {
        cy.get('#popup').should('be.visible');
      } else {
        cy.log('Popup not opened');
      }
    });

  });