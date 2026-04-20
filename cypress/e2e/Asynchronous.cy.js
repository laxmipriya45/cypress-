// // test suite
// describe('Tutorialspoint', function () {
//    it('Scenario 1', function (){
//       // test step to launch a URL
//       cy.visit("https://accounts.google.com")
//       // identify element
//       cy.get('h1#headingText').find('span').should('have.text', 'Sign in')
//       cy.get('h1#headingText').find('span').then(function(e){
//          const t = e.text()
//          // get in Console
//          console.log(t)
//       })
//       // Console message
//       console.log("Tutorialspoint-Cypress")
//    })
// });

describe('Async Example', function () {

  it('Understand async', function () {

    cy.visit('https://example.cypress.io')

    cy.get('h1').then((e) => {
      console.log("Inside Cypress")
    })

    console.log("Outside Cypress")

  })

})

