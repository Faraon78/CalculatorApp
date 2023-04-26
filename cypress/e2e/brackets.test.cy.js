describe('Brackets in Class Components', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Open brackets', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(')

    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '((((((')

    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="value"]').should('have.text', '((((((4')

    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '((((((4()(')
  })

  it('Close brackets', () => {
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')

    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '()')
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '()')

    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '()((((6))))')

    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '()((((6))))')
  })
})

describe('Brackets in Function Components', () => {
  beforeEach(() => {
    cy.visit('/fc')
  })

  it('Open brackets', () => {
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '(')

    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '((((((')

    cy.get('[data-cy="4"]').click()
    cy.get('[data-cy="value"]').should('have.text', '((((((4')

    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '((((((4()(')
  })

  it('Close brackets', () => {
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '0')

    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '()')
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '()')

    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="openBrack"]').click()
    cy.get('[data-cy="6"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '()((((6))))')

    cy.get('[data-cy="closeBrack"]').click()
    cy.get('[data-cy="value"]').should('have.text', '()((((6))))')
  })
})
