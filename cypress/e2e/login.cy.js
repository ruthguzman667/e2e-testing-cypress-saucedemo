describe('CP-001 - Login exitoso SauceDemo', () => {

  it('Debe permitir el login con credenciales validas', () => {
    
    cy.visit('https://www.saucedemo.com/')

    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get('#login-button').click()

    cy.url().should("include", "inventory")

  })
})