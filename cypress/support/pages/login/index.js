const el = require('./elements').ELEMENTS

class Login {

    acessarLogin(){
        cy.visit('/login')
    }

    preencherForm(){
        //Preencher Formulario
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputPass).type(Cypress.config().user.password)
    }
    
    submeterForm(){
        //Submeter o artigo
        cy.get(el.btnSubmit).click()   
    }
    validarLogin(){
        cy.get(el.linkEditor).should('be.visible')
        cy.get(el.articlePreview).should('contain.text', el.previewText)
        cy.get(el.linkUsuario).should('contain.text', el.usuario)
     }


}
export default new Login()