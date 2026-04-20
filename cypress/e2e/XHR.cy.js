
describe('Simple API Test', () => {

  it('should check userId and show output', () => {

    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {

        // Show value clearly in Cypress UI
        cy.wrap(response.body.userId).should('eq', 1);

        // Print in browser console
        console.log('User ID:', response.body.userId);

      });

  });

});


// describe('API Test', () => {

//   it('should validate API response', () => {

//     cy.request('https://jsonplaceholder.typicode.com/posts/1')
//       .then((response) => {

//         expect(response.status).to.eq(200);
//         expect(response.body.id).to.eq(1);

//         console.log('TITLE:', response.body.title);

//       });

//   });

// });

// describe('Check Output', () => {

//   it('should print output', () => {

//     cy.request('https://jsonplaceholder.typicode.com/posts/1')
//       .then((response) => {

//         console.log('CHECK OUTPUT:', response.body.id);

//         expect(response.body.id).to.eq(1);

//       });

//   });

// });
