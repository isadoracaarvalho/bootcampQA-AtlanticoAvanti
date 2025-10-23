describe('Validar o login', () => {
    
    it('login Válido', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').click()
      cy.get('#user-name').type('standard_user')
      cy.get('#password').click()
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      // validar se realmente o usuario logou com sucesso
      cy.get('.title').should('have.text','Products')
    });
    
});