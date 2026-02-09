describe('CP-004 - Proceso de checkout (inicio de compra)', () => {
  
    beforeEach(() => {

      cy.login();
      
      cy.url().should('include', 'inventory.html');
    });

    it('Debe permitir iniciar el proceso de checkout correctamente', () => {

    //Agregar producto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    //Ir al carrito
    cy.get('.shopping_cart_link').click();

    //Ir al chechout
    cy.get('[data-test="checkout"]').click();

    //Llenar formulario
    cy.get('[data-test="firstName"]').type('Ruth');
    cy.get('[data-test="lastName"]').type('Guzman');
    cy.get('[data-test="postalCode"]').type('050033');


    cy.get('[data-test="continue"]').click();

    //Validaciones
    cy.url().should('include', 'checkout-step-two');
    cy.contains('Sauce Labs Backpack').should('be.visible');
    cy.get('[data-test="finish"]').should('be.visible');

  });
});