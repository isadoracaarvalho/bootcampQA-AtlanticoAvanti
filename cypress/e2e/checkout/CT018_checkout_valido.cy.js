describe('Fluxo de checkout com dados válidos', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
     
  })

  it('Adicionando ao carrinho Preencher e finaliza compra', () => {
    //adicionando produto.
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    // Preenche dados
    cy.get('[data-test="firstName"]').type('Leandro')
    cy.get('[data-test="lastName"]').type('Freire')
    cy.get('[data-test="postalCode"]').type('54000000')
    cy.get('[data-test="continue"]').click()

    // Finaliza compra
    cy.get('[data-test="finish"]').click()

    // Validação final
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')

  })
})