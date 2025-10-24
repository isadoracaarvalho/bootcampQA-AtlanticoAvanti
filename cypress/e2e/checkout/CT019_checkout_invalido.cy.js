describe('Fluxo de checkout com dados inválidos', () => {

    beforeEach(() => {
        //Acesso ao site
        cy.visit('https://www.saucedemo.com/v1/')

        //Login
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
    })                          


    it('Adiciona produto ao carrinho', () => {
        cy.get('.inventory_item').first().find('button').click()

        cy.get('.shopping_cart_link').click()

        // Checkout
        cy.get('.btn_action.checkout_button').click()

        //Preenchimento do form com as informações do cliente
        cy.get('[data-test="firstName"]').type('111111111111')
        cy.get('[data-test="lastName"]').type('2222222222')
        cy.get('[data-test="postalCode"]').type('aaaaaaaaaa')
        cy.get('.btn_primary.cart_button').click()

        //Finalização da compra
        cy.get('.btn_action.cart_button').click()

        //Validação da mensagem de sucesso
        cy.get('h2').should('contain.text', 'THANK YOU FOR YOUR ORDER')
    })
})