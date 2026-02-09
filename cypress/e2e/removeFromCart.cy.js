describe('CP-03 - Remover productos del carrito', () => {
  
    beforeEach(() => {

      cy.login();
      
      //Validar que estamos en inventario
      cy.url().should('include', 'inventory.html');
    });

    it('Deberia permitir eliminar un producto del carrito', () => {

    //paso 2. Agregar productos al carrito
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    //paso 3. Ir al carrito
    cy.get('.shopping_cart_link').click();

    //paso 4. Eliminar productos al carrito
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    //paso 5. validar que el producto ya no aparece
    cy.contains('Sauce Labs Backpack').should('not.exist')

  });
});