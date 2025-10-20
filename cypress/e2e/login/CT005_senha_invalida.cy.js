describe('Tentar login com usuário válido e senha inválida', () => {
    
    it('Deve evitar a realização do login e exibir uma mensagem dizendo “Epic sadface: Username and password do not match any user in this service” na tela', () => {
        
        cy.visit('/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('teste123')
        cy.get('#login-button').click()

        cy.get('[data-test="error"]').should("contain", "Epic sadface: Username and password do not match any user in this service")
    })
}) 