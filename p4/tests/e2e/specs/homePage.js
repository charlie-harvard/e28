// https://docs.cypress.io/api/introduction/api.html

describe('Feedable Landing Page', () => {
  it('visits the root url', () => {
    cy.visit('/');
    cy.contains('h2', 'Latest News');
    cy.get('.newsItem').its('length').should('be.gte', 1);
    cy.get('.txtlink').first().click();
    cy.contains('a', 'Read more ...');
    cy.get('#addChannleBtn').click();
  })
})
