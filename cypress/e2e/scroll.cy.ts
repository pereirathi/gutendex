describe('Scroll to see more books', () => {
  it('should scroll 3000px to get more books', async () => {
    Cypress.on('uncaught:exception', () => {
      return false
    })
    cy.visit('http://localhost:5173/')

    cy.wait(1500)
    cy.scrollTo(0, 3000)
    cy.wait(4000)
    cy.scrollTo(0, 3000)
    cy.get('[data-testid="book-card"]').should('have.length', 64)
  })
})
