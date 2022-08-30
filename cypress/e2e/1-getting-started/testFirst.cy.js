describe ('Primeras pruebas', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Parte superior', () => {
        cy.fixture('index').then((index)=> {
            cy.get(index.logoHigher).should('be.visible')
            cy.get(index.cellCanvas).scrollIntoView().should('be.visible')
            cy.get(index.sizeButton).scrollIntoView().should('be.visible')
        })
    })
    it('Segunda parte', () => {
        cy.fixture('index').then((index)=> {
            cy.get(index.logoHigher).scrollIntoView()
            cy.get(index.sizeButton).scrollIntoView().click()
            cy.get(index.sizeClose).click()
        })
    })
})