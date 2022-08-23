describe('Peticionamento', () => {
    //O que será realizado a cada case test
    beforeEach(() => {
        cy.visit('/');
        cy.login('joao.morandin@integrativa.com.br', 'Integrativa@147');
        cy.wait(3000);
        cy.visit('#/interlitis/peticionamento');
    })

    it('peticionando um texto livre', () => {
        cy.get('#codModelo').type(10);
        cy.get('#procuradoresPeticionamento').click();
        cy.selecionaElementoAleatorio('#optionsContainerprocuradoresPeticionamento');
        cy.get('#inputNroProcessoCnj')
            .click()
        cy.get('#inputNroProcessoCnj').first().type('62');
        cy.wait(1000);
        cy.get('#spinnerButtonspinnerAdicionarPeticaoOptions').click();
        cy.wait(15000);
        cy.get('#table_gridPeticionamento')
            .find('[class="form-check-label"]')
            .click();
    })

})