describe('Jornadas de usuário', () => {
    it('Deve permitir que a peassoa usuária acesse a aplicação, realize uma transação e faça logout', () => {
        cy.visit('/')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('select-opcoes').select('Transferência')
        cy.getByData('form-input').type('80')
        cy.getByData('realiza-transacao').click()

        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80')

        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq', '/')
    })

    it.only('Deve permitir que o usuário faça o cadastro, depois faça o login e entre na home', () => {
        cy.visit('/')

        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('usuario')
        cy.getByData('email-input').type('usuario1@dominio.com')
        cy.getByData('senha-input').type('1234')
        cy.getByData('checkbox-input').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('usuario1@dominio.com')
        cy.getByData('senha-input').type('1234')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')
    })
})