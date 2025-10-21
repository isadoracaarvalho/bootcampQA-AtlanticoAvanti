describe('Tentar prosseguir no checkout deixando cada um dos campos  obrigatórios em branco, um de cada vez', () => {
    
    beforeEach( () => {
        cy.visit('/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('.inventory_item').first().find('button').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.checkout_button').click()

    })

    it('Tentar prosseguir no checkout com o campo First Name em branco e os outros campos válidos', () => {
        cy.get('#first-name').clear()
        cy.get('#last-name').type('Carvalho')
        cy.get('#postal-code').type('1234')
        cy.get('.cart_button').click()
        
        cy.get('h3').should('contain', 'Error: First Name is required')
    })

    it('Tentar prosseguir no checkout com o campo Last Name em branco e os outros campos válidos', () => {
        cy.get('#first-name').type('Isadora')
        cy.get('#last-name').clear()
        cy.get('#postal-code').type('1234')
        cy.get('.cart_button').click()
        
        cy.get('h3').should('contain', 'Error: Last Name is required')
    })

    it('Tentar prosseguir no checkout com o campo Zip Code em branco e os outros campos válidos', () => {
        cy.get('#first-name').type('Isadora')
        cy.get('#last-name').type('Carvalho')
        cy.get('#postal-code').clear()
        cy.get('.cart_button').click()
        
        cy.get('h3').should('contain', 'Error: Postal Code is required')
    })

}) 