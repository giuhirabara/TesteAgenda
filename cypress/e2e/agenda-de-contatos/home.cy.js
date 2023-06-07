describe('Testes de funcionalidades de contatos', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
    })
  
    it('Deve adicionar um novo contato', () => {
      cy.get('[data-testid="add-contact"]').click()
      cy.get('[data-testid="name-input"]').type('Joao Pedro')
      cy.get('[data-testid="email-input"]').type('Joao.Pedro@example.com')
      cy.get('[data-testid="phone-input"]').type('1234567890')
      cy.get('[data-testid="save-contact"]').click()
  
      cy.contains('Joao Pedro').should('exist')
    })
  
    it('Deve editar um contato existente', () => {
      cy.contains('Joao Pedro').parent().find('[data-testid="edit-contact"]').click()
      cy.get('[data-testid="name-input"]').clear().type('Ana Maria')
      cy.get('[data-testid="email-input"]').clear().type('Ana.Maria@example.com')
      cy.get('[data-testid="phone-input"]').clear().type('9876543210')
      cy.get('[data-testid="save-contact"]').click()
  
      cy.contains('Ana Maria').should('exist')
      cy.contains('Joao.Pedro@example.com').should('not.exist')
    })
  
    it('Deve remover um contato existente', () => {
      cy.contains('Ana Maria').parent().find('[data-testid="delete-contact"]').click()
  
      cy.contains('Ana Maria').should('not.exist')
    })
  })
  