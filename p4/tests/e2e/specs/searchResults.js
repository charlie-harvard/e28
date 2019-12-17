// https://docs.cypress.io/api/introduction/api.html

describe('News Search Page', () => {
  it('searhes news by keywords', () => {
    cy.visit('/search/apple')
    cy.get('.newsItem').its('length').should('be.gte', 1);
    cy.contains('Results for "apple"').should('exist');

    cy.get('#searchKeywords').type("a");
    cy.contains('at least 2 chars').should('exist');

    cy.get('#searchKeywords').type("pple pie");
    cy.get('#searchBtn').click();
    cy.get('.newsItem').its('length').should('be.gte', 1);
    cy.contains('Results for "apple pie"').should('exist');
  })
})
