describe('Search Book', () => {
  it('should search a book, and get details', async () => {
    Cypress.on('uncaught:exception', () => {
      return false
    })
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="search-input"]', { timeout: 10000 })
      .type('Scarlett of the Mounted')
      .should('exist')
      .should('have.value', 'Scarlett of the Mounted')
    cy.get('[data-testid="book-title"]', { timeout: 50000 })
      .should('exist')
      .should('contain', 'Scarlett of the Mounted')
      .click()
    cy.wait(100)
    cy.get('[data-testid="book-subject"]').should('exist')
  })
})
