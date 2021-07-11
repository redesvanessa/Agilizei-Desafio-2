const el = require('./elements').ELEMENTS
import Routes from '../../routes'

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

        cy.wait(`@${Routes.as.POSTLogin}`).then((postLoginRes) => {
            expect(postLoginRes.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.GETTags}`).then((getTagsRes) => {
            expect(getTagsRes.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.GETArticles}`).then((getArticlesRes) => {
            expect(getArticlesRes.response.statusCode).to.eq(200)
        })

        cy.get(el.linkEditor).should('be.visible')
        cy.get(el.articlePreview).should('contain.text', el.previewText)
        cy.get(el.linkUsuario).should('contain.text', el.usuario)
     }


}
export default new Login()