describe('test', () => {
    it('works', () => {
        cy.visit('/')
        const header = cy.get('h1')
        header.should('contain', 'Loggymandias')
    })
})