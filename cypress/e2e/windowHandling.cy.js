
//Window Not Found
// it('Window Not Found - without handling', () => {
//   cy.visit('https://example.com');

//   cy.then(() => {
//     const win = undefined;
//     win.document.title = "Test"; // error
//   });
// });

// it('Window Not Found - with handling', () => {

//   Cypress.on('fail', (error) => {
//     if (error.message.includes('Cannot read properties of undefined')) {
//       cy.log('Handled: Window not found');
//       return false; // prevents failure
//     }
//   });

//   cy.visit('https://example.com');

//   cy.then(() => {
//     const win = undefined;
//     win.document.title = "Test";
//   });

// });

//Scenario 2: Element Not Found in Popup
// it('Element Not Found - without handling', () => {
//   cy.visit('https://example.com');

//   cy.get('#missingElement').click(); // fails without handling
// });

//with handling
// it('Element Not Found - with handling', () => {

//   Cypress.on('fail', (error) => {
//     if (error.message.includes('Expected to find element')) {
//       cy.log('Handled: Element not found in popup');
//       return false;
//     }
//   });

//   cy.visit('https://example.com');

//   cy.get('#missingElement').click();

// });



//Scenario 3: Window Already Closed
// it('Window Closed - without handling', () => {
//   cy.visit('https://example.com');

//   cy.window().then((win) => {
//     win.close();
//     win.document.title = "Test"; // error
//   });
// });


//with handling
// it('Window Closed - with handling', () => {

//   Cypress.on('fail', (error) => {
//     cy.log('Handled: Window already closed');
//     return false;
//   });

//   cy.visit('https://example.com');

//   cy.window().then((win) => {
//     win.close();
//     win.document.title = "Test";
//   });

// });



//Scenario 4: Popup Not Opened
// it('Popup Not Opened - without handling', () => {
//   cy.visit('https://example.com');

//   cy.get('#popup').should('be.visible'); //  fails
// });


//with handling
// it('Popup Not Opened - with handling', () => {

//   Cypress.on('fail', (error) => {
//     if (error.message.includes('Timed out retrying')) {
//       cy.log('Handled: Popup not opened');
//       return false;
//     }
//   });

//   cy.visit('https://example.com');

//   cy.get('#popup').should('be.visible');

// });