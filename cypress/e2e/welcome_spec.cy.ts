describe('Welcome Page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it('should be able to visit the application and see a welcome message', () => {
    cy.get(".welcome-container").should("be.visible").contains("h1", "Welcome")
  })

  it('should have a description of the application', () => {
    cy.get(".welcome-message").should("be.visible").contains("p", "YOU'RE ABOUT TO BE ZEN IN TEN")
  })

  it("should have a button to enter the site", () => {
    cy.contains("Get Started!").first().click()
      .url().should("eq", "http://localhost:3000/home")
  })
})