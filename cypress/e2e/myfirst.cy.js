

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


// describe('book my show',()=>
// {
//   it("open book my show",()=>
//   {
//     cy.visit('https://www.flipkart.com/', {
//     failOnStatusCode: false
//   })
//     cy.get('.b3wTlE').click();
//     cy.contains('Mobiles').click()
//     cy.contains("iPhone").should("be.visible").click()
    //cy.get('input[name="q"]').first().type('Mobile');
   // cy.get('.sc-p6ayv6-0 itWYLt').click()


    //cy.contains("View all cities").click();
    //cy.get("").type()
//   })
// })
//basic commands
// describe('OrangeHRM Login Test', function(){

//   it('Login with valid credentials', function(){

//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     cy.get('input[name="username"]').type('Admin')
//     cy.get('input[name="password"]').type('admin123')

//     cy.get('button[type="submit"]').click()
//     cy.contains('Leave').click() //find element by visible text


//     // cy.url().should('include', '/Leave')
//     // cy.contains('Leave').should('be.visible')

//   })

// })


// describe("book my show",()=>
// {
//   it("book the tickets",()=>
//   {

//     cy.visit("https://in.bookmyshow.com/explore/home/hyderabad", {
//         failOnStatusCode: false

//     })
//     cy.wait(5000)
   
//     cy.contains("Events").click();

//   })
// })



// describe("open orangehrm", ()=>
// {
//   it("login to the oragehrm",()=>
//   {
//     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     cy.get('input[name="username"]').type('Admin')
//     cy.get('input[name="password"]').type('admin123')
//     cy.get('button[type="submit"]').click()
//     cy.contains('Leave').click();
//     cy.contains('Apply').click();
//   })
// })




// describe("opne meesho", function(){
//   it("meeshoo", function(){
//     cy.visit("https://www.meesho.com/?srsltid=AfmBOopxwpkjM1BBQoQrRczwe0SIgrto0S1xSeVo6_sgmw6TjdzEizmy",{
//       failOnStatusCode: false
//     })
//      cy.wait(5000)

//   cy.get('input[type="text"]').first().click()
    
//   })
// })

it("open meesho", () => {

  cy.visit("https://www.meesho.com/", {

    failOnStatusCode: false
  })

  cy.wait(5000)

  cy.get('input[type="text"]').first().click()

})

// it("open saucesemo", () => {

//   cy.visit("https://www.saucedemo.com")
//   cy.get("#user-name").type('standard_user')
// })




