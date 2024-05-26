describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click()

    });

    it('Deve clicar no botão de submit sem inserir informações e exibir mensagens de erro ao usuário na página', () => {
        cy.get('[data-test="submit-button"]').click()
        cy.error_message('É necessário informar um endereço de email', 'Insira sua senha')
    })

    it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
        cy.login('testeemail', 'testesenha')
        cy.error_message('Por favor, verifique o email digitado', 'A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres')
    });
})
