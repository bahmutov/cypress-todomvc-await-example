# cypress-todomvc-await-example

> Writing Cypress tests without callback pyramids

Using [cypress-await](https://github.com/bahmutov/cypress-await) plugin

## Before

```js
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
```

## After

```js
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
```

## Network requests

You can grab the data from the network requests and easily write conditional logic

```js
const n = cy.wait('@load').its('response.body.length')
if (n) {
  cy.get('li.todo').should('have.length', n)
  cy.contains('[data-cy=remaining-count]', n)
} else {
  cy.log('no todos found')
  cy.get('footer.footer').should('not.be.visible')
}
```
