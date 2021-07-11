/// <reference types="cypress"/>

import login from "../support/pages/login";

//const faker = require('faker')

context('Login', () => {
    it('Fazer Login de um usuário com sucesso', () => {
        login.acessarLogin()
        login.preencherForm()
        login.submeterForm()
        login.validarLogin()
    });
});