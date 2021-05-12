

describe('Create ToDos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('accepts input', () => {
    const testText = 'Write something'

    cy.visit('/')

    cy.get('.text-field')
      .type(testText)
      .should('have.value', testText)
  })

  context('Submit todo', () => {
    const secondTest = 'Second Test'
    it('Adds a new todo element and checks if it has been added', () => {
      cy.get('.text-field')
        .type(secondTest)

      cy.get('#submit').click()

      cy.contains(secondTest)
    })
  })
})
