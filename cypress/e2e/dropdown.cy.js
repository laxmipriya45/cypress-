
describe('Tutorialspoint', function () {

   it('Scenario 1', function (){
      
      cy.visit("https://register.rediff.com/register/register.php")
      cy.wait(120000);
      //select option India with value then verify with assertion
      cy.get('select[id="country"]').select('100').should('have.value', '100')
   })
})   