/// <reference types="cypress" />

it('shows the number of items', () => {
  cy.visit('/')
  cy.get('.loaded')
  cy.get('li.todo')
    .should(Cypress._.noop)
    .then(($li) => {
      if ($li.length) {
        cy.contains('[data-cy=remaining-count]', $li.length)
      } else {
        cy.log('no todos found')
        cy.get('footer.footer').should('not.be.visible')
      }
    })
})
