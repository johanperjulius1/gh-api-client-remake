describe("Application main view", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url:
        "https://cors-anywhere.herokuapp.com/https://api.github.com/search/users?q=Barack",
      response: "fixture:search_query.json",
    });
    cy.visit("/");
  });

  it("contains titel", () => {
    cy.get("section[name='title']").should("contain", "GitHub Search engine");
  });

  context('user searches for user', () => {
    it('', () => {
      cy.get("[data-cy='search']").type("Barack");
      cy.get("[data-cy='search-button']").click()
      cy.get('#search-results').should('contain', 'PresidentObama')
    });
  });
});
