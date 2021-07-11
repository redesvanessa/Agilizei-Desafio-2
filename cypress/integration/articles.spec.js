/// <reference types="cypress"/>

import articles from "../support/pages/articles";

context('Artigos', () => {
  
    beforeEach(() => {

        cy.backGroundLogin()
        articles.acessarNovaPulicacao() 
    });
    it('Cadastrar um novo artigo', () => {
        articles.preencherFormulario()
        articles.submeterArtigo()
        articles.validarSubmissao()
    });
});