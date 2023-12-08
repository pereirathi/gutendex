describe('error handling', () => {
  const nonExistentBook = 'ksgjhgskjahglksjdhf'

  it('should search a non-existent book, and return not found', async () => {
    Cypress.on('uncaught:exception', () => {
      return false
    })

    cy.visit('http://localhost:5173/')
    cy.wait(1000)
    cy.get('[data-testid="search-input"]').type(nonExistentBook).should('exist')
    cy.wait(8000)
    cy.get('[data-testid="not-found"]').should('exist')
  })

  it('should type invalid url and return not found component', async () => {
    Cypress.on('uncaught:exception', () => {
      return false
    })

    cy.visit('http://localhost:5173/skjhdfshkdjf')
    cy.wait(6000)
    cy.get('[data-testid="not-found"]').should('exist')
  })
})
