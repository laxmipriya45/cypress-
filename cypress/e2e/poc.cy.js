

describe("Demo",function()
{
    it("login to sauce demo", ()=>
    {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
         cy.get('#login-button').click()
         cy.get('#react-burger-menu-btn').click()
        cy.get('#about_sidebar_link').click()
          // assertion
          cy.wait(1000)  // just to keep browser open visibly
        

    })
})



// describe("keka",function()
// {
//     it("Login to the keka", function()
// {
//     cy.visit('https://cognine.keka.com')
//     cy.get('')
//     cy.visit('https://app.keka.com/Account/Login')
//     cy.get('#email').type('priya.kommula@cognine.com')
//     cy.get('')

// -
// })
// })




