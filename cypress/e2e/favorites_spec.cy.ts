describe('Favorites page with no quotes', () => {
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

// describe('Favorites page with quotes', () => {
//   beforeEach(() => {
//     cy.request('http://localhost:3000/favorites')
//   })

//   it("should", () => {

//    cy.get('.favorite-card-wrapper').eq(0).contains('h2', 'Everything that is made beautiful and fair and lovely is made for the eye of one who sees.')
//    cy.get('.favorite-card-wrapper').eq(0).contains('p', 'Rumi')

//   })
// })