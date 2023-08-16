/// <reference types="cypress" />

it('shows the number of items returned by the server (sync)', () => {
  cy.intercept('GET', '/todos').as('load')
  cy.visit('/')
  cy.get('.loaded')
  const n = cy.wait('@load').its('response.body.length')
  if (n) {
    cy.get('li.todo').should('have.length', n)
    cy.contains('[data-cy=remaining-count]', n)
  } else {
    cy.log('no todos found')
    cy.get('footer.footer').should('not.be.visible')
  }
})
