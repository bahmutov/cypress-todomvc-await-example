# cypress-todomvc-await-example [![ci](https://github.com/bahmutov/cypress-todomvc-await-example/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bahmutov/cypress-todomvc-await-example/actions/workflows/ci.yml) ![cypress version](https://img.shields.io/badge/cypress-12.17.4-brightgreen) ![cypress-await version](https://img.shields.io/badge/cypress--await-1.4.0-brightgreen)

> Writing Cypress tests without callback pyramids

Using [cypress-await](https://github.com/bahmutov/cypress-await) plugin

- 📝 Read blog post [Use Async Await In Cypress Specs](https://glebbahmutov.com/blog/use-async-await-in-cypress-specs/)
- 📺 Watch video [cypress-await Sync Mode Example](https://youtu.be/opOopVq5AmA)

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

## Examples

| Plain Cypress syntax                         | cypress-await syntax                                   |
| -------------------------------------------- | ------------------------------------------------------ |
| [spec.cy.js](./cypress/e2e/spec.cy.js)       | [spec.sync.cy.js](./cypress/e2e/spec.sync.cy.js)       |
| [request.cy.js](./cypress/e2e/request.cy.js) | [request.sync.cy.js](./cypress/e2e/request.sync.cy.js) |
| [network.cy.js](./cypress/e2e/network.cy.js) | [network.sync.cy.js](./cypress/e2e/network.sync.cy.js) |

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2023

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Tips & Tricks Newsletter](https://cypresstips.substack.com/)
- [my Cypress courses](https://cypress.tips/courses)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/cypress-todomvc-await-example/issues) on Github

## MIT License

Copyright (c) 2023 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
