describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
    });

    it('Deve preencher corretamente os campos de formulário de login', () => {
        cy.get('[data-test="login-button"]').click()
        cy.login('vanessa.moreira@teste.com', 'Senhateste123')
    })

    it('Deve preencher corretamente os campos de formulário de login', () => {
        cy.get('.header__message').click()
        cy.login('vanessa.moreira@teste.com', 'Senhateste123')
    })
})
