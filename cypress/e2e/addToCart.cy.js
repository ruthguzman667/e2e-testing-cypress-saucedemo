describe('CP-002 - Agregar productos al carrito', () => {
  
    beforeEach(() => {

      cy.login();
      
      cy.url().should('include', 'inventory.html');
    });
    
    it('Deberia agregar 2 productos al carrito correctamente', () => {

    //2. Agregar productos al carrito
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    //3. Verificar contador del carrito
    cy.get('.shopping_cart_badge').should('have.text', '2');

    //4.Ir al carrito
    cy.get('.shopping_cart_link').click();

    //5. Validar que los productos esten en el carrito
    cy.contains('Sauce Labs Backpack').should('be.visible');
    cy.contains('Sauce Labs Bike Light').should('be.visible');
    
  });
});