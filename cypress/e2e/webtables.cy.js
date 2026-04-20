// describe('Tutorialspoint Test', function () {
//    // test case
//    it('Scenario 1', function (){
//       //URL launch
//       cy.visit("https://sqengineer.com/practice-sites/practice-tables-selenium/")
//       // identify first column
//       cy.get('#table1> tbody > tr > td:nth-child(1)').each(($elm, index, $list)=> {
//          // text captured from column1
//          const t = $elm.text();
//          // matching criteria
//          if (t.includes('Selenium')){
//             // next sibling captured
//             cy.get('#table1 > tbody > tr > td:nth-child(1)')
//             .eq(index).next().then(function(d) {
//                // text of following sibling
//                const r = d.text()
//                //assertion
//                expect(r).to.contains('Commercial');
//             })
//          }
//       })
//    });
// });


// describe('Tutorialspoint Test', () => {

//   it('Scenario 1', () => {

//     cy.visit("https://sqengineer.com/practice-sites/practice-tables-selenium/", {
//       pageLoadTimeout: 120000,
//       failOnStatusCode: false,
//       onBeforeLoad(win) {
//         win.stop(); // prevent load timeout
//       }
//     });

//     // wait for table
//     cy.get('#table1').should('be.visible');

//     // loop first column
//     cy.get('#table1 tbody tr td:nth-child(1)').each(($elm, index) => {

//       cy.wrap($elm).invoke('text').then((text) => {

//         if (text.includes('Selenium')) {

//           // get next column (same row)
//           cy.wrap($elm)
//             .next()
//             .invoke('text')
//             .then((value) => {

//               expect(value).to.contains('Commercial');

//             });

//         }

//       });

//     });

//   });

// });


// describe('Web Table Test', () => {

//   beforeEach(() => {
//     cy.visit('https://demoqa.com/webtables');
//   });

//   it('should validate table data', () => {

//     // Check if table contains "Cierra"
//     cy.get('.rt-tbody')
//       .should('contain', 'Cierra');

//   });

//   it('should add a new row', () => {

//     cy.get('#addNewRecordButton').click();

//     cy.get('#firstName').type('Priya');
//     cy.get('#lastName').type('R');
//     cy.get('#userEmail').type('priya@test.com');
//     cy.get('#age').type('23');
//     cy.get('#salary').type('50000');
//     cy.get('#department').type('QA');

//     cy.get('#submit').click();

//     // Validate added row
//     cy.get('.rt-tbody')
//       .should('contain', 'Priya');
//   });

// });


describe('Web Table Test - Herokuapp', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/tables');
  });

  it('should validate table data', () => {

    // Check if table contains specific data
    cy.get('#table1')
      .should('contain', 'Smith')
      .and('contain', 'John');

  });

  it('should validate specific row and column', () => {

    // Get first row
    cy.get('#table1 tbody tr')
      .first()
      .within(() => {
        cy.get('td').eq(0).should('have.text', 'Smith');   // Last Name
        cy.get('td').eq(1).should('have.text', 'John');    // First Name
      });

  });

  it('should count number of rows', () => {

    cy.get('#table1 tbody tr')
      .should('have.length', 4);

  });

});