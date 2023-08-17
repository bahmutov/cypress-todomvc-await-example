/// <reference types="cypress" />

it('checks the server using cy.request (sync)', () => {
  const n = cy.request('GET', '/todos').its('body.length')
  cy.visit('/')
  if (n) {
    cy.get('li.todo').should('have.length', n)
    cy.contains('[data-cy=remaining-count]', n)
  } else {
    cy.log('no todos found')
    cy.get('li.todo').should('have.length', 0)
    cy.get('footer.footer').should('not.be.visible')
  }
})
