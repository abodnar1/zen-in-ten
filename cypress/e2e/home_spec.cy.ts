/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/quotes/11ef57ae8191dde524535934c158c4543950e06c&keyword=fairness', {
      statusCode: 200,
      fixture: "fairness_quotes"
    })
    cy.intercept('GET', '/api/today?key=11ef57ae8191dde524535934c158c4543950e06c', {
      statusCode: 200, 
      fixture: "daily_quote"
    })
    cy.visit('http://localhost:3000/home')
  })

  it('should display daily quote on home page load', () => {
    cy.get('.daily-quote-container').contains('h2', "The most important thing in communication is to hear what isn't being said.")
    cy.get('.daily-quote-container').contains('p', "Peter Drucker")
  })

  it('should display an error message if daily quote is unable to load due to 400 error', () => {
    cy.intercept('GET', '/api/today?key=11ef57ae8191dde524535934c158c4543950e06c', {
      statusCode: 400
    })
    cy.contains('p', 'Uh oh! We\'ve encountered an error!')
  })

  it('should display an error message if daily quote is unable to load due to 500 error', () => {
    cy.intercept('GET', '/api/today?key=11ef57ae8191dde524535934c158c4543950e06c', {
      statusCode: 500
    })
    cy.contains('p', 'Uh oh! We\'ve encountered an error!')
  })

  it('should have a nav bar with link back to Home page', () => {
    cy.get('.nav-bar').get('.home-nav').click()
    cy.url().should('eq', 'http://localhost:3000/home')
  })

  it('should have a nav bar with link to Favorites page', () => {
    cy.get('.nav-bar').find('.favorites-nav').click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
  })

  it('should have a dropdown menu to select mood and display appropriate cards', () => {
    cy.get('form').find('select').select('fairness')
    cy.get('.quotes-container').find('.card-wrapper').should('have.length', 2)

    cy.get('.card-wrapper').eq(0).contains('h2', 'Everything that is made beautiful and fair and lovely is made for the eye of one who sees.')
    cy.get('.card-wrapper').eq(0).contains('p', 'Rumi')

    cy.get('.card-wrapper').eq(1).contains('h2', 'It is not fair to ask of others what you are not willing to do yourself.')
    cy.get('.card-wrapper').eq(1).contains('p', 'Eleanor Roosevelt')
  })

  it('should have the add heart button when quote card is not a favorite', () => {
    cy.get('form').find('select').select('fairness')
    cy.get('.favorite-button').first().get('svg').should('have.class', 'add-heart')
    cy.get('.favorite-button').first().get('svg').should('not.contain', 'delete-heart')
  })

  it('should have the delete heart button when quote card has been favorited', () => {
    cy.get('form').find('select').select('fairness')
    cy.get('.favorite-button').first().click()
    cy.get('.favorite-button').first().get('svg').should('have.class', 'delete-heart')
    cy.get('.favorite-button').first().get('svg').should('not.contain', 'add-heart')
  })

  it('should be able to click favorite heart on quote card when already selected to unselect', () => {
    cy.get('form').find('select').select('fairness')
    cy.get('.favorite-button').last().click()
    cy.get('.favorite-button').last().get('svg').should('have.class', 'delete-heart')
    cy.get('.favorite-button').last().click()
    cy.get('.favorite-button').last().get('svg').should('have.class', 'add-heart')
  })

  it('should display error message if dropdown is unable to load moods due to 400 error', () => {
    cy.intercept('GET', '/api/keywords?key=11ef57ae8191dde524535934c158c4543950e06c', {
      statusCode: 400
    })
    cy.get('.error-message').contains('p', 'Uh oh! We are not in the mood. Please try again later.')
  })

  it('should display error message if dropdown is unable to load moods due to 500 error', () => {
    cy.intercept('GET', '/api/keywords?key=11ef57ae8191dde524535934c158c4543950e06c', {
      statusCode: 500
    })
    cy.get('.error-message').contains('p', 'Uh oh! We are not in the mood. Please try again later.')
  })

})