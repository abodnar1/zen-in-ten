describe('Favorites page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/favorites')
  })

  it('should indicate user is on Favorites page in nav bar and header', () => {
    cy.get('.nav-bar').find('.favorites-nav').should('have.class', 'active')
    cy.contains('h2', 'Favorites')
  })

  it('should display a message if user has no quotes favorited', () => {
    cy.get('.favorites-container').should('have.length', 0)
    cy.contains('h3', 'No favorites yet!')
  })
})