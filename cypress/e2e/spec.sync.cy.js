/// <reference types="cypress" />

it('shows the number of items (sync)', () => {
  cy.visit('/')
  cy.get('.loaded')
  const $li = cy.get('li.todo')
  if ($li.length) {
    cy.contains('[data-cy=remaining-count]', $li.length)
  } else {
    cy.log('no todos found')
    cy.get('footer.footer').should('not.be.visible')
  }
})
