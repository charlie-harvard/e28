// https://docs.cypress.io/api/introduction/api.html

describe('News Search Page', () => {
  it('searhes news by keywords', () => {
    cy.visit('/search/apple')
    cy.get('.newsItem').its('length').should('be.gte', 1);
  })
})
