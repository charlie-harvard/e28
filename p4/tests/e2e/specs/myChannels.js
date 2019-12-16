// https://docs.cypress.io/api/introduction/api.html

describe('My Channels Page', () => {
  it('lists saved channels', () => {
    cy.visit('/channels')
    cy.get('.channelItem').its('length').should('be.gte', 1);

    cy.visit('/channel/nytimes.com')
    cy.get('.newsItem').its('length').should('be.gte', 1);
  })
})
