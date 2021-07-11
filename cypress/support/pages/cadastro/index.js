const faker = require('faker')
const el = require('./elements').ELEMENTS

class Cadastro {

    acessarNovoCadastro(){
        cy.visit('/register')
    }

    preencherFormulario(){
        //Preencher Formulario
        cy.get(el.inputUser).type(faker.name.lastName()+'15')
        cy.get(el.inputEmail).type(faker.internet.email())
        cy.get(el.inputPass).type(12345678)
    }
    
    submeterCadastro(){
        //Submeter o artigo
        cy.get(el.btnSubmit).click()  
    }

    validarSubmissao(){
        cy.get(el.linkEditor).should('be.visible')
        cy.get(el.articlePreview).should('contain.text', el.previewText)
     }
}
export default new Cadastro()