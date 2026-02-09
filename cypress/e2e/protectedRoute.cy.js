describe('CP-009 - Acceso a ruta protegida sin login', () => {

  it('No debe permitir acceder al inventario sin autenticación', () => {

    cy.visit('https://www.saucedemo.com/inventory.html', {
      failOnStatusCode: false
    })

    cy.url().should('include', 'saucedemo.com');
    cy.get('#login-button').should('be.visible');
    
  });
});