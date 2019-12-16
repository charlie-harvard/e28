// https://docs.cypress.io/api/introduction/api.html

describe('Feedable Landing Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Latest News')
    cy.get('.newsItem').its('length').should('be.gte', 1);
  })
})
