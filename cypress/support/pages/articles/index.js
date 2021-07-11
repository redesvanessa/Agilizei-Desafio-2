const faker = require('faker')
const el = require('./elements').ELEMENTS
import Routes from '../../routes'

class Articles {

    acessarNovaPulicacao(){
        
        cy.visit('/editor/')
    }

    preencherFormulario(){
        //Preencher Formulario
        cy.get(el.inputTitle).type('Agilizei Title')
        cy.get(el.inputDescription).type('Agilizei Description Bootcamp Cypress')
        cy.get(el.textBody).type(faker.lorem.paragraph())
        cy.get(el.inputTag).type('#Cypress #Agilizei #Bootcamp #QA')
    }
  
    submeterArtigo(){
   
        //Submeter o artigo
        cy.get(el.btnSubmit).click()  
    
    }

    validarSubmissao(){

        cy.wait(`@${Routes.as.POSTArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.GETArticlesTitle}`).then((getArticlesTitleResponse) => {
            expect(getArticlesTitleResponse.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.GETArticlesTitleComments}`).then((getArticlesTitleCommentsResponse) => {
            expect(getArticlesTitleCommentsResponse.response.statusCode).to.eq(200)
        })

        cy.url().should('contain','article');  
        cy.get(el.usernameShowing).should('contain',el.username)
        cy.get(el.title).should('not.be.empty')
        cy.get(el.article).should('not.be.empty')
    }
}
export default new Articles()