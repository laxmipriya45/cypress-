describe('Assertions Demo (Implicit + Explicit)', () => {
  it('Login and verify dashboard', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com')

    // ✅ Implicit Assertions (should / and) - on element directly
    cy.get('[name="username"]').should('be.visible').and('be.enabled')
    cy.get('[name="password"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible').and('be.enabled')

    // Actions
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    // ✅ Implicit Assertions
    cy.url().should('include', 'dashboard')
    cy.contains('Dashboard').should('be.visible')

    // ✅ Explicit Assertion (expect) - using value from then()
    cy.contains('Dashboard').then(($el) => {
      const text = $el.text()
      expect(text).to.contain('Dashboard')
    })

  })
})
