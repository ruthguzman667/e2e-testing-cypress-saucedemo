describe('CP-006 - Ordenar productos A-Z', () => { 

    beforeEach(() => {

      cy.login();
      
      //Validar que estamos en inventario
      cy.url().should('include', 'inventory.html');
    });

    it('Debe ordenar los productos correctamente de A a Z', () => {

      
      cy.get('.product_sort_container')
        .should('be.visible')
        .select('az');


      cy.get('.inventory_item_name')
        .first()
        .should('have.text', 'Sauce Labs Backpack')

  });

});