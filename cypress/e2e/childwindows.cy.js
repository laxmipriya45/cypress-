// describe('Tutorialspoint', function () {
//    // test case
//    it('Scenario 1', function (){
//       // url launch
//       cy.visit("https://the-internet.herokuapp.com/windows")
//       // delete target attribute with invoke for link
//       cy.get('.example > a')
//       .invoke('removeAttr', 'target').click()
//       // verify child window url
//       cy.url()
//       .should('include', 'https://the-internet.herokuapp.com/windows/new')
//       // shift to parent window
//       cy.go('back');
//    });
// });

// describe('Child Window Handling', () => {

//   it('Handle child window', () => {

//     cy.visit('https://the-internet.herokuapp.com/windows')

//     // Remove target attribute and click
//     //cy.get('.example a').invoke('removeAttr', 'target').click()
//     cy.get('#content > div > a').invoke('removeAttr', 'target').click()

//     // Verify new page opened in same tab6 #content > div > a
//     cy.url().should('include', '/windows/new')
//     cy.contains('New Window').should('be.visible')

//   })

// })



// describe('Child Window Handling', () => {

//   it('Handle child window', () => {

//     cy.visit('https://demo.automationtesting.in/Windows.html')

   
//     cy.get('#Tabbed > a').invoke('removeAttr', 'target').click()

//     cy.url().should('include', 'selenium.dev') 
//     cy.contains('New Window').should('be.visible')

//   })

// })



describe('Tutorialspoint', function () {
   // test case
   it('Scenario 1', function (){
      // url launch
      cy.visit("https://the-internet.herokuapp.com/windows")
      // delete target attribute with invoke for link
      cy.get('.example > a')
      .invoke('removeAttr', 'target').click()
      // verify child window url
      cy.url()
      .should('include', 'https://the-internet.herokuapp.com/windows/new')
      // shift to parent window
      cy.go('back');
   });
});