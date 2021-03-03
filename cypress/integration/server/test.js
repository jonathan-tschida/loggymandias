describe('test', () => {
    it('works', () => {
        cy.request({
            url: '/api'
        }).then(res => {
            expect(res.body.message).to.eq('Loggymandias')
        })
    })
})