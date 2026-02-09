describe('CP-008 - Logout exitoso', () => {
  
    beforeEach(() => {

      cy.login();
      
      //Validar que estamos en inventario
      cy.url().should('include', 'inventory.html');
    });
    
    it('Debe cerrar sesión correctamente', () => {

    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();

    cy.url().should('eq', 'https://www.saucedemo.com/');

  });
});