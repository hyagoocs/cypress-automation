Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-test="input-loginEmail"]').type(email)
    cy.get('[data-test="input-loginPassword"]').type(password)
    cy.get('[data-test="submit-button"]').click()
})

Cypress.Commands.add('error_message', (message1, message2) => {
    cy.get('form > :nth-child(3)').should('contain', message1).should('be.visible')
    cy.get('form > :nth-child(6)').should('contain', message2).should('be.visible')
})