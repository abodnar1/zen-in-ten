describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home')
  })

  it('should have a nav bar with link to Favorites page', () => {
    cy.get('nav').contains('Favorites').click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
  })

  it('should have a nav bar with link back to Home page', () => {
    cy.get('nav').contains('Home').click()
    cy.url().should('eq', 'http://localhost:3000/home')
  })

  it('should have a dropdown menu to select mood and display appropriate cards', () => {
   cy.get('form').find('select').select('fairness')
   cy.get('.quotes-container').find('.card-wrapper').should('have.length', 2)
  })
})