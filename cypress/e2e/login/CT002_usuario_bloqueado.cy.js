describe('Login com um usuário bloqueado ("locked_out_user")', () => {
    
    it('Deve evitar a realização do login e exibir uma mensagem dizendo “Epic sadface: Sorry, this user has been locked out” na tela', () => {
        
        cy.visit('/')
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get("h3").should("contain", "Epic sadface: Sorry, this user has been locked out")
    })

}) 