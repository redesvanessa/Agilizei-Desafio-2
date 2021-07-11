class Routes{

    as = {
        POSTArticles: 'POSTArticles',
        GETArticlesTitle: 'GETArticlesTitle',
        GETArticlesTitleComments: 'GETArticlesTitleComments',
        POSTLogin : 'POSTLogin',
        GETTags: 'GETTags',
        GETArticles: 'GETArticles',
        POSTUser: 'POSTUser'
    }

    initArtigo(){
        cy.intercept('POST', '**/api/articles').as(this.as.POSTArticles)
        cy.intercept('GET', '**/api/articles/agilizei-title-**').as(this.as.GETArticlesTitle)
        cy.intercept('GET', '**/api/articles/agilizei-title-**/comments').as(this.as.GETArticlesTitleComments)
    }

    initLogin() {
        cy.intercept('POST', '**/api/users/login').as(this.as.POSTLogin)
        cy.intercept('GET', '**/api/tags').as(this.as.GETTags)
        cy.intercept('GET', '**/api/articles/feed?limit=10&offset=0').as(this.as.GETArticles)
    }

    initUser(){
        cy.intercept('POST', '**/api/users').as(this.as.POSTUser)
    }

}

export default new Routes()