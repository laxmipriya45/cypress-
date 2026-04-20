describe('Simple Locator Demo', () => {
  it('Use basic CSS selectors', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // 1) By class
    cy.get('.action-email').type('test@gmail.com')

    // 2) By attribute
    cy.get('input[placeholder="Password"]').type('12345')

    // 3) By text (contains)
    cy.contains('Submit').click()

    // 4) Assertion
    cy.get('.action-email').should('be.visible')

  })
})
