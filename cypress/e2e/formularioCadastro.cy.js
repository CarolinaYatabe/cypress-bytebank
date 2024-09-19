describe('Formulário Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Usuário deve conseguir se cadastrar com sucesso', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('Gui Lima')
        cy.getByData('email-input').type('guilherme@dominio.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })

    it('Nao deve permitir usuários já cadastrados', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('carol')
        cy.getByData('email-input').type('carol@dominio.com')
        cy.getByData('senha-input').type('12345')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'E-mail já cadastrado!')
    })

    it.only('Não deve permitir o cadastro de usuários com email e senha inválido', ()=>{
        cy.getByData('botao-cadastro').click()
        cy.getByData('email-input').type('moni@alura.com')
        cy.getByData('senha-input').type('987654')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório')
    })
})
