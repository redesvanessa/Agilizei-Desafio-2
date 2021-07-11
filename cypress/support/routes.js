class Routes{

    as = {
        POSTArticles: 'POSTArticles',
        GETArticlesTitle: 'GETArticlesTitle',
        GETArticlesTitleComments: 'GETArticlesTitleComments'
    }

    initArtigo(){
        cy.intercept('POST', '**/api/articles' ).as(this.as.POSTArticles)
        cy.intercept('GET', '**/api/articles/agilizei-title-**' ).as(this.as.GETArticlesTitle)
        cy.intercept('GET', '**/api/articles/agilizei-title-**/comments' ).as(this.as.GETArticlesTitleComments)
    }

}

export default new Routes()
