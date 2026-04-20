// describe("flipcart login",()=>
// {
//     it("login to the flipcart",()=>
//     {
//         cy.visit("https://www.flipkart.com/",{
//             failOnStatusCode: false
//         })
//         cy.wait(3000)
//         cy.contains("Login").click();
//          cy.get('input[type="text"]')
//       .first()
//       .should('be.visible')
//       .type("8121202563")

// describe("Flipkart login", () => {

//   it("login to the flipcart", () => {

//     cy.visit("https://www.flipkart.com/", { failOnStatusCode: false })

//     cy.contains("Login").click()

//     cy.get('input[placeholder="Enter Email/Mobile number"]')
//       .type("8121202563", { force: true })

//   })

// })




       // cy.get('input[]).type("8121202563")
//*[@id="container"]/div/div[3]/div/div[2]/div/form/div[1]/input
       
    //cy.get('input[class="c3Bd2c yXUQVt"]').type("8121202563")
        //type('8121202563');
       // cy.get("#container").type('8121202563') 
        //cy.get('.dSM5Ub Kv3ekh KcXDCU').click()



//     })
// })




// describe("flipkart login", () => {

//   it("login to the flipkart", () => {

//     cy.visit("https://www.flipkart.com/", { 
//         failOnStatusCode: false 
//     })

//     cy.wait(3000)
//     cy.contains("Login").click()
     
//     cy.get('input[@class="c3Bd2c yXUQVt"]', {
//          timeout: 10000
//      })
//       .should('be.visible')
//       .type("8121202563")

//     // click request otp
//     cy.contains("Request OTP")
//       .should('be.visible')
//       .click()
     
//   })

// })
   


// describe("Flipkart Login Flow", () => {

//   it("Open site → enter mobile → request OTP", () => {

    
//     cy.visit("https://www.flipkart.com/account/login", {
//       failOnStatusCode: false
//     })

    
//     cy.get('input[@class="c3Bd2c yXUQVt"]', { timeout: 10000 })
//       .should('be.visible')
//       .type("8121202563")

    
//     cy.contains("Request OTP", { timeout: 10000 })
//       .should('be.visible')
//       .click()

//   })

// })





// describe("flipkart login", () => {

//   it("login to the flipkart", () => {

//     cy.visit("https://www.flipkart.com/", { 
//         failOnStatusCode: false 
//     })

//     cy.wait(3000)
//     cy.contains("Login").click()
     
//     cy.get('input[@class="c3Bd2c yXUQVt"]').type("8121202563")
//     cy.get('button[@class="dSM5Ub Kv3ekh KcXDCU"]').click();

// })
// })


describe("flipkart login", () => {

  it("login to the flipkart", () => {

    cy.visit("https://www.flipkart.com/", { 
      failOnStatusCode: false 
    })

    cy.wait(3000)
 
    cy.contains("Login").click()

    cy.get('input.c3Bd2c.yXUQVt')
      .should('be.visible')
      .type("8121202563")

    cy.get('button.dSM5Ub.Kv3ekh.KcXDCU')
      .should('be.visible')
      .click()

  })

})

