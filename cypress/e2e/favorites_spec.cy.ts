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

describe('Favorites page with quotes', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/today?key=11ef57ae8191dde524535934c158c4543950e06c', {
      statusCode: 200,
      fixture: "daily_quote"
    })
    cy.intercept('GET', '/api/quotes/11ef57ae8191dde524535934c158c4543950e06c&keyword=fairness', {
      statusCode: 200,
      fixture: "fairness_quotes"
    })
    cy.visit('http://localhost:3000/home')
    cy.get('form').find('select').select('fairness')
    cy.get('.favorite-button').first().click()
    cy.get('.nav-bar').find('.favorites-nav').click()
  })

  it('should have a page with one favorite quote displayed', () => {
   cy.get('.favorite-card-wrapper').eq(0).contains('h2', 'Everything that is made beautiful and fair and lovely is made for the eye of one who sees.')
   cy.get('.favorite-card-wrapper').eq(0).contains('p', 'Rumi')
  })

  it('should be able to click delete button and show empty page with no quote message', () => {
    cy.get('.delete-button').click()
    cy.get('.favorites-container').find('.favorite-card-wrapper').should('have.length', 0)
    cy.contains('h3', 'No favorites yet!')
  })
  
})