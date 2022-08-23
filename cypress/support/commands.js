// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// função para fazer login no site
Cypress.Commands.add('login', (email, senha) => {

    cy.get('input[formcontrolname="email"').first().type(email);
    cy.get('input[formcontrolname="password"]').type(senha, { log: false });
    cy.get('button[type="submit"]').first().click();
})


// Função para selecionar aleatório combobox
Cypress.Commands.add("selecionaElementoAleatorio", (idDivResult) => {
    cy.get(idDivResult)
        .find('ul').should('have.class', 'sp-results')
        .find('li')
        .its('length')
        .then((len) => {
            cy.get(idDivResult)
                .find('ul').should('have.class', 'sp-results')
                .find('li')
                .eq(0)
                //Math.floor(Math.random() * (len + 0)))
                .wait(500)
                .click({ force: true });
        })
})

//Por ora ignora
Cypress.Commands.add("escolheProcesso", (idCampo, tamanho) => {

    function makeid(length) {
        var result = '';
        var characters = '123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    cy.get(idCampo).first().type(makeid(tamanho));

})
