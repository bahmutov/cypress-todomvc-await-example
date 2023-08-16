/// <reference types="cypress" />

it('shows the number of items', () => {
  cy.visit('/')
  cy.get('.loaded')
  cy.get('li.todo')
    .should(Cypress._.noop)
    .its('length')
    .then((n) => {
      if (n) {
        cy.contains('[data-cy=remaining-count]', n)
      } else {
        cy.log('no todos found')
        cy.get('footer.footer').should('not.be.visible')
      }
    })
})
