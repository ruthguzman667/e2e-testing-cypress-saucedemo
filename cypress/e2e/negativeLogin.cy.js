describe('CP-005 - Login con credenciales inválidas', () => {
  it('Debe mostrar mensaje de error con credenciales incorrectas', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('usuario_invalido')
    cy.get('#password').type('password_invalido')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'do not match any user')
  })
})
