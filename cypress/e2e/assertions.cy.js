// describe('Assertions Demo (Implicit + Explicit)', () => {
//   it('Login and verify dashboard', () => {

//     cy.visit('https://opensource-demo.orangehrmlive.com')

//     // Assertions (should / and) - on element directly
//     cy.get('[name="username"]').should('be.visible').and('be.enabled')
//     cy.get('[name="password"]').should('be.visible')
//     cy.get('button[type="submit"]').should('be.visible').and('be.enabled')

//     // Actions
//     cy.get('[name="username"]').type('Admin')
//     cy.get('[name="password"]').type('admin123')
//     cy.get('button[type="submit"]').click()

//     // Implicit Assertions
//     cy.url().should('include', 'dashboard')
//     cy.contains('Dashboard').should('be.visible')

//     // Explicit Assertion (expect) - using value from then()
//     cy.contains('Dashboard').then(($el) => {
//       const text = $el.text()
//       expect(text).to.contain('Dashboard')
//     })

//   })
// })

// describe('Assertions demo',()=>
// {
//   if('login and verify the computers',()=>
//   {
//     cy.visit('https://demo.nopcommerce.com/login')
//     cy.get('#Email').type('admin@yourstore.com')
//     cy.get('#Password').type('admin')
//     cy.get('input[type="submit"]').click()  
//     cy.url().should('include','nopcommerce')
//     cy.contains('Computers').click()
//     cy.url().should('include','computers') 
//     cy.contains('Computers').should('be.visible')             

//   }
// )
// })
// describe('orangehrm',()=>
// {
//   it('login to the orangehrm',()=>
//   {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get('#oxd-input-group__label-wrapper').type('Admin')
//     cy.get('oxd-input oxd-input--active').type('admin123')
//     cy.get('#oxd-button oxd-button--medium oxd-button--main orangehrm-login-button').click()


//   })
// })

// describe("OrangeHRM Login", () => {

//   it("Login to OrangeHRM", () => {

//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     cy.get('input[name="username"]').type('Admin')
//     cy.get('input[name="password"]').type('admin123')

//     cy.get('button[type="submit"]').click()
//     cy.contains('Leave').click()
//   })

// })

// describe("nopcommerce",function()
// {
//     it("Login to nopcommerce",()=>{
//         cy.visit('https://demo.nopcommerce.com/')
//         cy.get('#Email').type('test.user@gmail.com')
//         cy.get('#password').type('Testuser@123')
//         cy.get('input[type="submit"]').click()
//         //cy.visit()
//     }
// )

// });

// describe('opencart',()=>
// {
//     it('login to the cart',()=>
//     {

//          //cy.visit('https://opencart.abstracta.us/')
//         cy.visit('https://demo.opencart.com/')
//         cy.contains('My Account').click()
//         cy.contains('Login').click()

//         })
// })


// describe('orangehrm demo', ()=>
// {
//   it('login to the portal',()=>
//   {
//     cy.visit('https://opensource-demo.orangehrmlive.com')
//     cy.get('input[name="username"]').type('Admin')
//     cy.get('input[name="password"]').type('admin123')
//     cy.get('button[type="submit"]').click()
//   })
// })


describe("sauscedemo",()=>
{
  it('login to the sausedemo',()=>
  {
    cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click();
    
  })
})