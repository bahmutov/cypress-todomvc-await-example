/// <reference types="cypress" />

it('shows the number of items returned by the server', () => {
  cy.intercept('GET', '/todos').as('load')
  cy.visit('/')
  cy.get('.loaded')
  cy.wait('@load')
    .its('response.body.length')
    .then((n) => {
      if (n) {
        cy.get('li.todo').then(($li) => {
          expect($li.length, 'number of todos').to.equal(n)
        })
        cy.contains('[data-cy=remaining-count]', n)
      } else {
        cy.log('no todos found')
        cy.get('footer.footer').should('not.be.visible')
      }
    })
})
