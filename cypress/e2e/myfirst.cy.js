

// //test suite name
// describe('My First Test', function(){
//     //test case 
//     it('test1', function() {
//         //test step for url launching
//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//         //cy.title().should('eq', 'OrangeHRM')
//        })
// })

// it('Login', () => {
//   cy.visit('https://opensource-demo.orangehrmlive.com')

//   cy.get('[name="username"]').type('Admin')
//   cy.get('[name="password"]').type('admin123')
//   cy.get('button[type="submit"]').click()
// })

//basic commands
describe('OrangeHRM Login Test', function(){

  it('Login with valid credentials', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')

    cy.get('button[type="submit"]').click()
    cy.contains('Leave').click() //find element by visible text


    // cy.url().should('include', '/Leave')
    // cy.contains('Leave').should('be.visible')

  })

})
