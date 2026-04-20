// describe("jQuery usage in Cypress", () => {

//   it("Verify text using jQuery", () => {

//     // Step 1: Open a demo page
//     cy.visit("https://example.cypress.io/commands/actions");

//     // Step 2: Type something in input box
//     cy.get('.action-email').type("test@example.com");

//     // Step 3: Use jQuery to get value
//     cy.get('.action-email').then(($el) => {

//       // jQuery method
//       let value = $el.val();

//       // Print in console
//       console.log("Entered value is:", value);

//       // Verification
//       if (value === "test@example.com") {
//         console.log("Value verified successfully");
//       }

//     });

//   });

// });


it("Verify text using jQuery", () => {

  cy.visit("https://example.cypress.io");

  cy.get("h1").then(($el) => {
    let text = $el.text();

    console.log("Heading is:", text);

    if (text.includes("Kitchen Sink")) {
      console.log("Text verified");''
    }
  });

});