describe('Fluxo de checkout com dados inválidos', () => {

    beforeEach(() => {
        //Acesso ao site
        cy.visit('/')

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

        // Aqui validamos que o sistema está se comportando incorretamente
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
    })
})