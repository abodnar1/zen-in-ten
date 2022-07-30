describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://zenquotes.io/api/quotes/11ef57ae8191dde524535934c158c4543950e06c&keyword=fairness', {fixture: "fairness_quotes"})
    cy.visit('http://localhost:3000/home')
  })

  it('should have a nav bar with link to Favorites page', () => {
    cy.get('nav').contains('FAVORITES').click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
  })

  it('should have a nav bar with link back to Home page', () => {
    cy.get('.nav-bar').get('.home-nav').click()
    cy.url().should('eq', 'http://localhost:3000/home')
  })

  it("should have a favorites button", () => {
    cy.get('.nav-bar').find('.favorites-nav').click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
  })
  
  it('should have a dropdown menu to select mood and display appropriate cards; user should be able to click heart icon on card to save it to favorites page; user should be able to delete quote card from Favorites by clicking trash can icon', () => {
    cy.get('form').find('select').select('fairness')
    cy.get('.quotes-container').find('.card-wrapper').should('have.length', 2)

    cy.get('.card-wrapper').eq(0).contains('h2', 'Everything that is made beautiful and fair and lovely is made for the eye of one who sees.')
    cy.get('.card-wrapper').eq(0).contains('p', 'Rumi')

    cy.get('.card-wrapper').eq(1).contains('h2', 'It is not fair to ask of others what you are not willing to do yourself.')
    cy.get('.card-wrapper').eq(1).contains('p', 'Eleanor Roosevelt')
  })

})