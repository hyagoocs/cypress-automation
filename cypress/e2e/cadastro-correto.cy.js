describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
  });

  it('Deve preencher corretamente os campos de formulário de cadastro', () => {
    cy.register('Vanessa Caroline Betina Moreira', 'vanessa.moreira@teste.com', 'Senhateste123', 'Senhateste123')
  })
})
