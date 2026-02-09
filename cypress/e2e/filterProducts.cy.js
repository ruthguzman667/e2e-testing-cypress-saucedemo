describe('CP-010 - Filtro de productos por precio', () => {  

    beforeEach(() => {

      cy.login();
      
      //Validar que estamos en inventario
      cy.url().should('include', 'inventory.html');
    });

    it('Debe filtrar los productos de menor a mayor precio', () => {

      //Aplicar filtro Low to High
      cy.get('[data-test="product-sort-container"]').select('lohi');

      //Validar producto más barato primero
      cy.get('.inventory_item_price')
      .first()
      .should('contain.text', '$7.99');

    });

    it('Debe filtrar productos de mayor a menor precio', () => {

      //Aplicar filtro High Low
      cy.get('[data-test="product-sort-container"]').select('hilo');

      //Validar producto más costoso primero
      cy.get('.inventory_item_price')
      .first()
      .should('contain.text', '$49.99');  

    }); 
});
