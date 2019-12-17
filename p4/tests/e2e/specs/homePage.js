// https://docs.cypress.io/api/introduction/api.html

describe('Feedable Landing Page', () => {
  it('visits the root url and add channl to My Channels', () => {
    cy.visit('/');
    cy.contains('h2', 'Latest News');
    cy.get('.newsItem').its('length').should('be.gte', 1);
    cy.get('.txtlink').first().click();
    cy.get('#addChannleBtn').click();
    cy.contains('p', 'You have 1 newly saved channel(s).').should('exist');
  })
})