describe('Welcome Page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it('should be able to visit the application and see a welcome message', () => {
    cy.get(".welcome-container").should("be.visible").contains("h1", "Welcome")
  })
})