/// <reference types="cypress"/>

import cadastro from "../support/pages/cadastro";


context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cadastro.acessarNovoCadastro()
        cadastro.preencherFormulario()
        cadastro.submeterCadastro()
        cadastro.validarSubmissao()
    });
});