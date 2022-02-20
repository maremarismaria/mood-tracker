// https://docs.cypress.io/api/introduction/api.html

describe("Example suite", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Mood Tracker");
  });
});
