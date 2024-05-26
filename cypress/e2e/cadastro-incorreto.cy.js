describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
  });

  it('Deve informar ao usuário que ocorre erro ao realizar cadastro sem informações corretas preenchidas', () => {
    cy.get('[data-test="submit-button"]').click()
    cy.get('form > :nth-child(5)').should('contain', 'É necessário informar um endereço de email').should('be.visible')
    cy.get('form > :nth-child(8)').should('contain', 'Crie uma senha').should('be.visible')
    cy.get('form > :nth-child(11)').should('contain', 'Repita a senha criada acima').should('be.visible')
  })
})
