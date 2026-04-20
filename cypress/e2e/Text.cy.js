describe('Text Verification Example', function () {

  it('Verify page title text', function () {

    // Step 1: Open any page (example)
    cy.visit('https://example.cypress.io')

    // Step 2: Verify text
    cy.get('h1').then(function(e) {

      const text = e.text()               // get actual text

      expect(text).to.contains('Kitchen') // expected text

    })

  })

})