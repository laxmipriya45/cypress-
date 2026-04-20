describe("flipkart login", () => {

  it("login to the flipkart", () => {

    cy.visit("https://www.meesho.com/", { 
      failOnStatusCode: false 
    })

    cy.wait(3000)
    cy.contains("Profile").click();
    //cy.get(".sc-kFkjun ghANen TabWrapper-sc-1edf3ww-0 Header__StyledProfileMenu-sc-1qdannb-2 jtaRdY fRxfrv").click()




  })
})