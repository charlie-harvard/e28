// https://docs.cypress.io/api/introduction/api.html

describe('News Search Page', () => {
  it('Searhes by Keywords', () => {
    cy.visit('/search/apple')
    cy.get('.newsItem').its('length').should('be.gte', 1);
  })
})
