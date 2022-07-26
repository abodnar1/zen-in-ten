describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home')
  })

  it('should have a nav bar with links to Favorites page', () => {
    cy.get('nav').contains('Favorites').click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
  })

})