/// <reference types="cypress" />

it('checks the server using cy.request', () => {
  cy.request('GET', '/todos')
    .its('body.length')
    .then((n) => {
      cy.visit('/')
      if (n) {
        cy.get('li.todo').should('have.length', n)
        cy.contains('[data-cy=remaining-count]', n)
      } else {
        cy.log('no todos found')
        cy.get('footer.footer').should('not.be.visible')
      }
    })
})
