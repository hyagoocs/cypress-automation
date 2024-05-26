describe('Pagina inicial', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
    });

    it('Deve verificar se existe texto na página', () => {
        cy.title().should('eq', 'AdoPet')
        cy.contains('p', 'Quem ama adota!').should('be.visible')
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')

    });
    
});