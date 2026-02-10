// describe('All-in-one Simple Cypress Program', () => {
//   it('Login with variables and verify dashboard', () => {

//     // variables
//     const url = 'https://opensource-demo.orangehrmlive.com'
//     const username = 'Admin'
//     const password = 'admin123'

//     // open site
//     cy.visit(url)

//     // login
//     cy.get('[name="username"]').type(username)
//     cy.get('[name="password"]').type(password)
//     cy.get('button[type="submit"]').click()

//     // verify login success
//     cy.url().should('include', 'dashboard')
//     cy.contains('Dashboard').should('be.visible')

//   })
// })

//alias


describe('Alias demo', () => {
  it('simple alias', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').as('u')  // alias

    cy.get('@u').type('Admin')           // use alias
  })
})

